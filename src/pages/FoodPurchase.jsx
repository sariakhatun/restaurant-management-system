import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer } from "react-toastify";
import Loading from "../Components/Loading";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router";
import { auth } from "../Firebase/Firebase.init";

const FoodPurchase = () => {
  const { user } = useAuth();
  const location = useLocation();
  const {
    imageUrl,
    foodName,
    price,
    userName,
    ownerEmail,
    availableQuantity,
    _id,
  } = location.state;

  const [quantityError, setQuantityError] = useState("");

  if (!user) return <Loading />;

  const isOwnFood = user.email === ownerEmail;
  const isOutOfStock = availableQuantity == 0;

  const handlePurchase = async (e) => {
    e.preventDefault();
    const form = e.target;
    const quantity = parseInt(form.quantity.value);

    if (quantity > availableQuantity) {
      setQuantityError(`You can only purchase up to ${availableQuantity} items.`);
      return;
    }

    const currentDate = moment().format("MMMM Do YYYY, h:mm:ss a");
    const formData = new FormData(form);
    formData.append("buyingDate", currentDate);

    const purchasedItem = Object.fromEntries(formData.entries());

    axios
      .post("https://b11a11-server-side-sariakhatun.vercel.app/purchased", purchasedItem)
      .then(async(res) => {
        if (res.data) {
                  const token = await auth.currentUser.getIdToken();

            axios.patch(`https://b11a11-server-side-sariakhatun.vercel.app/foods/purchased/${_id}`,{},{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            .then(()=>console.log('purchase count updated'))
            .catch(err=>console.error('purchase count update failed',err))


          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Purchased Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-[#f74526] mb-6">
        Complete Your Purchase
      </h2>

      {isOwnFood && (
        <p className="text-red-500 font-semibold mb-4 text-center">
          ❌ You cannot purchase your own food item.
        </p>
      )}

      {isOutOfStock && (
        <p className="text-red-500 font-semibold mb-4 text-center">
          ❌ This item is currently out of stock.
        </p>
      )}

      <form onSubmit={handlePurchase} className="grid gap-6">
        <input type="hidden" name="availableQuantity" value={availableQuantity} />
        <input type="hidden" name="ownerEmail" value={ownerEmail} />

        {/* Image URL */}
        <div>
          <label className="block mb-1 font-medium">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Owner */}
        <div>
          <label className="block mb-1 font-medium">Food Owner</label>
          <input
            type="text"
            name="ownerName"
            value={userName}
            readOnly
            className="input input-bordered w-full"
          />
        </div>

        {/* Food Name */}
        <div>
          <label className="block mb-1 font-medium">Food Name</label>
          <input
            type="text"
            name="foodName"
            placeholder={foodName}
            required
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price (USD)</label>
          <input
            type="text"
            name="price"
            placeholder={price}
            required
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-1 font-medium">
            Quantity (Available: {availableQuantity})
          </label>
          <input
            type="number"
            name="quantity"
            required
            min="1"
            max={availableQuantity}
            className="input input-bordered w-full"
            disabled={isOutOfStock || isOwnFood}
          />
          {quantityError && (
            <p className="text-red-500 mt-1">{quantityError}</p>
          )}
        </div>

        {/* Buyer Info */}
        <div>
          <label className="block mb-1 font-medium">Buyer Name</label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            name="userName"
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Buyer Email</label>
          <input
            type="email"
            value={user.email}
            name="buyerEmail"
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Buying Date</label>
          <input
            type="text"
            value={moment().format("MMMM Do YYYY, h:mm:ss a")}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="btn bg-[#f74526] hover:bg-[#e43c1c] text-white px-10"
            disabled={isOutOfStock || isOwnFood}
          >
            Purchase
          </button>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default FoodPurchase;

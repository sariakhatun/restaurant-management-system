import React, { useState, useContext, useEffect } from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer } from "react-toastify";
import Loading from "../Components/Loading";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router";
import { auth } from "../Firebase/Firebase.init";
import { ThemeContext } from "../Components/ThemeContext";

const FoodPurchase = () => {
  const { user } = useAuth();
  const location = useLocation() || {};
    const navigate = useNavigate();

   useEffect(() => {
    if (!location.state) {
      // If no state is found, redirect to home or any fallback page
      navigate("/", { replace: true });
    }
  }, [location.state, navigate]);

  // If location.state is null, don’t destructure to avoid error
  if (!location.state) {
    return <Loading></Loading>;
  }
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
  const { theme } = useContext(ThemeContext);

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
      .then(async (res) => {
        if (res.data) {
          const token = await auth.currentUser.getIdToken();

          axios
            .patch(
              `https://b11a11-server-side-sariakhatun.vercel.app/foods/purchased/${_id}`,
              {},
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            )
            .then(() => console.log("purchase count updated"))
            .catch((err) => console.error("purchase count update failed", err));

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

  // Theme classes
  const containerBgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const inputBgClass = theme === "dark" ? "bg-gray-700 text-white" : "bg-gray-100 text-gray-900";
  const labelTextClass = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const btnClass = theme === "dark"
    ? "bg-orange-400 hover:bg-orange-700 text-white"
    : "bg-[#f74526] hover:bg-[#e43c1c] text-white";
  let headingClass = theme === "dark"? "text-orange-400 " : "text-[#f74526] "

  const errorTextClass = "text-red-500 mt-1";

  return (
    <div className={`mx-auto mt-24 py-6 rounded-xl shadow-md max-w-5xl px-6 ${containerBgClass}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 ${headingClass}`}>
        Complete Your Purchase
      </h2>

      {isOwnFood && (
        <p className={`${errorTextClass} font-semibold mb-4 text-center`}>
          ❌ You cannot purchase your own food item.
        </p>
      )}

      {isOutOfStock && (
        <p className={`${errorTextClass} font-semibold mb-4 text-center`}>
          ❌ This item is currently out of stock.
        </p>
      )}

      <form
        onSubmit={handlePurchase}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <input type="hidden" name="availableQuantity" value={availableQuantity} />
        <input type="hidden" name="ownerEmail" value={ownerEmail} />

        {/* Image URL */}
        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={imageUrl}
            readOnly
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Owner */}
        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Food Owner</label>
          <input
            type="text"
            name="ownerName"
            value={userName}
            readOnly
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Food Name */}
        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Food Name</label>
          <input
            type="text"
            name="foodName"
            placeholder={foodName}
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Price */}
        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Price (USD)</label>
          <input
            type="text"
            name="price"
            placeholder={price}
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Quantity */}
        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>
            Quantity (Available: {availableQuantity})
          </label>
          <input
            type="number"
            name="quantity"
            required
            min="1"
            max={availableQuantity}
            className={`input input-bordered w-full ${inputBgClass}`}
            disabled={isOutOfStock || isOwnFood}
          />
          {quantityError && <p className={errorTextClass}>{quantityError}</p>}
        </div>

        {/* Buyer Info */}
        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Buyer Name</label>
          <input
            type="text"
            value={user.displayName}
            readOnly
            name="userName"
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Buyer Email</label>
          <input
            type="email"
            value={user.email}
            name="buyerEmail"
            readOnly
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Buying Date</label>
          <input
            type="text"
            value={moment().format("MMMM Do YYYY, h:mm:ss a")}
            readOnly
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className={`btn px-10 ${btnClass} lg:mt-6`}
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

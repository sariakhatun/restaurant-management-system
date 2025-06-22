import React from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer } from "react-toastify";
import Loading from "../Components/Loading";
import moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router";

const FoodPurchase = () => {
  let { user } = useAuth();
  console.log(user);
  let location = useLocation()
  let { imageUrl,foodName,price,userName} = location.state

  let handlePurchase = (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);

    let currentDate =moment().format('MMMM Do YYYY, h:mm:ss a');
    formData.append("buyingDate", currentDate);
    let purchasedItem = Object.fromEntries(formData.entries());

    console.log(purchasedItem);

    axios
      .post("http://localhost:3000/purchased", purchasedItem)
      .then((res) => {
        console.log("after adding to db", res.data);
        if (res.data) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Purchased Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
    form.reset();
  };
  if (!user) {
    return <Loading></Loading>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-[#f74526] mb-6">
        Complete Your Purchase
      </h2>
      <form onSubmit={handlePurchase} className="grid gap-6">
        {/* Food Image */}
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
         {/* food owner */}
        <div>
          <label className="block mb-1 font-medium">Food Owner</label>
          <input
            type="name"
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
          <label className="block mb-1 font-medium">Quantity</label>
          <input
            type="number"
            name="quantity"
            required
            className="input input-bordered w-full"
          />
        </div>
       

        {/* date */}
        <div>
          <label className="block mb-1 font-medium">Buying Date and Time</label>
          <input
            type="text"
            value={moment().format('MMMM Do YYYY, h:mm:ss a')}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        {/* Buyer Name */}
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

        {/* Buyer Email */}
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

        <div className="text-center">
          <button
            type="submit"
            className="btn bg-[#f74526] hover:bg-[#e43c1c] text-white px-10"
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

import React, { useContext } from "react";
import useAuth from "../hooks/useAuth";
import { ToastContainer } from "react-toastify";
import { useLoaderData } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { ThemeContext } from "../Components/ThemeContext"; // adjust path if needed

const UpdateFood = () => {
  const { theme } = useContext(ThemeContext);
  const { user } = useAuth();
  const { foodName, imageUrl, category, quantity, price, origin, description, _id } = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedFood = Object.fromEntries(formData.entries());

    axios
      .put(`https://b11a11-server-side-sariakhatun.vercel.app/foods/${_id}`, updatedFood)
      .then((res) => {
        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        // console.error(error)
      });
  };

  // Theme-based classes
  const containerBgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const inputBgClass = theme === "dark" ? "bg-gray-700 text-white placeholder-gray-300" : "bg-white text-gray-900";
  const textareaBgClass = theme === "dark" ? "bg-gray-700 text-white placeholder-gray-300" : "bg-white text-gray-900";
  const btnClass =
    theme === "dark"
      ? "btn btn-outline border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
      : "btn btn-outline text-[#e43c1c] hover:bg-[#e43c1c] hover:text-white";

  return (
    <div className={`mx-auto py-8 rounded-xl mt-24 shadow-lg max-w-7xl px-6 ${containerBgClass}`}>
      <h2 className="text-3xl font-bold text-center mb-6 great-vibes text-orange-500">Update Food Item</h2>
      <form onSubmit={handleSubmit} className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Food Name */}
        <div>
          <label className="block mb-1 font-medium">Food Name</label>
          <input
            type="text"
            name="foodName"
            defaultValue={foodName}
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Food Image URL */}
        <div>
          <label className="block mb-1 font-medium">Food Image URL</label>
          <input
            type="text"
            name="imageUrl"
            defaultValue={imageUrl}
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
            defaultValue={category}
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-1 font-medium">Quantity (Plate)</label>
          <input
            type="number"
            name="quantity"
            defaultValue={quantity}
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 font-medium">Price (USD)</label>
          <input
            type="number"
            name="price"
            step="0.01"
            defaultValue={price}
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Food Origin */}
        <div>
          <label className="block mb-1 font-medium">Food Origin (Country)</label>
          <input
            type="text"
            name="origin"
            defaultValue={origin}
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Short Description</label>
          <textarea
            name="description"
            rows="4"
            defaultValue={description}
            required
            className={`textarea textarea-bordered w-full ${textareaBgClass}`}
            placeholder="Ingredients, cooking steps, taste notes..."
          ></textarea>
        </div>

        {/* User Email */}
        <div>
          <label className="block mb-1 font-medium">Added By (Email)</label>
          <input
            type="text"
            value={user?.email || "Loading..."}
            readOnly
            name="userEmail"
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block mb-1 font-medium">Added By (Name)</label>
          <input
            type="text"
            value={user?.displayName || "Loading..."}
            readOnly
            name="userName"
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        {/* Submit */}
        <div className="md:col-span-2 text-center">
          <button type="submit" className={`${btnClass} px-10 lg:mt-6`}>
            Update Item
          </button>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default UpdateFood;

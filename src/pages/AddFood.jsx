import React, { useContext } from "react";
import { AuthContext } from "../Components/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import { getAuth } from "firebase/auth";
import { ThemeContext } from "../Components/ThemeContext";

const AddFood = () => {
  const { user } = useAuth();
  const { theme } = useContext(ThemeContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let form = e.target;
    let formData = new FormData(form);
    let foodItem = Object.fromEntries(formData.entries());

    let token = await getAuth().currentUser.getIdToken();
    // console.log(foodItem);

    axios
      .post("https://b11a11-server-side-sariakhatun.vercel.app/foods", foodItem, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("after adding to db", res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Food Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        // console.log(error)
      });
    form.reset();
  };

  // Theme based classes
  const containerBgClass = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const inputBgClass = theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900";
  const labelTextClass = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const textareaBgClass = theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-gray-900";
  const btnClass =
    theme === "dark"
      ? "btn btn-outline border-orange-400 text-orange-400 hover:bg-orange-600 hover:text-white"
      : "btn btn-outline border-[#e43c1c] text-[#e43c1c] hover:bg-[#e43c1c] hover:text-white";
  let headingClass = theme === "dark"? "text-orange-400 " : "text-[#f74526] "

  return (
    <div className={`mx-auto py-8 rounded-xl shadow-lg mt-24 max-w-7xl px-6 ${containerBgClass}`}>
      <h2 className={`text-3xl font-bold text-center mb-6 great-vibes ${headingClass}`}>
        Add New Food Item
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Food Name</label>
          <input
            type="text"
            name="foodName"
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Food Image URL</label>
          <input
            type="text"
            name="imageUrl"
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Category</label>
          <input
            type="text"
            name="category"
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Quantity (Plate)</label>
          <input
            type="number"
            name="quantity"
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Price (USD)</label>
          <input
            type="number"
            name="price"
            step="0.01"
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Food Origin (Country)</label>
          <input
            type="text"
            name="origin"
            required
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div className="md:col-span-2">
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Short Description</label>
          <textarea
            name="description"
            rows="4"
            required
            className={`textarea textarea-bordered w-full ${textareaBgClass}`}
            placeholder="Ingredients, cooking steps, taste notes..."
          ></textarea>
        </div>

        {/* Display user info (disabled) */}
        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Added By (Email)</label>
          <input
            type="text"
            value={user?.email || "Loading..."}
            readOnly
            name="userEmail"
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div>
          <label className={`block mb-1 font-medium ${labelTextClass}`}>Added By (Name)</label>
          <input
            type="text"
            value={user?.displayName || "Loading..."}
            readOnly
            name="userName"
            className={`input input-bordered w-full ${inputBgClass}`}
          />
        </div>

        <div className="md:col-span-2 text-center">
          <button type="submit" className={`${btnClass} px-10 mt-6`}>
            Add Item
          </button>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default AddFood;

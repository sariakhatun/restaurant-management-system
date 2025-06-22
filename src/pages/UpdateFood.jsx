import React from 'react';
import useAuth from '../hooks/useAuth';
import { ToastContainer } from 'react-toastify';
import { useLoaderData } from 'react-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const UpdateFood = () => {

    let {user} = useAuth()
    let {foodName,imageUrl,category,quantity,price,origin,description,_id} = useLoaderData()
   

    let handleSubmit=e=>{
        e.preventDefault();
        let form=e.target;
        let formData = new FormData(form)
        let updatedFood = Object.fromEntries(formData.entries())
        console.log(updatedFood)

        //send updated food to the db

        axios.put(`http://localhost:3000/foods/${_id}`,updatedFood)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount){
                 Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Food Updated Successfully",
                   showConfirmButton: false,
                   timer: 1500,
                 });
            }
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
         <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-center text-[#f74526] mb-6 great-vibes ">
        Update Food Item
      </h2>
      <form onSubmit={handleSubmit} className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div>
          <label className="block mb-1 font-medium">Food Name</label>
          <input
            type="text"
            name="foodName"
           defaultValue={foodName}
            
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Food Image URL</label>
          <input
            type="text"
            name="imageUrl"
           defaultValue={imageUrl}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <input
            type="text"
            name="category"
           defaultValue={category}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Quantity (Plate)</label>
          <input
            type="number"
            name="quantity"
           defaultValue={quantity}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Price (USD)</label>
          <input
            type="number"
            name="price"
            step="0.01"
          defaultValue={price}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Food Origin (Country)</label>
          <input
            type="text"
            name="origin"
           defaultValue={origin}
            required
            className="input input-bordered w-full"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block mb-1 font-medium">Short Description</label>
          <textarea
            name="description"
            rows="4"
           defaultValue={description}
            required
            className="textarea textarea-bordered w-full"
            placeholder="Ingredients, cooking steps, taste notes..."
          ></textarea>
        </div>

        {/* Display user info (disabled) */}
        <div>
          <label className="block mb-1 font-medium">Added By (Email)</label>
           <input
          type="text"
          value={user?.email || "Loading..."}
          readOnly name="userEmail"
          className="input input-bordered w-full "
        />
        </div>

        <div>
          <label className="block mb-1 font-medium">Added By (Name)</label>
         <input
          type="text"
          value={user?.displayName || "Loading..."}
          readOnly name="userName"
          className="input input-bordered w-full "
        />

        </div>

        <div className="md:col-span-2 text-center">
          <button type="submit" className="btn btn-outline text-[#e43c1c] hover:bg-[#e43c1c] hover:text-white px-10">
            Update Item
          </button>
        </div>
      </form>
      <ToastContainer position="top-center" />
    </div>
    );
};

export default UpdateFood;
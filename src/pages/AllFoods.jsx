import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllFoods = () => {
  let initialFoods = useLoaderData();
  let [foods, setFoods] = useState(initialFoods);

  console.log(foods);
  let [search,setSearch]=useState('')
  console.log(search)
  useEffect(()=>{
    fetch(`http://localhost:3000/foods?searchParams=${search}`)
    .then(res=>res.json())
    .then(data=>{
       setFoods(data)
    })
  },[search])
  return (
    <div>
      {/* Page Title Section */}
      <div className="bg-gradient-to-r from-[#f74526] to-[#ff9a8b] py-20 text-center text-white rounded-tr-4xl rounded-bl-4xl mb-4">
        <h1 className="text-4xl md:text-5xl font-bold great-vibes">
          All Delicious Foods
        </h1>
      </div>
      {/* search */}
      <div className="flex items-center justify-center">
        <label className="input mt-4">
        <svg
          className="h-[1em] opacity-50 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24" 
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" className="grow" placeholder="Search" onChange={(e)=>setSearch(e.target.value)}/>
       
      </label>
      </div>

      {/* Food Cards Section */}
      <div className="max-w-6xl mx-auto px-4 py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-white rounded-xl shadow-md overflow-hidden border border-[#ffd8cc]"
          >
            <img
              src={food.imageUrl}
              alt={food.foodName}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-[#f74526]">
                {food.foodName}
              </h2>
              <p className="text-gray-600">Category: {food.category}</p>
              <p className="text-gray-600">Price: ${food.price}</p>
              <p className="text-gray-600">
                Available Quantity: {food.quantity}
              </p>
              <div className="text-right mt-4">
                <Link to={`/singleFood/${food._id}`}>
                  <button className="px-4 py-2 bg-[#f74526] hover:bg-[#e43c1c] text-white rounded">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;

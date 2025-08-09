import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

const AllFoods = () => {
  let initialFoods = useLoaderData();
  let [foods, setFoods] = useState(initialFoods);

 // console.log(foods);
  let [search,setSearch]=useState('')
  
  let [sortOrder, setSortOrder] = useState(""); // 'asc' or 'desc'

 // console.log(search)
  useEffect(()=>{
    fetch(`https://b11a11-server-side-sariakhatun.vercel.app/foods?searchParams=${search}`)
    .then(res=>res.json())
    .then(data=>{
       setFoods(data)
    })
  },[search])

  // Sort foods locally whenever foods or sortOrder changes
  useEffect(() => {
    if (sortOrder === "asc") {
      setFoods((prevFoods) =>
        [...prevFoods].sort((a, b) => a.price - b.price)
      );
    } else if (sortOrder === "desc") {
      setFoods((prevFoods) =>
        [...prevFoods].sort((a, b) => b.price - a.price)
      );
    }
  }, [sortOrder]);
  return (
    <div>
      {/* Page Title Section */}
      <div className="bg-gradient-to-r from-[#f74526] to-[#ff9a8b] mt-24 py-20 text-center text-white rounded-tr-4xl rounded-bl-4xl mb-4">
        <h1 className="text-4xl md:text-5xl font-bold great-vibes">
          All Delicious Foods
        </h1>
      </div>
      {/* search */}
      <div className="flex items-center justify-center gap-4">
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
        <input type="search" className="grow" placeholder="Search by name..." onChange={(e)=>setSearch(e.target.value)}/>
       
      </label>
       <select
          className="input mt-4 input-bordered w-full md:w-1/4 rounded border  "
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          aria-label="Sort foods by price"
        >
          <option value="">Sort by Price</option>
          <option value="asc">Price: Low to High ↑</option>
          <option value="desc">Price: High to Low ↓</option>
        </select>
      </div>

      {/* Food Cards Section */}
      <div className=" mx-auto py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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

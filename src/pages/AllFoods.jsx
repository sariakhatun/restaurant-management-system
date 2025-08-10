import React, { useEffect, useState, useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { ThemeContext } from "../Components/ThemeContext";

const AllFoods = () => {
  let initialFoods = useLoaderData();
  let [foods, setFoods] = useState(initialFoods);

  let [search, setSearch] = useState("");
  let [sortOrder, setSortOrder] = useState(""); // 'asc' or 'desc'

  let { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch(`https://b11a11-server-side-sariakhatun.vercel.app/foods?searchParams=${search}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
      });
  }, [search]);

  // Sort foods locally whenever foods or sortOrder changes
  useEffect(() => {
    if (sortOrder === "asc") {
      setFoods((prevFoods) => [...prevFoods].sort((a, b) => a.price - b.price));
    } else if (sortOrder === "desc") {
      setFoods((prevFoods) => [...prevFoods].sort((a, b) => b.price - a.price));
    }
  }, [sortOrder]);

  // Define colors based on theme
  const headingTextClass = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const bgGradientClass = theme === "dark" 
    ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black" 
    : "bg-gradient-to-r from-[#f74526] to-[#ff9a8b]";
  const cardBgClass = theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-[#ffd8cc]";
  const textPrimaryClass = theme === "dark" ? "text-white" : "text-gray-600";
  const buttonBgClass = theme === "dark" ? "bg-orange-500 hover:bg-orange-600" : "bg-[#f74526] hover:bg-[#e43c1c]";
  const inputBgClass = theme === "dark" ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400" : "";
  
  return (
    <div className={`min-h-screen` }>
      {/* Page Title Section */}
      <div className={`${bgGradientClass} mt-24 py-20 text-center rounded-tr-4xl rounded-bl-4xl mb-4`}>
        <h1 className={`text-4xl md:text-5xl font-bold great-vibes ${headingTextClass}`}>
          All Delicious Foods
        </h1>
      </div>

      {/* Search and Sort */}
      <div className="flex items-center justify-center gap-4 px-4 md:px-0">
        <label className={`input mt-4 flex items-center border rounded px-2 ${inputBgClass}`}>
          <svg
            className="h-5 w-5 opacity-50 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            fill="none"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="M21 21l-4.3-4.3"></path>
          </svg>
          <input
            type="search"
            className={`grow bg-transparent outline-none ${textPrimaryClass}`}
            placeholder="Search by name..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <select
          className={`input mt-4 input-bordered w-full md:w-1/4 rounded border ${inputBgClass} ${textPrimaryClass}`}
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
      <div className="mx-auto py-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-0">
        {foods.map((food) => (
          <div
            key={food._id}
            className={`${cardBgClass} rounded-xl shadow-md overflow-hidden border`}
          >
            <img
              src={food.imageUrl}
              alt={food.foodName}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h2 className={`text-xl font-semibold ${headingTextClass}`}>
                {food.foodName}
              </h2>
              <p className={`${textPrimaryClass}`}>Category: {food.category}</p>
              <p className={`${textPrimaryClass}`}>Price: ${food.price}</p>
              <p className={`${textPrimaryClass}`}>
                Available Quantity: {food.quantity}
              </p>
              <div className="text-right mt-4">
                <Link to={`/singleFood/${food._id}`}>
                  <button
                    className={`${buttonBgClass} text-white px-4 py-2 rounded`}
                  >
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

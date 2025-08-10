import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router";
import axios from "axios";
import { ThemeContext } from "../Components/ThemeContext";


const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    axios.get("https://b11a11-server-side-sariakhatun.vercel.app/topFoods")
      .then(res => setTopFoods(res.data))
      .catch(err => console.error("Failed to fetch top foods", err));
  }, []);

  // Define styles based on theme
  
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const cardBorder = theme === "dark" ? "border-gray-700" : "border-[#ffd8cc]";
  const textPrimary = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const buttonBg = theme === "dark" ? "bg-orange-400 hover:bg-orange-600" : "bg-[#f74526] hover:bg-[#e43c1c]";
  const buttonText = "text-white";

  return (
    <div className={`mx-auto py-12 mb-12`}>
      <h2 className={`text-4xl font-bold text-center ${textPrimary} great-vibes mb-10`}>
        🍽️ Top Selling Foods
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topFoods.map(food => (
          <div
            key={food._id}
            className={`${cardBg} rounded-xl shadow-md border ${cardBorder} overflow-hidden`}
          >
            <img
              src={food.imageUrl}
              alt={food.foodName}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className={`text-xl font-semibold ${textPrimary}`}>
                {food.foodName}
              </h3>
              <p className={textSecondary}>Price: ${food.price}</p>
              <p className={textSecondary}>Sold: {food.purchaseCount} times</p>
              <div className="text-right mt-4">
                <Link to={`/singleFood/${food._id}`}>
                  <button className={`btn ${buttonBg} ${buttonText} px-4 py-2 rounded`}>
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-6">
        <Link to="/allFoods">
          <button className={`btn btn-outline px-6 py-2 rounded font-semibold ${textPrimary} hover:${buttonBg} hover:text-white`}>
            See All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;

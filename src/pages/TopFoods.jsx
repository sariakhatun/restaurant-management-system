import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const TopFoods = () => {
  const [topFoods, setTopFoods] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/topFoods")
      .then(res => setTopFoods(res.data))
      .catch(err => console.error("Failed to fetch top foods", err));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-[#f74526] mb-10">
        🍽️ Top Selling Foods
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {topFoods.map(food => (
          <div
            key={food._id}
            className="bg-white rounded-xl shadow-md border border-[#ffd8cc] overflow-hidden"
          >
            <img
              src={food.imageUrl}
              alt={food.foodName}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-[#f74526]">
                {food.foodName}
              </h3>
              <p className="text-gray-700">Price: ${food.price}</p>
              <p className="text-gray-700">Sold: {food.purchaseCount} times</p>
              <div className="text-right mt-4">
                <Link to={`/singleFood/${food._id}`}>
                  <button className="btn bg-[#f74526] hover:bg-[#e43c1c] text-white px-4 py-2 rounded">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/allFoods">
          <button className="btn bg-gray-200 hover:bg-gray-300 text-[#f74526] px-6 py-2 rounded font-semibold">
            See All Foods
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopFoods;

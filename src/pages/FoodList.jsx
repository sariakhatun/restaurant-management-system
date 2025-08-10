import React, { use, useContext } from "react";
import { Link } from "react-router";
import { ThemeContext } from "../Components/ThemeContext";

const FoodList = ({ myFoodsPromise }) => {
  const { theme } = useContext(ThemeContext);
  let foods = use(myFoodsPromise); // or simply use(myFoodsPromise) if inside Suspense

  // Theme-based classes
  
  const cardBgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textColorClass = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const headingColorClass = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const btnClass =
    theme === "dark"
      ? "btn bg-orange-400 hover:bg-orange-700 text-white"
      : "btn bg-[#f74526] hover:bg-[#e43c1c] text-white";

  return (
    <div className={` min-h-screen px-6 py-8`}>
      <h1 className={`text-3xl font-semibold mb-6`}>Add food so far : {foods.length}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods.map((food, index) => (
          <div
            key={index}
            className={`${cardBgClass} max-w-4xl mx-auto p-6 mt-10 rounded-xl shadow-lg`}
          >
            <img
              src={food.imageUrl}
              alt={food.foodName}
              className="w-full h-72 object-cover rounded-xl mb-6"
            />

            <h2 className={`text-4xl font-bold mb-4 ${headingColorClass}`}>{food.foodName}</h2>

            <div className={`space-y-2 ${textColorClass}`}>
              <p>
                <strong>Category:</strong> {food.category}
              </p>
              <p>
                <strong>Quantity Available:</strong> {food.quantity}
              </p>
              <p>
                <strong>Price:</strong> ${food.price}
              </p>
              <p>
                <strong>Origin:</strong> {food.origin}
              </p>

              <p className="md:col-span-2">
                <strong>Description:</strong> {food.description}
              </p>
            </div>

            <div className="text-center mt-10">
              <Link to={`/updatePost/${food._id}`}>
                <button className={`${btnClass} px-10`}>Update Post</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;

import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { ThemeContext } from "../Components/ThemeContext";

const SingleFood = () => {
  let food = useLoaderData();
  const { theme } = useContext(ThemeContext);

  const {
    _id,
    foodName,
    imageUrl,
    category,
    quantity,
    price,
    origin,
    description,
    userEmail,
    userName,
    purchaseCount = 0,
  } = food;

  // Define theme-based classes
  const containerBgClass = theme === "dark" ? "bg-gray-900" : "bg-white";
  const textPrimaryClass = theme === "dark" ? "text-white" : "text-gray-700";
  const headingTextClass = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const btnBgClass = theme === "dark" ? "bg-orange-500 hover:bg-orange-600" : "bg-[#f74526] hover:bg-[#e43c1c]";

  return (
    <div className={`mx-auto py-6 mt-24 rounded-xl shadow-lg lg:flex justify-around ${containerBgClass}`}>
      <div>
        <img
          src={imageUrl}
          alt={foodName}
          className="w-full h-72 object-cover rounded-xl mb-6"
        />
      </div>

      <div className="px-4 lg:px-0">
        <h2 className={`text-4xl font-bold mb-4 ${headingTextClass}`}>{foodName}</h2>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${textPrimaryClass}`}>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>
            <strong>Quantity Available:</strong> {quantity}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p>
            <strong>Origin:</strong> {origin}
          </p>
          <p>
            <strong>Added By:</strong> {userName}
          </p>
          <p>
            <strong>Contact:</strong> {userEmail}
          </p>
          <p>
            <strong>Purchased:</strong> {purchaseCount} times
          </p>
          <p className="md:col-span-2">
            <strong>Description:</strong> {description}
          </p>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/foodPurchase"
            state={{
              foodName,
              _id,
              imageUrl,
              price,
              userName,
              ownerEmail: userEmail,
              availableQuantity: quantity,
            }}
          >
            <button className={`btn text-white px-10 ${btnBgClass}`}>
              Purchase
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;

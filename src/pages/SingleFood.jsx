import React from "react";
import { Link, useLoaderData, useParams } from "react-router";

const SingleFood = () => {
  let { id } = useParams();
  let food = useLoaderData();

  console.log(food, id);

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
  return (
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <img
        src={imageUrl}
        alt={foodName}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />

      <h2 className="text-4xl font-bold text-[#f74526] mb-4">{foodName}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700">
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
        <Link to="/foodPurchase" state={{foodName,imageUrl,price,userName}}>
          <button className="btn bg-[#f74526] text-white hover:bg-[#e43c1c] px-10">
            Purchase
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleFood;

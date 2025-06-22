import React, { use } from 'react';
import { Link } from 'react-router';

const FoodList = ({myFoodsPromise}) => {
    let foods = use(myFoodsPromise)
    console.log(foods)
    return (
        <div>
             <h1 className="text-3xl ">Add food so far : {foods.length} </h1>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {foods.map((food,index) => (
                       <div key={index} className="max-w-4xl mx-auto p-6 mt-10 bg-white rounded-xl shadow-lg">
      <img
        src={food.imageUrl}
        alt={food.foodName}
        className="w-full h-72 object-cover rounded-xl mb-6"
      />

      <h2 className="text-4xl font-bold text-[#f74526] mb-4">{food.foodName}</h2>

      <div className="space-y-2 text-gray-700">
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
        <Link to="/foodPurchase" >
          <button className="btn bg-[#f74526] text-white hover:bg-[#e43c1c] px-10">
            Update Post
          </button>
        </Link>
      </div>
    </div>
                     ))}
                   </div>
        </div>
    );
};

export default FoodList;
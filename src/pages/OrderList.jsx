import axios from "axios";

import React, { use, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Await } from "react-router";
import Swal from "sweetalert2";

const OrderList = ({ myOrdersPromise }) => {
  let initialOrders = use(myOrdersPromise);
  let [orders,setOrders]=useState(initialOrders)
  console.log(orders);


  let handleDelete = async (_id) => {
    //console.log("deleted", _id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async(result) => {
        //console.log(result.isConfirmed)
      if (result.isConfirmed) {
        

       await axios.delete(`http://localhost:3000/purchased/${_id}`)
       .then(res=>{
        console.log(res.data)
        if(res.data.deletedCount){
         Swal.fire({
          title: "Deleted!",
          text: "Your Food Item has been deleted.",
          icon: "success",
        });
        //remove order from state
        let remainingOrders = orders.filter(order=>order._id !== _id)
        setOrders(remainingOrders)
       }
       })
       .catch(error=>{
        console.log(error)
       })
      
       
       
      }
    });
  };

  return (
    <div>
      <h1 className="text-3xl ">Purchased Order so far : {orders.length} </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className="bg-white rounded-xl shadow-md p-5 relative"
          >
            <img
              src={order.imageUrl}
              alt={order.foodName}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold text-[#f74526]">
              {order.foodName}
            </h2>
            <p className="text-gray-700">Price: ${order.price}</p>
            <p className="text-gray-700">Quantity: {order.quantity}</p>
            <p className="text-gray-600">Owner: {order.ownerName || "N/A"}</p>
            <p className="text-gray-600">Buyer Email: {order.buyerEmail}</p>
            <p className="text-gray-500 text-sm">
              Ordered on: {order.buyingDate}
            </p>

            <button
              onClick={() => handleDelete(order._id)}
              className="btn btn-outline text-[#f74526] hover:bg-[#f74526] hover:text-white px-3 py-1 text-sm rounded flex gap-1  items-center my-4"
            >
              {" "}
              <MdDelete></MdDelete>
              Delete Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;

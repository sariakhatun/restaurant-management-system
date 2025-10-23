import axios from "axios";
import React, { use, useState, useContext } from "react";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { ThemeContext } from "../Components/ThemeContext"; // adjust path if needed

const OrderList = ({ myOrdersPromise }) => {
  const { theme } = useContext(ThemeContext);
  let initialOrders = use(myOrdersPromise);
  let [orders, setOrders] = useState(initialOrders);

  const handleDelete = async (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios
          .delete(`https://b11a11-server-side-sariakhatun.vercel.app/purchased/${_id}`)
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Food Item has been deleted.",
                icon: "success",
              });
              // Remove order from state
              let remainingOrders = orders.filter((order) => order._id !== _id);
              setOrders(remainingOrders);
            }
          })
          .catch((error) => {
            // console.error(error);
          });
      }
    });
  };

  // Theme-based classes
  const headingTextClass = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const cardBgClass = theme === "dark" ? "bg-gray-800" : "bg-white";
  const textGray700 = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const textGray600 = theme === "dark" ? "text-gray-400" : "text-gray-600";
  const textGray500 = theme === "dark" ? "text-gray-500" : "text-gray-500";
  const buttonClass =
    theme === "dark"
      ? "btn btn-outline border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
      : "btn btn-outline text-[#f74526] hover:bg-[#f74526] hover:text-white";

  return (
    <div className={` max-w-7xl mx-auto px-6 `}>
      <h1 className="text-3xl mb-6">Purchased Orders so far: {orders.length}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div
            key={order._id}
            className={`${cardBgClass} rounded-xl shadow-md p-5 relative`}
          >
            <img
              src={order.imageUrl}
              alt={order.foodName}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className={`text-xl font-semibold ${headingTextClass}`}>{order.foodName}</h2>
            <p className={textGray700}>Price: ${order.price}</p>
            <p className={textGray700}>Quantity: {order.quantity}</p>
            <p className={textGray600}>Owner: {order.ownerName || "N/A"}</p>
            <p className={textGray600}>Buyer Email: {order.buyerEmail}</p>
            <p className={`${textGray500} text-sm`}>Ordered on: {order.buyingDate}</p>

            <button
              onClick={() => handleDelete(order._id)}
              className={`${buttonClass} px-3 py-1 text-sm rounded flex gap-1 items-center my-4`}
            >
              <MdDelete />
              Delete Item
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;

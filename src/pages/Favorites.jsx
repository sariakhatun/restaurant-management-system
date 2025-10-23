import React, { useEffect, useState, useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { AuthContext } from "../Components/AuthContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Favorites = () => {
  const { user } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (!user) return;

    const fetchFavorites = async () => {
      try {
        const res = await axios.get(
          `https://b11a11-server-side-sariakhatun.vercel.app/favorites?email=${user.email}`
        );
        setFavorites(res.data);
      } catch (err) {
        console.error("Error fetching favorites:", err);
      }
    };

    fetchFavorites();
  }, [user]);

  const removeFavorite = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/favorites/${id}`);
      setFavorites(favorites.filter((f) => f._id !== id));
      toast.success("Removed from favorites!", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } catch (err) {
      console.error("Error removing favorite:", err);
      toast.error("Failed to remove favorite", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
  };

  if (!user) {
    return <p className="text-center mt-10">Please log in to see your favorites.</p>;
  }

  if (favorites.length === 0) {
    return <p className="text-center mt-10">You have no favorite dishes yet.</p>;
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorites.map((dish) => (
          <div
            key={dish._id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={dish.imageUrl}
              alt={dish.foodName}
              className="w-full h-40 object-cover rounded"
            />
            <h3 className="font-bold text-lg mt-2">{dish.foodName}</h3>
            <p className="text-orange-500 font-semibold">${dish.price}</p>
            <button
              onClick={() => removeFavorite(dish._id)}
              className="mt-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 flex items-center gap-1"
            >
              <AiFillHeart /> Remove
            </button>
          </div>
        ))}
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default Favorites;

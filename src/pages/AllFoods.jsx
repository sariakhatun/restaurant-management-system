import React, { useEffect, useState, useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { ThemeContext } from "../Components/ThemeContext";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { AuthContext } from "../Components/AuthContext";
import { toast } from "react-toastify";

const AllFoods = () => {
  const initialFoods = useLoaderData();
  const [foods, setFoods] = useState(initialFoods);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // 'asc' or 'desc'
  const [favoriteIds, setFavoriteIds] = useState([]);
  const { theme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);

  // ✅ Fetch user's favorites from MongoDB when logged in
  useEffect(() => {
    const fetchFavorites = async () => {
      if (!user?.email) return;
      try {
        const res = await axios.get(
          `https://b11a11-server-side-sariakhatun.vercel.app/favorites?email=${user.email}`
        );
        setFavoriteIds(res.data.map((fav) => fav.foodId)); // store foodId only
      } catch (err) {
        console.error("Error fetching favorites:", err);
      }
    };
    fetchFavorites();
  }, [user]);

  // ✅ Fetch foods with search
  useEffect(() => {
    fetch(
      `https://b11a11-server-side-sariakhatun.vercel.app/foods?searchParams=${search}`
    )
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, [search]);

  // ✅ Sort foods by price
  useEffect(() => {
    if (sortOrder === "asc") {
      setFoods((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else if (sortOrder === "desc") {
      setFoods((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sortOrder]);

  // ✅ Toggle favorite (MongoDB)
  const toggleFavorite = async (food) => {
    if (!user) {
      toast.error("Please log in to add favorites!");
      return;
    }

    if (favoriteIds.includes(food._id)) {
      // remove favorite
      try {
        const res = await axios.get(
          `https://b11a11-server-side-sariakhatun.vercel.app/favorites?email=${user.email}`
        );
        const favorite = res.data.find((f) => f.foodId === food._id);
        if (favorite) {
          await axios.delete(`https://b11a11-server-side-sariakhatun.vercel.app/favorites/${favorite._id}`);
          setFavoriteIds(favoriteIds.filter((id) => id !== food._id));
          toast.info("Removed from favorites!");
        }
      } catch (err) {
        console.error("Error removing favorite:", err);
        toast.error("Failed to remove favorite");
      }
    } else {
      // add favorite
      try {
        await axios.post("https://b11a11-server-side-sariakhatun.vercel.app/favorites", {
          foodId: food._id,
          userEmail: user.email,
          foodData: {
            foodName: food.foodName,
            price: food.price,
            imageUrl: food.imageUrl,
          },
        });
        setFavoriteIds([...favoriteIds, food._id]);
        toast.success("Added to favorites!");
      } catch (err) {
        if (err.response?.status === 400) {
          toast.info("Already in favorites!");
        } else {
          console.error("Error adding favorite:", err);
          toast.error("Failed to add favorite");
        }
      }
    }
  };

  // ✅ Theme-based colors
  const headingTextClass =
    theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const bgGradientClass =
    theme === "dark"
      ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
      : "bg-gradient-to-r from-[#f74526] to-[#ff9a8b]";
  const cardBgClass =
    theme === "dark"
      ? "bg-gray-800 border-gray-700"
      : "bg-white border-[#ffd8cc]";
  const textPrimaryClass = theme === "dark" ? "text-white" : "text-gray-600";
  const buttonBgClass =
    theme === "dark"
      ? "bg-orange-500 hover:bg-orange-600"
      : "bg-[#f74526] hover:bg-[#e43c1c]";
  const inputBgClass =
    theme === "dark"
      ? "bg-gray-700 text-white border-gray-600 placeholder-gray-400"
      : "";

  return (
    <div className="min-h-screen">
      {/* Page Title Section */}
      <div
        className={`${bgGradientClass} mt-24 py-20 text-center rounded-tr-4xl rounded-bl-4xl mb-4`}
      >
        <h1
          className={`text-4xl md:text-5xl font-bold great-vibes ${headingTextClass}`}
        >
          All Delicious Foods
        </h1>
      </div>

      {/* Search and Sort */}
      <div className="flex items-center justify-center gap-4 px-4 md:px-0">
        <label
          className={`input mt-4 flex items-center border rounded px-2 ${inputBgClass}`}
        >
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
              <p className={textPrimaryClass}>Category: {food.category}</p>
              <p className={textPrimaryClass}>Price: ${food.price}</p>
              <p className={textPrimaryClass}>
                Available Quantity: {food.quantity}
              </p>
              <div className="text-right flex items-center mt-4">
                <Link to={`/singleFood/${food._id}`}>
                  <button
                    className={`${buttonBgClass} text-white px-4 py-2 rounded`}
                  >
                    Details
                  </button>
                </Link>
                <button
                  onClick={() => toggleFavorite(food)}
                  className="ml-2 text-2xl transition-colors duration-200"
                >
                  {favoriteIds.includes(food._id) ? (
                    <AiFillHeart size={22} className="text-red-500" />
                  ) : (
                    <AiOutlineHeart className="text-gray-400 hover:text-red-500" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllFoods;

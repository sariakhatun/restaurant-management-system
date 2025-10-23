import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FiMail, FiUser, FiCamera } from "react-icons/fi";
import { AuthContext } from "../Components/AuthContext";
import { ThemeContext } from "../Components/ThemeContext";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex w-full justify-center items-center py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`shadow-xl rounded-2xl p-8 w-full max-w-md text-center border
          ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"}`}
      >
        {/* Profile Image */}
        <div className="relative inline-block">
          <img
            src={
              user?.photoURL ||
              "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }
            alt="User Avatar"
            className="w-32 h-32 rounded-full mx-auto border-4 border-orange-500 shadow-lg object-cover"
          />
          <div className="absolute bottom-2 right-3 bg-orange-500 p-2 rounded-full text-white shadow-md cursor-pointer hover:bg-orange-600 transition">
            <FiCamera size={16} />
          </div>
        </div>

        {/* User Info */}
        <h2
          className={`mt-5 text-2xl font-bold ${
            theme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {user?.displayName || "Unknown User"}
        </h2>
        <p
          className={`text-sm mb-4 ${
            theme === "dark" ? "text-gray-400" : "text-gray-600"
          }`}
        >
          Welcome to your profile
        </p>

        {/* Info Box */}
        <div
          className={`rounded-xl py-4 px-6 shadow-inner ${
            theme === "dark" ? "bg-gray-900" : "bg-orange-50"
          }`}
        >
          <div
            className={`flex items-center justify-center gap-3 mb-3 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <FiUser className="text-orange-500" size={18} />
            <span className="text-base font-medium">
              {user?.displayName || "N/A"}
            </span>
          </div>

          <div
            className={`flex items-center justify-center gap-3 ${
              theme === "dark" ? "text-gray-200" : "text-gray-800"
            }`}
          >
            <FiMail className="text-orange-500" size={18} />
            <span className="text-base font-medium">
              {user?.email || "No email found"}
            </span>
          </div>
        </div>

        {/* Fancy Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition"
        >
          Edit Profile
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Profile;

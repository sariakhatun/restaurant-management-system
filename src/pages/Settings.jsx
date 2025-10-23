import React, { useContext, useState } from "react";
import { ThemeContext } from "../Components/ThemeContext";
import { AuthContext } from "../Components/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FiSun, FiMoon, FiMail, FiSettings } from "react-icons/fi";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(AuthContext);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const handleSaveSettings = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className={`w-full min-h-screen px-6
       transition-colors`}>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`w-full max-w-4xl mx-auto p-10 rounded-3xl border shadow-2xl 
          ${theme === "dark" ? "bg-gray-900 border-gray-700" : "bg-white border-gray-200"}`}
      >
        {/* Main Heading */}
        <h1 className={`text-4xl font-extrabold mb-10 text-center
          ${theme === "dark" ? "text-gray-100" : "text-gray-900"}`}
        >
          Settings
        </h1>

        {/* Account Section */}
        <section className="mb-10">
          <h2 className={`text-2xl font-semibold mb-4 flex items-center gap-2
            ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}
          >
            <FiMail /> Account
          </h2>
          <div className={`p-6 rounded-2xl shadow-inner border transition-colors hover:shadow-lg
            ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"}`}
          >
            <p className={theme === "dark" ? "text-gray-100" : "text-gray-800"}>
              Email: <span className="font-medium">{user?.email || "N/A"}</span>
            </p>
          </div>
        </section>

        {/* Preferences Section */}
        <section className="mb-10">
          <h2 className={`text-2xl font-semibold mb-5 flex items-center gap-2
            ${theme === "dark" ? "text-gray-100" : "text-gray-800"}`}
          >
            <FiSettings /> Preferences
          </h2>

          {/* Theme Toggle */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className={`flex items-center justify-between mb-6 p-5 rounded-2xl border shadow-sm transition-colors
              ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
          >
            <span className={theme === "dark" ? "text-gray-100 font-medium" : "text-gray-800 font-medium"}>
              Dark Mode
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only" checked={theme === "dark"} onChange={toggleTheme} />
              <div className={`w-12 h-6 rounded-full shadow-inner transition-colors
                ${theme === "dark" ? "bg-orange-500" : "bg-gray-300"}`}>
              </div>
              <span className={`absolute left-1 top-1 w-4 h-4 rounded-full bg-white shadow-md transform transition-transform
                ${theme === "dark" ? "translate-x-6" : "translate-x-0"}`}
              ></span>
              <motion.span className="absolute right-2 top-1 text-yellow-400" 
                animate={{ opacity: theme === "dark" ? 1 : 0 }}>
                <FiMoon />
              </motion.span>
              <motion.span className="absolute left-2 top-1 text-yellow-400"
                animate={{ opacity: theme === "dark" ? 0 : 1 }}>
                <FiSun />
              </motion.span>
            </label>
          </motion.div>

          {/* Email Notifications */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className={`flex items-center justify-between p-5 rounded-2xl border shadow-sm transition-colors
              ${theme === "dark" ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}
          >
            <span className={theme === "dark" ? "text-gray-100 font-medium" : "text-gray-800 font-medium"}>
              Email Notifications
            </span>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={() => setEmailNotifications(!emailNotifications)}
              className="toggle toggle-primary"
            />
          </motion.div>
        </section>

        {/* Save Button */}
        <div className="flex justify-center mt-6">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSaveSettings}
            className="px-12 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-3xl shadow-xl hover:shadow-2xl transition"
          >
            Save Settings
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default Settings;

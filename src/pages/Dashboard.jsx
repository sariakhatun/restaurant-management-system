import React, { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FiMenu, FiX, FiUser, FiSettings, FiShoppingBag, FiHeart } from "react-icons/fi";
import { ThemeContext } from "../Components/ThemeContext";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const themeBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const themeText = theme === "dark" ? "text-gray-100" : "text-gray-800";
  const themeHover =
    theme === "dark" ? "hover:bg-orange-500" : "hover:bg-orange-100";
  const themeActive = "bg-orange-200 dark:bg-orange-200 font-semibold";

  return (
    <div
      className={`flex mt-20 md:mt-22 min-h-screen relative ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Mobile Hamburger */}
      <div className="lg:hidden top-5 left-8 z-50 fixed">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 mt-1 rounded-md bg-orange-500 text-white focus:outline-none"
        >
          {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 p-6 w-64 shadow-md flex flex-col justify-between transform transition-transform duration-300 z-50 lg:z-0
          ${themeBg} ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0
          h-full lg:h-[calc(100vh-5rem)]`} // full height on mobile, adjusted for large screen
      >
        <div>
          <h2 className={`text-2xl font-bold mb-6 ${themeText}`}>Dashboard</h2>
          <nav className="flex flex-col gap-2">
            <NavLink
              to="/dashboard/profile"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center font-bold gap-3 px-4 py-2 rounded ${themeHover} ${
                  isActive ? themeActive : themeText
                }`
              }
            >
              <FiUser /> Profile
            </NavLink>
            <NavLink
              to="/dashboard/orders"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center font-bold gap-3 px-4 py-2 rounded ${themeHover} ${
                  isActive ? themeActive : themeText
                }`
              }
            >
              <FiShoppingBag />
              My Orders
            </NavLink>
            <NavLink
              to="/dashboard/favorites"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center font-bold gap-3 px-4 py-2 rounded ${themeHover} ${
                  isActive ? themeActive : themeText
                }`
              }
            >
              <FiHeart /> Favorites
            </NavLink>

            <NavLink
              to="/dashboard/settings"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `flex items-center font-bold gap-3 px-4 py-2 rounded ${themeHover} ${
                  isActive ? themeActive : themeText
                }`
              }
            >
              <FiSettings /> Settings
            </NavLink>
          </nav>
        </div>
      </aside>

      {/* Overlay only on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main
        className={`flex-1 p-6 z-10 relative ${
          theme === "dark" ? "text-gray-100" : "text-gray-900"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;

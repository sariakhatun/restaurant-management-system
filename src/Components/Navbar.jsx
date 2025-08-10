import React, { useContext } from "react";
import logo from "../assets/logo.jpg";
import { NavLink, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  let navigate = useNavigate();
  let { user, logOut } = useContext(AuthContext); // fixed from use() to useContext()
  let { theme, toggleTheme } = useContext(ThemeContext);

  let handleLogin = () => {
    navigate("/login");
  };
  let handleRegister = () => {
    navigate("/register");
  };
  let handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };

  // Define color classes based on theme
  const headingColor = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const btnTextColor = theme === "dark" ? "text-orange-400" : "text-[#ff6347]";
  const btnHoverBg = theme === "dark" ? "hover:bg-orange-400" : "hover:bg-[#ff6347]";

  return (
    <div>
      <div className={`navbar bg-base-100 shadow-sm fixed top-0 left-0 z-50 w-full mx-auto`}>
        <div className="navbar max-w-11/12 container mx-auto px-4">
          {/* Navbar Start */}
          <div className="navbar-start flex gap-4 -ml-6 lg:-ml-0">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <NavLink className={``} to="/">Home</NavLink>
                <NavLink to="/allFoods">All Foods</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                {user && (
                  <>
                    <NavLink to="/myFood">My Foods</NavLink>
                    <NavLink to="/addFood">Add Food</NavLink>
                    <NavLink to="/myOrders">My Orders</NavLink>
                  </>
                )}
              </ul>
            </div>
            <div className="flex lg:gap-2 items-center -ml-4">
              <img src={logo} alt="Logo" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
              <div className={`font-bold text-xl md:text-2xl lg:text-3xl `}>
                <p className="logo font-extrabold">
                  Taste<span className={`${headingColor}`}>Hub</span>
                </p>
              </div>
            </div>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <div className="flex gap-8">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/allFoods">All Foods</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                {user && (
                  <>
                    <NavLink to="/myFood">My Foods</NavLink>
                    <NavLink to="/addFood">Add Food</NavLink>
                    <NavLink to="/myOrders">My Orders</NavLink>
                  </>
                )}
              </div>
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end flex gap-4 ml-6">
            {user ? (
              <div className="flex gap-1 lg:gap-3 items-center ml-6 lg:ml-0">
                {/* Theme Toggle */}
                <label className="swap swap-rotate cursor-pointer">
                  <input
                    type="checkbox"
                    className="theme-controller"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    value="dark"
                  />
                  {/* Sun Icon */}
                  <svg
                    className={`swap-off h-10 w-10 fill-current ${theme === "dark" ? "text-orange-400" : "text-[#f74526]"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* Moon Icon */}
                  <svg
                    className={`swap-on h-10 w-10 fill-current ${theme === "dark" ? "text-orange-400" : "text-[#f74526]"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>

                {/* User Image */}
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="">
                    <img
                      src={user?.photoURL}
                      alt="User Avatar"
                      className="w-8 h-8 lg:w-12 lg:h-12 rounded-full"
                    />
                  </div>
                </div>

                {/* Logout Button */}
                <button
                  onClick={handleLogOut}
                  className={`btn btn-xs lg:btn-sm btn-outline ${btnTextColor} ${btnHoverBg} hover:text-white`}
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div className="navbar-end flex gap-1 lg:gap-4">
                {/* Theme Toggle */}
                <label className="swap swap-rotate cursor-pointer">
                  <input
                    type="checkbox"
                    className="theme-controller"
                    checked={theme === "dark"}
                    onChange={toggleTheme}
                    value="dark"
                  />

                  {/* Sun Icon */}
                  <svg
                    className={`swap-off h-10 w-10 fill-current ${theme === "dark" ? "text-orange-400" : "text-[#f74526]"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                  </svg>

                  {/* Moon Icon */}
                  <svg
                    className={`swap-on h-10 w-10 fill-current ${theme === "dark" ? "text-orange-400" : "text-[#f74526]"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                  </svg>
                </label>

                {/* Login and Signup Buttons */}
                <button
                  onClick={handleLogin}
                  className={`btn btn-xs lg:btn-sm btn-outline ${btnTextColor} ${btnHoverBg} hover:text-white`}
                >
                  Login
                </button>
                <button
                  onClick={handleRegister}
                  className={`btn btn-xs lg:btn-sm btn-outline ${btnTextColor} ${btnHoverBg} hover:text-white`}
                >
                  SignUP
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Navbar;

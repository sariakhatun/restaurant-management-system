import React, { use, useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import logo1 from "../assets/logo1.png";
import { NavLink, useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid"; // heroicons for sun/moon

import { AuthContext } from "./AuthContext";
const Navbar = () => {
  let navigate = useNavigate();
  let { user, logOut } = use(AuthContext);
  //console.log(user)
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  let handleLogin = () => {
    navigate("/login");
  };
  let handleRegister = () => {
    navigate("/register");
  };
  let handleLogOut = () => {
    logOut()
      .then(() => {
        console.log('Logged out successfully!')
        toast.success("Logged out successfully!");
      })
      .catch((error) => {
        toast.error(`Error: ${error.message}`);
      });
  };
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm fixed top-0 left-0 z-50  w-full mx-auto">
        <div className="navbar max-w-11/12 container mx-auto px-4">
    {/* your existing navbar-start, navbar-center, navbar-end code goes here */}
     <div className="navbar-start flex gap-4d -ml-6 lg:-ml-0">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >

                 <NavLink to='/'>Home</NavLink>
                <NavLink to='/allFoods'>All Foods</NavLink>
                <NavLink to='gallery'>Gallery</NavLink>
                {
                  user && <>
                   <NavLink to='/myFood'>My Foods</NavLink>
                <NavLink to='/addFood'>Add Food</NavLink>
                <NavLink to='/myOrders'>My Orders</NavLink>
                  </>
                }

            </ul>
          </div>
          <div className="flex  lg:gap-2 items-center -ml-4">
            <img src={logo} alt="" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"/>
            {/* taste hub */}
            <div className="font-bold text-xl md:text-2xl lg:text-3xl ">
                <p className='logo font-extrabold'>Taste<span className='text-[#f74526]'>Hub</span></p>
              </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
           <div className="flex gap-8">
             <NavLink to='/'>Home</NavLink>
                <NavLink to='/allFoods'>All Foods</NavLink>
                <NavLink to='/gallery'>Gallery</NavLink>
                 {
                  user && <>
                   <NavLink to='/myFood'>My Foods</NavLink>
                <NavLink to='/addFood'>Add Food</NavLink>
                <NavLink to='/myOrders'>My Orders</NavLink>
                  </>
                }

           </div>
          </ul>
        </div>
      <div className="navbar-end flex gap-4 ml-6">
        {user ? (
          <div className="flex gap-1  lg:gap-3 items-center ml-6 lg:ml-0">
           {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full bg-white text-black">
              {theme === "light" ? (
                <MoonIcon className="w-5 h-5" />
              ) : (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              )}
            </button>

             <div className="dropdown">
            <div tabIndex={0} role="button" className=" ">
              <img
              src={`${user && user.photoURL}`}
              alt=""
              className="w-8 h-8 lg:w-12 lg:h-12 rounded-full "

            />
            </div>
           
          </div>
            <button
              onClick={handleLogOut}
              className="btn btn-xs lg:btn-sm btn-outline text-[#ff6347] hover:bg-[#ff6347] hover:text-white"
            >
              LogOut
            </button>
          </div>
        ) : (
          <div className="navbar-end flex gap-1 lg:gap-4  ">
            {/* <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label> */}
             {/* <label className="cursor-pointer">
                  <input
                    type="checkbox"
                    value="dark"
                    className="toggle theme-controller"
                  />
                </label> */}
                 {/* Theme Toggle */}
            <button onClick={toggleTheme} className="p-2 rounded-full bg-white text-black">
              {theme === "light" ? (
                <MoonIcon className="w-5 h-5" />
              ) : (
                <SunIcon className="w-5 h-5 text-yellow-400" />
              )}
            </button>
            <button
              onClick={handleLogin}
              className="btn btn-xs lg:btn-sm btn-outline text-[#ff6347] hover:bg-[#ff6347] hover:text-white "
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="btn btn-xs lg:btn-sm  btn-outline text-[#ff6347] hover:bg-[#ff6347] hover:text-white"
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

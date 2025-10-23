import React, { useContext, useState, useRef, useEffect } from "react";
import logo from "../assets/logo.jpg";
import { NavLink, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { BsSun, BsMoon } from "react-icons/bs";
import { AuthContext } from "./AuthContext";
import { ThemeContext } from "./ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logged out successfully!");
        setDropdownOpen(false);
      })
      .catch((error) => toast.error(`Error: ${error.message}`));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const headingColor = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const btnTextColor = theme === "dark" ? "text-orange-400" : "text-[#ff6347]";
  const btnHoverBg =
    theme === "dark" ? "hover:bg-orange-400" : "hover:bg-[#ff6347]";

  return (
    <div>
      <div
        className={`navbar fixed top-0 w-full z-50 px-4 lg:px-16 shadow-sm ${
          theme === "dark" ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full hidden lg:block"
            />
            <div className="font-bold text-xl md:text-2xl lg:text-3xl ml-10 lg:ml-0">
              <p className="logo lg:ml-0 ml-2 font-extrabold great-vibes">
                Taste<span className={headingColor}>Hub</span>
              </p>
            </div>
          </div>

          {/* Center: Desktop Nav Links */}
          <div className="hidden lg:flex">
            <ul className="flex gap-8 font-bold">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/allFoods">All Foods</NavLink>
              <NavLink to="/gallery">Gallery</NavLink>
              {user && (
                <>
                  <NavLink to="/myFood">My Foods</NavLink>
                  <NavLink to="/addFood">Add Food</NavLink>
                </>
              )}
            </ul>
          </div>

          {/* Right: Theme Toggle + Desktop Login/Register + Mobile Hamburger + Profile Dropdown */}
          <div className="flex items-center gap-2 lg:gap-4">
            {/* Theme Toggle */}
            <label className="swap swap-rotate cursor-pointer mr-2">
              <input
                type="checkbox"
                checked={theme === "dark"}
                onChange={toggleTheme}
              />
              <BsSun
                className={`swap-off text-xl ${
                  theme === "dark" ? "text-orange-400" : "text-[#f74526]"
                }`}
              />
              <BsMoon
                className={`swap-on text-xl ${
                  theme === "dark" ? "text-orange-400" : "text-[#f74526]"
                }`}
              />
            </label>

            {/* Desktop login/register buttons */}
            {!user && (
              <div className="hidden lg:flex gap-2">
                <button
                  onClick={handleLogin}
                  className={`btn btn-sm btn-outline ${btnTextColor} ${btnHoverBg} hover:text-white`}
                >
                  Login
                </button>
                <button
                  onClick={handleRegister}
                  className={`btn btn-sm btn-outline ${btnTextColor} ${btnHoverBg} hover:text-white`}
                >
                  Sign Up
                </button>
              </div>
            )}

            {/* Mobile Dropdown */}
            <div className="dropdown dropdown-end lg:hidden">
              <div tabIndex={0} role="button" className="btn btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={0}
                className={`menu menu-sm dropdown-content mt-3 w-56 shadow rounded-box z-10 ${
                  theme === "dark"
                    ? "bg-gray-800 text-gray-100"
                    : "bg-white text-gray-900"
                }`}
              >
                {user && (
                  <div className="flex flex-col items-center border-b pb-3 mb-2 border-gray-700 dark:border-gray-400">
                    {user.photoURL && (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-12 h-12 rounded-full mb-1"
                      />
                    )}
                    <span className="font-semibold">{user.displayName || "User"}</span>
                  </div>
                )}
                <NavLink to="/">Home</NavLink>
                <NavLink to="/allFoods">All Foods</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                {user && (
                  <>
                    <NavLink to="/myFood">My Foods</NavLink>
                    <NavLink to="/addFood">Add Food</NavLink>
                    <NavLink to="/dashboard">User Dashboard</NavLink>
                  </>
                )}
                <div className="mt-3 border-t pt-2 border-gray-400 dark:border-gray-600 flex flex-col gap-2">
                  {user ? (
                    <button
                      onClick={handleLogOut}
                      className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                    >
                      Logout
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleLogin}
                        className={`btn btn-sm btn-outline ${btnTextColor} ${btnHoverBg} hover:text-white`}
                      >
                        Login
                      </button>
                      <button
                        onClick={handleRegister}
                        className={`btn btn-sm btn-outline ${btnTextColor} ${btnHoverBg} hover:text-white`}
                      >
                        Sign Up
                      </button>
                    </>
                  )}
                </div>
              </ul>
            </div>

            {/* Desktop Profile Dropdown */}
            {user && (
              <div className="hidden lg:flex items-center relative" ref={dropdownRef}>
                <img
                  src={user?.photoURL}
                  alt="User Avatar"
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full cursor-pointer border-2 border-transparent hover:border-orange-500 transition"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                />
                {dropdownOpen && (
                  <div
                    className={`absolute right-0 top-12 py-2 mt-2 w-48 rounded-lg shadow-lg border z-50
                      ${theme === "dark"
                        ? "bg-gray-800 border-gray-700 text-gray-100"
                        : "bg-white border-gray-200 text-gray-900"
                      }`}
                  >
                    <div
                      className={`px-4 py-2 border-b font-semibold
                        ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}
                    >
                      {user?.displayName || "User"}
                    </div>
                    <ul className="flex flex-col">
                      <li>
                        <NavLink
                          to="/dashboard"
                          className={`px-4 py-2 rounded hover:bg-orange-100 dark:hover:bg-orange-500 transition`}
                          onClick={() => setDropdownOpen(false)}
                        >
                          User Dashboard
                        </NavLink>
                      </li>
                      <li>
                        <span
                          onClick={handleLogOut}
                          className="px-4 py-2 text-red-500 cursor-pointer hover:text-red-600 transition rounded"
                        >
                          Logout
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

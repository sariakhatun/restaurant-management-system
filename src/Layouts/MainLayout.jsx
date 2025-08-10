import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "../pages/ScrollToTop";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div className="poppins-regular">
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      <div className="w-11/12 mx-auto ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
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

export default MainLayout;

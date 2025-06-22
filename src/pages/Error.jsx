import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import errorAnimation from '../../public/Animation.json'
import Lottie from "lottie-react";
import { Slide } from "react-awesome-reveal";
const Error = () => {
  return (
    <div>
      
      <section className="flex items-center h-full p-16 dark:bg-gray-50 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="w-80 md:w-96">
                <Lottie animationData={errorAnimation} loop={true}></Lottie>
            </div>
          <div className="max-w-md text-center">
            
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Slide direction="left" triggerOnce>
                <Link to="/" className="btn bg-[#ff6347] text-white ">
              <FaArrowLeft></FaArrowLeft> Back to homepage
            </Link>

            </Slide>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;

import React from "react";
import Lottie from "lottie-react";
import animationData from '../animations/Login.json'

const MyAnimation = () => {
  return (
    <div style={{ width: 400, height: 400 }}>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default MyAnimation;

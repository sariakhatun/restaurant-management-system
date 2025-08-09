import React from "react";
import banner from "../assets/Banner.png";
import { Link } from "react-router";
const Banner = () => {
  return (
    <div
      className="hero h-[630px] relative rounded-2xl mb-12 mt-24 "
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay rounded-2xl"></div>
      <div className="hero-content text-neutral-content text-center absolute  lg:top-20 lg:right-1">
        <div className="max-w-md">
          <h1 className="mb-8 text-5xl font-bold">Welcome to TasteHub</h1>
          <p className="mb-8">
            Every bite should be an adventure — that’s why we’ve gathered the finest flavors, recipes, and dishes from around the world into one delightful place. From spicy street eats to cozy comfort meals and healthy delights, our collection is designed to satisfy every craving and curiosity. Whether you’re searching for a quick snack or planning your next food discovery, we make it easy to explore, enjoy, and indulge. Browse now and treat your taste buds to something truly unforgettable.
          
          </p>
         <Link to='/allFoods'>
          <button className="btn "> Explore All Foods</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;

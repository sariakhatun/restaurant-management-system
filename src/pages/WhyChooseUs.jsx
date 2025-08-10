import React, { useContext } from "react";
import { FaUtensils, FaTruck, FaThumbsUp, FaClock } from "react-icons/fa";
import { ThemeContext } from "../Components/ThemeContext";

const features = (textPrimary, iconColor) => [
  {
    icon: <FaUtensils className={`${iconColor} text-5xl mb-4`} />,
    title: "Delicious & Fresh Food",
    desc: "We use the freshest ingredients to prepare authentic and tasty meals.",
  },
  {
    icon: <FaTruck className={`${iconColor} text-5xl mb-4`} />,
    title: "Fast Delivery",
    desc: "Enjoy quick delivery straight to your door with our efficient service.",
  },
  {
    icon: <FaThumbsUp className={`${iconColor} text-5xl mb-4`} />,
    title: "Customer Satisfaction",
    desc: "We pride ourselves on excellent customer support and a great dining experience.",
  },
  {
    icon: <FaClock className={`${iconColor} text-5xl mb-4`} />,
    title: "Open 24/7",
    desc: "Order anytime! We’re always ready to serve you delicious meals around the clock.",
  },
];

const WhyChooseUs = () => {
  const { theme } = useContext(ThemeContext);

  // Theme-based colors
  const textPrimary = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const borderColor = theme === "dark" ? "border-orange-400/30" : "border-[#f74526]/20";
  const iconColor = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const descText = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const hoverShadow = theme === "dark" ? "hover:shadow-orange-600" : "hover:shadow-[#f74526]";

  const featuresData = features(textPrimary, iconColor);

  return (
    <section className="mx-auto mb-16 rounded-xl px-4 sm:px-8">
      <h2 className={`text-3xl font-extrabold text-center mb-12 drop-shadow-sm ${textPrimary}`}>
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {featuresData.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className={`text-center p-6 border ${borderColor} rounded-3xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer ${hoverShadow}`}
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className={`text-xl font-semibold mt-3 mb-2 ${textPrimary}`}>{title}</h3>
            <p className={descText}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;

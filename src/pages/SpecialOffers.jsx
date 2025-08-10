import React, { useContext } from "react";
import { FaTags, FaGift, FaTruck } from "react-icons/fa";
import { ThemeContext } from "../Components/ThemeContext";

const SpecialOffers = () => {
  const { theme } = useContext(ThemeContext);

  // Dynamic colors based on theme
  const iconColor = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const cardBorder = theme === "dark" ? "border-gray-700" : "border-[#f74526]/20";
  const titleText = theme === "dark" ? "text-orange-400" : "text-[#d63e1a]";
  const descText = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const headingText = theme === "dark" ? "text-orange-400" : "text-[#f74526]";

  const offers = [
    {
      icon: <FaTags className={`${iconColor} text-4xl mb-4`} />,
      title: "50% Off On Your First Order",
      desc: "Enjoy a huge discount on your very first meal. Use code WELCOME50 at checkout!",
    },
    {
      icon: <FaGift className={`${iconColor} text-4xl mb-4`} />,
      title: "Weekend Family Combo",
      desc: "Order our family combo and get a free dessert every weekend.",
    },
    {
      icon: <FaTruck className={`${iconColor} text-4xl mb-4`} />,
      title: "Free Delivery Over $30",
      desc: "Get free delivery when you order meals over $30. No delivery fee for large orders!",
    },
  ];

  return (
    <section className="mx-auto mb-20 rounded-xl">
      <h2 className={`text-3xl font-extrabold text-center mb-10 drop-shadow-sm ${headingText}`}>
        🔥 Special Offers 🔥
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {offers.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className={`${cardBg} rounded-3xl p-8 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer border ${cardBorder}`}
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className={`text-xl font-semibold text-center mb-3 ${titleText}`}>
              {title}
            </h3>
            <p className={`text-center ${descText}`}>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;

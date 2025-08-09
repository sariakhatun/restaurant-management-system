import React from 'react';
import { FaTags, FaGift, FaTruck } from 'react-icons/fa';

const offers = [
  {
    icon: <FaTags className="text-[#f74526] text-4xl mb-4" />,
    title: "50% Off On Your First Order",
    desc: "Enjoy a huge discount on your very first meal. Use code WELCOME50 at checkout!",
  },
  {
    icon: <FaGift className="text-[#f74526] text-4xl mb-4" />,
    title: "Weekend Family Combo",
    desc: "Order our family combo and get a free dessert every weekend.",
  },
  {
    icon: <FaTruck className="text-[#f74526] text-4xl mb-4" />,
    title: "Free Delivery Over $30",
    desc: "Get free delivery when you order meals over $30. No delivery fee for large orders!",
  },
];

const SpecialOffers = () => {
  return (
    <section className=" mx-auto mb-20 rounded-xl ">
      <h2 className="text-3xl font-extrabold text-center text-[#f74526] mb-10 drop-shadow-sm">
        🔥 Special Offers 🔥
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {offers.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer border border-[#f74526]/20"
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold text-center mb-3 text-[#d63e1a]">{title}</h3>
            <p className="text-center text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;

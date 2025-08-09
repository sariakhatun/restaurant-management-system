import React from 'react';
import { FaConciergeBell, FaCalendarCheck, FaShoppingCart, FaCreditCard } from 'react-icons/fa';

const services = [
  {
    icon: <FaConciergeBell className="text-[#f74526] text-5xl mb-4" />,
    title: "Catering Services",
    desc: "Perfect for your events and parties with customizable menus.",
  },
  {
    icon: <FaCalendarCheck className="text-[#f74526] text-5xl mb-4" />,
    title: "Easy Reservations",
    desc: "Book your table online quickly and hassle-free.",
  },
  {
    icon: <FaShoppingCart className="text-[#f74526] text-5xl mb-4" />,
    title: "Online Ordering",
    desc: "Order your favorite meals online and enjoy fast delivery.",
  },
  {
    icon: <FaCreditCard className="text-[#f74526] text-5xl mb-4" />,
    title: "Multiple Payment Options",
    desc: "Pay easily with cards, mobile wallets, or cash on delivery.",
  },
];

const OurServices = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-14 mt-16 bg-white rounded-xl shadow-lg">
      <h2 className="text-4xl font-extrabold text-center text-[#f74526] mb-12 drop-shadow-sm">
        Our Services
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {services.map(({ icon, title, desc }, idx) => (
          <div
            key={idx}
            className="text-center p-6 border border-[#f74526]/20 rounded-3xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer"
          >
            <div className="flex justify-center">{icon}</div>
            <h3 className="text-xl font-semibold mt-3 mb-2 text-[#d63e1a]">{title}</h3>
            <p className="text-gray-700">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;

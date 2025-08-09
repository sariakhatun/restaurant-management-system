import React from 'react';
import { FaUtensils, FaTruck, FaThumbsUp, FaClock } from 'react-icons/fa';

const features = [
  {
    icon: <FaUtensils className="text-[#f74526] text-5xl mb-4" />,
    title: "Delicious & Fresh Food",
    desc: "We use the freshest ingredients to prepare authentic and tasty meals.",
  },
  {
    icon: <FaTruck className="text-[#f74526] text-5xl mb-4" />,
    title: "Fast Delivery",
    desc: "Enjoy quick delivery straight to your door with our efficient service.",
  },
  {
    icon: <FaThumbsUp className="text-[#f74526] text-5xl mb-4" />,
    title: "Customer Satisfaction",
    desc: "We pride ourselves on excellent customer support and a great dining experience.",
  },
  {
    icon: <FaClock className="text-[#f74526] text-5xl mb-4" />,
    title: "Open 24/7",
    desc: "Order anytime! We’re always ready to serve you delicious meals around the clock.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="mx-auto  mb-16  rounded-xl">
      <h2 className="text-3xl font-extrabold text-center text-[#f74526] mb-12 drop-shadow-sm">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {features.map(({ icon, title, desc }, idx) => (
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

export default WhyChooseUs;

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Testimonials = () => {
  const { theme } = useContext(ThemeContext);

  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const cardBorder = theme === "dark" ? "border-gray-700" : "border-[#ffe0d8]";
  const textPrimary = theme === "dark" ? "text-orange-400" : "text-[#f74526]";
  const textSecondary = theme === "dark" ? "text-gray-300" : "text-gray-700";
  const starColor = theme === "dark" ? "text-yellow-400" : "text-yellow-500";

  const testimonials = [
    {
      name: "Sarah H.",
      review: "Absolutely love the food quality and delivery speed! TasteHub is my go-to!",
    },
    {
      name: "David M.",
      review: "The flavors were mind-blowing. Highly recommended for food lovers!",
    },
    {
      name: "Ayesha R.",
      review: "Great variety and super fresh ingredients. 10/10!",
    },
  ];

  return (
    <div className="rounded-4xl pb-12 mb-12">
      <section className=" rounded-4xl">
        <h2 className={`text-4xl font-bold text-center mb-10 ${textPrimary} great-vibes`}>
          What Our Customers Say
        </h2>
        <div className="mx-auto grid gap-8 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className={`${cardBg} p-6 rounded-xl shadow-md border ${cardBorder}`}
            >
              <p className={`${textSecondary} italic`}>
                “{testimonial.review}”
              </p>
              <div className="mt-4">
                <p className={`great-vibes text-xl font-semibold ${textPrimary}`}>
                  – {testimonial.name}
                </p>
                <div className={`${starColor}`}>★★★★★</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonials;

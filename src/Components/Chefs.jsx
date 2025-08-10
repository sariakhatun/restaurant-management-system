import React, { useContext } from "react";
import antinio from "../assets/antinio.jpg";
import lina from "../assets/lina.jpg";
import jamal from "../assets/jamal.jpg";
import { ThemeContext } from "./ThemeContext";

const chefsData = [
  {
    name: "Chef Antonio",
    role: "Italian Cuisine Expert",
    img: antinio,
  },
  { name: "Chef Lina", role: "Pastry Queen", img: lina },
  { name: "Chef Jamal", role: "Spice Specialist", img: jamal },
];

const Chefs = () => {
  const { theme } = useContext(ThemeContext);

  // Dynamic styles based on theme
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-white";
  const cardBorder = theme === "dark" ? "border-gray-700" : "border-[#ffd8cc]";
  const nameText = theme === "dark" ? "text-orange-400 great-vibes" : "text-[#f74526] great-vibes";
  const roleText = theme === "dark" ? "text-gray-300" : "text-gray-600";

  return (
    <div className="mb-12 pb-12">
      <section className=" rounded-4xl">
        <h2 className={`text-4xl font-bold text-center mb-10 great-vibes ${nameText}`}>
          Meet Our Master Chefs
        </h2>
        <div className="mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {chefsData.map((chef, idx) => (
            <div
              key={idx}
              className={`${cardBg} rounded-xl overflow-hidden shadow-md border ${cardBorder}`}
            >
              <img
                src={chef.img}
                alt={chef.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className={`text-xl ${nameText}`}>{chef.name}</h3>
                <p className={`text-sm ${roleText}`}>{chef.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Chefs;

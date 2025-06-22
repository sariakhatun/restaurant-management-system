import React from 'react';
import antinio from '../assets/antinio.jpg'
import lina from '../assets/lina.jpg'
import jamal from '../assets/jamal.jpg'
const Chefs = () => {
    return (
        <div className='mb-8'>
            <section className="py-16 bg-gradient-to-r from-[#fff0ea] to-[#ffe5df] rounded-4xl">
  <h2 className="text-4xl font-bold text-center mb-10 great-vibes text-[#f74526]">
    Meet Our Master Chefs
  </h2>
  <div className="max-w-6xl mx-auto grid gap-10 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {[
      { name: "Chef Antonio", role: "Italian Cuisine Expert", img:antinio },
      { name: "Chef Lina", role: "Pastry Queen", img:lina },
      { name: "Chef Jamal", role: "Spice Specialist", img:jamal },
    ].map((chef, idx) => (
      <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md border border-[#ffd8cc]">
        <img src={chef.img} alt={chef.name} className="w-full h-64 object-cover" />
        <div className="p-4 text-center">
          <h3 className="text-xl great-vibes text-[#f74526]">{chef.name}</h3>
          <p className="text-sm text-gray-600">{chef.role}</p>
        </div>
      </div>
    ))}
  </div>
</section>

            
        </div>
    );
};

export default Chefs;
import React from 'react';

const Testimonials = () => {
    return (
        <div className='rounded-4xl'>
            <section className="py-16 bg-[#fff7f4] rounded-4xl">
  <h2 className="text-4xl font-bold text-center mb-10 text-[#f74526] great-vibes">
    What Our Customers Say
  </h2>
  <div className="max-w-6xl mx-auto grid gap-8 px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {[
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
    ].map((testimonial, idx) => (
      <div
        key={idx}
        className="p-6 bg-white rounded-2xl shadow-md border border-[#ffe0d8]"
      >
        <p className="text-gray-700 italic">“{testimonial.review}”</p>
        <div className="mt-4">
          <p className="great-vibes text-xl text-[#f74526] font-semibold">
            – {testimonial.name}
          </p>
          <div className="text-yellow-400">★★★★★</div>
        </div>
      </div>
    ))}
  </div>
</section>

        </div>
    );
};

export default Testimonials;
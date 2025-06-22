import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import burger from "../assets/burger.jpg";
import pizza from "../assets/pizza.jpg";
import potato from "../assets/potato.jpg";
import cake from "../assets/cake.jpg";
import chowmin from "../assets/chowmin.jpg";
import vegetables from "../assets/vegetables.jpg";
import panir from "../assets/panir.jpg";
import carrot from "../assets/carrot.jpg";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    { src: pic1 },
    { src: pic2 },
    { src: burger },
    { src: pizza },
    { src: potato },
    { src: cake },
    { src: chowmin },
    { src: vegetables },
    { src: panir },
    { src: carrot },
  ];

  return (
    <section className="pb-6 dark:bg-gray-100 dark:text-gray-900">
      <div className="bg-gradient-to-r from-[#f74526] to-[#ff9a8b] py-20 text-center text-white rounded-tl-4xl rounded-br-4xl mb-12">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl great-vibes font-extrabold drop-shadow-[0_5px_30px_rgba(255,255,255,0.5)]">
          Moments of Flavor
        </h1>
        <p className="text-white mt-4 text-lg md:text-xl max-w-2xl mx-auto font-medium great-vibes">
          Dive into our gallery where every dish tells a story — rich, colorful,
          and mouthwatering. Discover the artistry behind each plate.
        </p>
      </div>

      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4 w-11/12">
        {images.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Gallery ${i}`}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="w-full h-full rounded shadow-sm min-h-48 aspect-square object-cover cursor-pointer hover:scale-105 transition-transform"
          />
        ))}
      </div>

      {/* Lightbox component */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={images}
        index={index}
        plugins={[Thumbnails]}
      />
    </section>
  );
};

export default Gallery;

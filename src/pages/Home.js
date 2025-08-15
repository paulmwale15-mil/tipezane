import React, { useState, useEffect } from "react";

const Home = () => {
  const heroImages = [
    "/images/home-1.jpg",
    "/images/home-2.jpg",
    "/images/home-3.jpg"
  ];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background slideshow */}
      {heroImages.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">TIPEZE</h1>
        <p className="text-lg md:text-2xl italic mb-8">
          People need dreams – Dreams need people.
        </p>

        {/* Dropdowns */}
        <div className="flex flex-col md:flex-row gap-4 mb-6 w-full max-w-2xl">
          <select className="p-3 rounded-lg text-black w-full">
            <option>Choose Location</option>
            <option>Lusaka</option>
            <option>Ndola</option>
            <option>Kitwe</option>
          </select>
          <select className="p-3 rounded-lg text-black w-full">
            <option>Choose Service</option>
            <option>Skills</option>
            <option>Transport</option>
            <option>Real Estate</option>
          </select>
          <select className="p-3 rounded-lg text-black w-full">
            <option>Subcategory</option>
            <option>Plumbing</option>
            <option>Moving</option>
            <option>Rentals</option>
          </select>
        </div>

        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg">
          Search
        </button>
      </div>
    </div>
  );
};

export default Home;

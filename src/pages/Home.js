import React, { useState, useEffect } from "react";

export default function Home() {
  // ====== DATA ARRAYS ======
  const heroImages = [
    "/images/home-1.jpg",
    "/images/home-2.jpg",
    "/images/home-3.jpg"
  ];

  const categories = {
    Skills: ["Plumbing", "Electrical", "Carpentry"],
    Transport: ["Taxi", "Courier", "Truck Hire"],
    "Real Estate": ["For Sale", "For Rent", "Land"]
  };

  const locations = ["Lusaka", "Ndola", "Kitwe", "Livingstone"];

  // ====== STATE ======
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [subcategories, setSubcategories] = useState([]);

  // ====== IMAGE SLIDESHOW ======
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // change every 5s
    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ====== HANDLE CATEGORY CHANGE ======
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    setSubcategories(categories[category] || []);
  };

  return (
    <div className="relative h-screen flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {heroImages.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Search Form */}
      <div className="relative z-10 bg-white/90 rounded-lg p-6 shadow-lg w-11/12 max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-4 text-blue-700">
          People need dreams – Dreams need people.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Location */}
          <select className="p-3 rounded border border-gray-300">
            <option value="">Select Location</option>
            {locations.map((loc, idx) => (
              <option key={idx} value={loc}>
                {loc}
              </option>
            ))}
          </select>

          {/* Category */}
          <select
            className="p-3 rounded border border-gray-300"
            onChange={handleCategoryChange}
          >
            <option value="">Select Category</option>
            {Object.keys(categories).map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          {/* Subcategory */}
          <select className="p-3 rounded border border-gray-300">
            <option value="">Select Subcategory</option>
            {subcategories.map((sub, idx) => (
              <option key={idx} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

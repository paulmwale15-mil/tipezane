import React from "react";

const RealEstate = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/realestate-hero.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold">Real Estate Listings</h2>
      </div>
    </div>
  );
};

export default RealEstate;

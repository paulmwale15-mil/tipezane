import React from "react";
import BackgroundRotator from "../components/BackgroundRotator";
import { BG_REAL_ESTATE } from "../config";

const listings = [
  { id: 1, title: "3-Bedroom House", location: "Lusaka", price: "ZMW 1,200,000", image: "https://picsum.photos/seed/house/400/240" },
  { id: 2, title: "Modern Apartment", location: "Ndola", price: "ZMW 850,000", image: "https://picsum.photos/seed/apartment/400/240" },
  { id: 3, title: "Office Space", location: "Kitwe", price: "ZMW 12,000 / month", image: "https://picsum.photos/seed/office/400/240" },
  { id: 4, title: "Farm Plot", location: "Chisamba", price: "ZMW 600,000", image: "https://picsum.photos/seed/plot/400/240" }
];

export default function RealEstate() {
  return (
    <div>
      <div className="relative">
        <BackgroundRotator images={BG_REAL_ESTATE} height="40vh" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl font-extrabold drop-shadow">Real Estate</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {listings.map((l) => (
          <div key={l.id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
            <img src={l.image} alt={l.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{l.title}</h3>
              <p className="text-gray-600">{l.location}</p>
              <p className="text-gray-900 font-semibold mt-1">{l.price}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


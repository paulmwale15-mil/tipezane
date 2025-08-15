import React from "react";
import BackgroundRotator from "../components/BackgroundRotator";
import { BG_TRANSPORT } from "../config";

const data = [
  { id: 1, name: "Speedy Logistics", service: "Truck Delivery", location: "Lusaka", contact: "+260 971 000 111", image: "https://picsum.photos/seed/truck/400/240" },
  { id: 2, name: "CityRide", service: "Taxi Service", location: "Ndola", contact: "+260 972 222 333", image: "https://picsum.photos/seed/taxi/400/240" },
  { id: 3, name: "SwiftCourier", service: "Bike Courier", location: "Kitwe", contact: "+260 973 444 555", image: "https://picsum.photos/seed/bike/400/240" },
  { id: 4, name: "AirCargoX", service: "Air Freight", location: "Livingstone", contact: "+260 974 666 777", image: "https://picsum.photos/seed/air/400/240" }
];

export default function Transport() {
  return (
    <div>
      <div className="relative">
        <BackgroundRotator images={BG_TRANSPORT} height="40vh" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl font-extrabold drop-shadow">Transport</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.map((t) => (
          <div key={t.id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
            <img src={t.image} alt={t.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{t.name}</h3>
              <p className="text-gray-600">{t.service}</p>
              <p className="text-gray-500 text-sm">{t.location}</p>
              <p className="text-gray-700 text-sm">{t.contact}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">Contact</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

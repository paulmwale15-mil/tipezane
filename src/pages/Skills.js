import React from "react";
import BackgroundRotator from "../components/BackgroundRotator";
import { BG_SKILLS } from "../config";

const skillsData = [
  { id: 1, name: "John Banda", profession: "Electrician", location: "Lusaka", rating: 4.8, image: "https://picsum.photos/seed/elec/400/240" },
  { id: 2, name: "Mary Phiri", profession: "Plumber", location: "Ndola", rating: 4.6, image: "https://picsum.photos/seed/plumb/400/240" },
  { id: 3, name: "Peter Zulu", profession: "Tailor", location: "Kitwe", rating: 4.9, image: "https://picsum.photos/seed/tailor/400/240" },
  { id: 4, name: "Aisha Tembo", profession: "Carpenter", location: "Livingstone", rating: 4.7, image: "https://picsum.photos/seed/carp/400/240" }
];

export default function Skills() {
  return (
    <div>
      <div className="relative">
        <BackgroundRotator images={BG_SKILLS} height="40vh" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-4xl font-extrabold drop-shadow">Skills</h2>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {skillsData.map((s) => (
          <div key={s.id} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden transition">
            <img src={s.image} alt={s.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{s.name}</h3>
              <p className="text-gray-600">{s.profession}</p>
              <p className="text-gray-500 text-sm">{s.location}</p>
              <p className="text-yellow-600 mt-1">⭐ {s.rating}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React from "react";
import { HERO_TAGLINE, HERO_SUBLINE, BG_HOME } from "../config";
import { Briefcase, Truck, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import BackgroundRotator from "../components/BackgroundRotator";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <BackgroundRotator images={BG_HOME} height="64vh" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              {HERO_TAGLINE}
            </h1>
            <p className="mt-4 text-white/90 text-lg md:text-xl">{HERO_SUBLINE}</p>
            <a href="#services" className="inline-block mt-6 bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600">
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* Services */}
      <section id="services" className="py-10 px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <ServiceCard to="/skills" icon={<Briefcase size={42} />} title="Skills" desc="Find trusted freelancers for every task." color="from-orange-500 to-amber-500" />
        <ServiceCard to="/transport" icon={<Truck size={42} />} title="Transport" desc="Hire drivers, couriers, and logistics providers." color="from-yellow-500 to-lime-500" />
        <ServiceCard to="/real-estate" icon={<HomeIcon size={42} />} title="Real Estate" desc="Browse properties for rent and sale." color="from-green-500 to-emerald-500" />
      </section>

      <Newsletter />
    </div>
  );
}

function ServiceCard({ to, icon, title, desc, color }) {
  return (
    <Link to={to} className="group">
      <div className={`p-6 rounded-2xl bg-gradient-to-br ${color} text-white shadow-lg transform transition hover:scale-[1.02]`}>
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/20 rounded-xl">{icon}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>
        <p className="mt-3 text-white/90">{desc}</p>
      </div>
    </Link>
  );
}

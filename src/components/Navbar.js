import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Search } from "lucide-react";
import clsx from "classnames";

export default function Navbar() {
  const { pathname } = useLocation();
  const linkCls = (path) =>
    clsx(
      "px-3 py-2 rounded-md text-sm font-medium transition",
      pathname === path ? "bg-white text-blue-700 shadow" : "text-white hover:bg-blue-500/20"
    );

  return (
    <header className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-extrabold tracking-wide">TIPEZE</Link>
        <nav className="hidden md:flex items-center space-x-2">
          <Link to="/" className={linkCls("/")}>Home</Link>
          <Link to="/skills" className={linkCls("/skills")}>Skills</Link>
          <Link to="/transport" className={linkCls("/transport")}>Transport</Link>
          <Link to="/real-estate" className={linkCls("/real-estate")}>Real Estate</Link>
        </nav>
        <div className="flex items-center space-x-2">
          <div className="hidden sm:flex items-center bg-white/95 rounded-full overflow-hidden shadow">
            <input
              type="text"
              placeholder="Search skills, transport, properties..."
              className="px-3 py-1.5 outline-none text-sm text-gray-800 w-48 md:w-64"
            />
            <button className="bg-orange-500 px-3 py-1.5 text-white">
              <Search size={18} />
            </button>
          </div>
          <button className="md:hidden px-3 py-2 bg-white/10 rounded-lg">Menu</button>
        </div>
      </div>
    </header>
  );
}

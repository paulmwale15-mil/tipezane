import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Transport from "./pages/Transport";
import RealEstate from "./pages/RealEstate";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/transport" element={<Transport />} />
            <Route path="/real-estate" element={<RealEstate />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Transport from "./pages/Transport";
import RealEstate from "./pages/RealEstate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/transport" element={<Transport />} />
        <Route path="/realestate" element={<RealEstate />} />
      </Routes>
    </Router>
  );
}

export default App;

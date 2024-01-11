import React, { useState, useEffect } from "react";
import "./App.css";
import FineArt from "./components/FineArt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from "./components/Design";
import Pav from "./components/PAV";
import OriginDJ from "./components/OriginDJ";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import Magnetform from "./components/Magnetform";
import Audiovisual from "./components/Audiovisual";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Design />} />
        <Route path="/fine-art" element={<FineArt />} />
        <Route path="/pav" element={<Pav />} />
        <Route path="/origin-dj" element={<OriginDJ />} />
        <Route path="/magnetform" element={<Magnetform />} />
        <Route path="/audiovisual" element={<Audiovisual />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

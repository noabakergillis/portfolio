import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./components/MainLayout";
import ScrollingImages from "./components/ScrollingImages";
import FineArt from "./components/FineArt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from "./components/Design";
import Pav from "./components/PAV";
import OriginDJ from "./components/OriginDJ";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import Magnetform from "./components/Magnetform";

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
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

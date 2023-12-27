import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./components/MainLayout";
import ScrollingImages from "./components/ScrollingImages";
import FineArt from "./components/FineArt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from "./components/Design";
import Pav from "./components/PAV";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Design />} />
        <Route path="/fine-art" element={<FineArt />} />
        <Route path="/pav" element={<Pav />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainLayout from "./components/MainLayout";
import ScrollingImages from "./components/ScrollingImages";
import FineArt from "./components/FineArt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from "./components/Design";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FineArt />} />
        <Route path="/design" element={<Design />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;

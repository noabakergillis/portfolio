import React, { useState } from "react";
import "./App.css";
import FineArt from "./components/FineArt";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Design from "./components/Design";
import Pav from "./components/PAV";
import OriginDJ from "./components/OriginDJ";
import ScrollToTop from "./components/ScrollToTop";
import Magnetform from "./components/Magnetform";
import Audiovisual from "./components/Audiovisual";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const correctPassword = "peanutbutter";

  const handleLogin = (password: String) => {
    if (password === correctPassword) {
      setIsLoggedIn(true);
    } else {
      alert("Incorrect password");
    }
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

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

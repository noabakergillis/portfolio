import React, { useState, useEffect } from "react";
import "../styles/MainLayout.css";
import Header from "./header";
import lipsFramed from "../assets/lips-framed-no-shadow.png";
import florentineFramed from "../assets/florentine_framed.png";

const MainLayout: React.FC = () => {
  const [imageScale, setImageScale] = useState(1); // Start at full size

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const newScale = Math.max(0.5, 1 - scrollY / 1000); // Adjust scaling factor as needed
    setImageScale(newScale);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-layout">
      <div style={{ display: "flex" }}>
        <div style={{ alignContent: "center" }}>
          <Header />
        </div>
        <div>
          <img
            src={lipsFramed}
            alt="lips framed"
            style={{ transform: `scale(${imageScale})` }}
          />
          <img
            src={florentineFramed}
            alt="lips framed"
            style={{ transform: `scale(${imageScale})` }}
          />
        </div>
      </div>
      <div className="sticky-header">
        <Header />
      </div>
      <div className="content">
        <div>
          <div className="photo-side">
            <img
              src={lipsFramed}
              alt="lips framed"
              style={{ transform: `scale(${imageScale})` }}
            />
          </div>
          <div className="photo-side">
            <img
              src={lipsFramed}
              alt="lips framed"
              style={{ transform: `scale(${imageScale})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

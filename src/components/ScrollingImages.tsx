import React, { useState, useEffect } from "react";
import "../styles/ScrollingImages.css"; // Ensure you create this CSS file
import lipsFramed from "../assets/lips-framed-no-shadow.png";
import florentineFramed from "../assets/florentine_framed.png";

const ScrollingImages: React.FC = () => {
  const [scale, setScale] = useState(1); // Start at full size

  const handleScroll = () => {
    const triggerStart = 300; // Start changing scale after this scroll position (in pixels)
    const triggerEnd = 800; // End changing scale at this scroll position (in pixels)
    const scrollPosition = window.scrollY;

    if (scrollPosition > triggerStart && scrollPosition < triggerEnd) {
      const scaleRange = triggerEnd - triggerStart;
      const scrollRange = scrollPosition - triggerStart;
      const newScale = 1 - (scrollRange / scaleRange) * 0.8; // Scale down to 20% of original size
      setScale(Math.max(newScale, 0.2));
    } else if (scrollPosition <= triggerStart) {
      setScale(1);
    } else if (scrollPosition >= triggerEnd) {
      setScale(0.2);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="image-container">
      <img
        src={lipsFramed}
        alt="Image A"
        style={{ transform: `scale(${scale})` }}
      />
      <img
        src={florentineFramed}
        alt="Image B"
        style={{ transform: `scale(${1 - scale})` }}
      />
    </div>
  );
};

export default ScrollingImages;

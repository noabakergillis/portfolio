import NoaLogo from "./NoaLogo";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [logoColor, setLogoColor] = useState("#000");
  const [workColor, setWorkColor] = useState("gray"); // Default color for 'WORK'
  const [fineArtColor, setFineArtColor] = useState("gray"); // Default color for 'FINE ART'
  const [audiovisColor, setAudiovisColor] = useState("gray");

  useEffect(() => {
    // Logic to determine the color based on the path
    if (location.pathname === "/fine-art") {
      setLogoColor("#fff"); // Color for fine art page
      setWorkColor("black");
      setFineArtColor("gray");
      setAudiovisColor("gray");
    } else if (location.pathname == "/audiovisual") {
      setLogoColor("#000"); // Color for other pages
      setWorkColor("gray");
      setFineArtColor("gray");
      setAudiovisColor("black");
    } else {
      setLogoColor("#000"); // Color for other pages
      setWorkColor("gray");
      setFineArtColor("black");
      setAudiovisColor("gray");
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="header-menu">
        <Link style={{ textDecoration: "none", color: fineArtColor }} to="/">
          <span>WORK</span>
        </Link>
        <Link
          style={{ textDecoration: "none", color: workColor }}
          to="/fine-art"
        >
          <span>FINE ART</span>
        </Link>
        <Link
          style={{ textDecoration: "none", color: audiovisColor }}
          to="/audiovisual"
        >
          <span>AUDIO VISUAL</span>
        </Link>
      </div>
      <header className="header">
        <Link style={{ textDecoration: "none" }} to="/">
          <NoaLogo color={logoColor} />
        </Link>
      </header>
    </div>
  );
};

export default Header;

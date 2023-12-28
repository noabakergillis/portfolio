import NoaLogo from "./NoaLogo";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [logoColor, setLogoColor] = useState("#000"); // Default color
  const [letterColor, setLetterColor] = useState("#fff");

  useEffect(() => {
    // Logic to determine the color based on the path
    if (location.pathname === "/fine-art") {
      setLogoColor("#fff"); // Color for fine art page
      setLetterColor("#f3d790");
    } else {
      setLogoColor("#000"); // Color for other pages
      setLogoColor("fff");
    }
  }, [location.pathname]);

  return (
    <div>
      <div className="header-menu">
        <Link style={{ textDecoration: "none" }} to="/">
          <span>DESIGN</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/fine-art">
          <span>FINE ART</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/about">
          <span>ABOUT</span>
        </Link>
      </div>
      <header className="header">
        <Link style={{ textDecoration: "none" }} to="/">
          <NoaLogo color={logoColor} letterColor={letterColor} />
        </Link>
      </header>
    </div>
  );
};

export default Header;

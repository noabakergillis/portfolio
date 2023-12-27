import React from "react";
import NoaLogo from "./NoaLogo";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <div className="header-menu">
        <Link style={{ textDecoration: "none" }} to="/f">
          <span>DESIGN</span>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/fine-art">
          <span>FINE ART</span>
        </Link>
      </div>
      <header className="header">
        <NoaLogo />
      </header>
    </div>
  );
};

export default Header;

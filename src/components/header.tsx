import React from "react";
import NoaLogo from "./NoaLogo";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div>
      <div className="header-menu">
        {/* Link to Fine Art page */}
        <Link style={{ textDecoration: "none" }} to="/">
          <span>FINE ART</span>
        </Link>

        {/* Link to Design page */}
        <Link style={{ textDecoration: "none" }} to="/design">
          <span>DESIGN</span>
        </Link>
      </div>
      <header className="header">
        <NoaLogo />
      </header>
    </div>
  );
};

export default Header;

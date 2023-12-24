import React from "react";
import NoaLogo from "./NoaLogo";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-left">
        <NoaLogo />
      </div>
      <div className="header-right">
        <a href="#about">+</a>
      </div>
    </header>
  );
};

export default Header;

import NoaLogo from "./NoaLogo";
import "../styles/Header.css";
import { Link } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [workColor, setWorkColor] = useState("gray");
  const [fineArtColor, setFineArtColor] = useState("gray");
  const [audiovisColor, setAudiovisColor] = useState("gray");

  useEffect(() => {
    if (location.pathname === "/fine-art") {
      setWorkColor("gray");
      setFineArtColor("black");
      setAudiovisColor("gray");
    } else if (location.pathname == "/audiovisual") {
      setWorkColor("gray");
      setFineArtColor("gray");
      setAudiovisColor("black");
    } else {
      setWorkColor("black");
      setFineArtColor("gray");
      setAudiovisColor("gray");
    }
  }, [location.pathname]);

  const getLinkClassName = (path: string) => {
    return location.pathname === path ? "selected" : "";
  };

  return (
    <div>
      <div className="header-menu">
        <Link className={getLinkClassName("/")} to="/">
          <div style={{ color: workColor }}>WORK</div>
        </Link>
        <Link className={getLinkClassName("/fine-art")} to="/fine-art">
          <div style={{ color: fineArtColor }}>FINE ART</div>
        </Link>
        <Link className={getLinkClassName("/audiovisual")} to="/audiovisual">
          <div style={{ color: audiovisColor }}>AUDIO VISUAL</div>
        </Link>
        <a href="/Resume.pdf" download>
          <div style={{ color: "gray" }}>RESUME</div>
        </a>
      </div>
      <header className="header">
        <Link style={{ textDecoration: "none" }} to="/">
          <NoaLogo color="black" />
        </Link>
      </header>
    </div>
  );
};

export default Header;

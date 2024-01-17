import Header from "./header";
import React, { useState, useEffect } from "react";
import florentineFramed from "../assets/florentine_framed.png";
import abstractFramed from "../assets/abstract_framed.png";
import marblesFramed from "../assets/marbles_framed.png";
import beadedBencher from "../assets/beaded_bencher_framed.png";
import manFramed from "../assets/man_framed.png";
import birthdayPrint from "../assets/birthday_print_framed.png";
import parisFramed from "../assets/paris_framed.png";
import lipsFramed from "../assets/lips-framed-no-shadow.png";
import clubPainting from "../assets/club_painting.png";
import manHands from "../assets/man_hands.png";
import "../styles/ArtStyles.css";
import CustomCursor from "./CustomCursor";

const FineArt: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const clickableElements = document.querySelectorAll(
      'a, button, input, [role="button"]'
    );

    const videos = document.querySelectorAll("video");

    const onMouseOver = () => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.style.backgroundColor = "#1F51FF";
        cursor.style.opacity = "0.7";
      }
    };

    const onMouseOut = () => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.style.backgroundColor = "darkgray";
        cursor.style.opacity = "1";
      }
    };

    videos.forEach((video) => {
      video.addEventListener("mouseover", () => setShowCursor(false));
      video.addEventListener("mouseout", () => setShowCursor(true));
    });

    clickableElements.forEach((el) => {
      el.addEventListener("mouseover", onMouseOver);
      el.addEventListener("mousedown", onMouseOut);
      el.addEventListener("mouseout", onMouseOut);
    });

    return () => {
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseover", onMouseOver);
        el.removeEventListener("mouseout", onMouseOut);
      });
    };
  }, []);
  
  return (
    <div>
      {showCursor && <CustomCursor />}
      <div>
        <Header />
      </div>
      <div className="artwork-row">
        <img className="main-image" src={florentineFramed} alt="profile-pic" />
        <img className="main-image" src={clubPainting} alt="profile-pic" />
      </div>
      <div className="artwork-row">
        <img
          className="main-image"
          style={{ boxShadow: "7px 7px 7px rgba(0, 0, 0, 0.5)" }}
          src={lipsFramed}
          alt="profile-pic"
        />
        <img className="main-image" src={abstractFramed} alt="profile-pic" />
      </div>
      <div className="artwork-row">
        <img className="main-image" src={marblesFramed} alt="profile-pic" />
        <img className="main-image" src={beadedBencher} alt="profile-pic" />
      </div>
      <div className="artwork-row">
        <img className="main-image" src={manFramed} alt="profile-pic" />
        <img className="main-image" src={birthdayPrint} alt="profile-pic" />
      </div>
      <div className="artwork-row">
        <img className="main-image" src={parisFramed} alt="profile-pic" />
        <img
          className="main-image"
          src={manHands}
          style={{ boxShadow: "7px 7px 7px rgba(0, 0, 0, 0.5)" }}
          alt="profile-pic"
        />
      </div>
    </div>
  );
};

export default FineArt;

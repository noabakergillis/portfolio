import Header from "./header";
import React from "react";
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
import { useCustomCursor } from "../useCustomCursor";

const FineArt: React.FC = () => {
  useCustomCursor("#1F51FF");

  return (
    <div>
      <CustomCursor />
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

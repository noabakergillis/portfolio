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
import "../styles/ArtStyles.css";

const FineArt: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="art-block-one">
        <div className="artwork-row">
          <img
            className="artwork-image"
            src={florentineFramed}
            style={{
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
            alt="Artwork"
          />
          <img
            className="artwork-image"
            src={lipsFramed}
            style={{
              boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
            }}
            alt="Artwork"
          />
          <div className="column">
            <img className="artwork-image" src={birthdayPrint} alt="Artwork" />
            <img
              className="artwork-image"
              style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
              src={parisFramed}
              alt="Artwork"
            />
          </div>
        </div>
      </div>
      <div className="art-block-two">
        <div className="artwork-row">
          <div className="column">
            <img className="artwork-image" src={marblesFramed} alt="Artwork" />
            <img
              className="artwork-image"
              src={beadedBencher}
              style={{ boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)" }}
              alt="Artwork"
            />
          </div>
          <img className="artwork-image" src={abstractFramed} alt="Artwork" />
          <img
            className="artwork-image"
            src={manFramed}
            style={{
              height: "70%",
            }}
            alt="Artwork"
          />
        </div>
      </div>
    </div>
  );
};

export default FineArt;

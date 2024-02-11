import Header from "./header";
import "../styles/Pav.css";
import pavScreen from "../assets/pav_screen.png";
import cabinControls from "../assets/cabin_controls.png";
import pavModes from "../assets/pav_modes.png";
import React, { useState, useEffect } from "react";
import CustomCursor from "./CustomCursor";
import { useCustomCursor } from "../useCustomCursor";

const Pav: React.FC = () => {
  useCustomCursor("#1F51FF");

  const items = [
    "/compressed_drive_and_park.mp4",
    pavScreen,
    cabinControls,
    "/pav-tv.mp4",
    "/seats.mov",
    pavModes,
    "/compressed_park.mp4",
    "/tablet_icon_cropped.mp4",
  ];

  return (
    <div>
      <CustomCursor />
      <div>
        <Header />
      </div>
      <div className="pav-title">Personal Autonomous Vehicle</div>
      {/* <div className="project-subtext">Your personal robot chauffeur</div> */}
      {/* <img className="main-image" src={pavScreen} alt="Artwork" /> */}
      <div className="pav-intro">
        GM Cruise cars are usually robotaxis, designed to get as many people
        from one place to the other as possible. The PAV project focused on
        reimagining Cruise cars as personal chauffeurs for individual ownership.
      </div>
      <div className="pav-intro">
        My team designed the PAV vehicle as a luxury car, with custom leather
        seats, a 60" screen TV, surround-sound speakers, tinting windows, and a
        retractable tablet. The interior was set up with face-to-face seating,
        with two captains' chairs on one side and a bench on the other. The car
        did not include a steering wheel; instead, the user controlled the car
        with a retractable tablet built into the main armrest. I focused on
        designing the interface for the tablet, and then later on building out
        the tablet OS. In designing the interface, I focused on two main
        questions. How can the user feel in control of the drive without a
        steering wheel? How can we harness the new physicality of this product
        (reclining seats, tinting windows, etc.) to make the tablet interaction
        feel magical?
      </div>
      <div className="pav-intro">
        The PAV team was a 10 person, cross-disciplinary team, including vehicle
        engineers, software engineers, industrial designers, UI/UX designers,
        and a PM. We worked as a small innovation lab within Cruise on
        future-facing projects.
      </div>
      <div className="grid-container">
        {items.map((item, index) => (
          <div key={index} className="grid-item">
            {item.split(".").length != 2 && (
              <img src={item} alt={`Item ${index + 1}`} />
            )}
            {item.split(".").length == 2 && (
              <video controls>
                <source src={item} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pav;

import Header from "./header";
import "../styles/Pav.css";
import magnetForm from "../assets/magnetform.jpeg";
import magnetformPres from "../assets/magnetform-pres.jpeg";
import pavModes from "../assets/pav_modes.png";
import robotArms from "../assets/robot-arms.jpeg";
import React, { useState, useEffect } from "react";
import CustomCursor from "./CustomCursor";

const Magnetform: React.FC = () => {
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

  const items = [magnetForm, magnetformPres, robotArms];

  return (
    <div>
      {showCursor && <CustomCursor />}
      <div>
        <Header />
      </div>
      <div className="pav-title">Magnetform</div>
      <div className="pav-intro">
        Magnetform is a system that allows designers to experiment with building
        shape-changing interfaces. Magnetform explores movement as an element of
        design for everyday objects.
      </div>
      <div className="pav-intro">
        My team designed Magnetform as an exploration tool rather than a final
        product. We built a platform with four hidden robotic arms, each holding
        a magnet, and built it into a table. The textile on top had embedded
        magnets. We also built a simple interface that allowed users to control
        the movement of magnetform. I focused primarily on designing the
        movements of Magnetform, and writing the Arduino code for the interface.
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

export default Magnetform;

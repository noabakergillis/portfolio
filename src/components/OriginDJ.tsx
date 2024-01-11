import Header from "./header";
import "../styles/OriginDJ.css";
import originLit from "../assets/origin_lit_up.png";
import originGUI from "../assets/origin_gui.png";
import React, { useState, useEffect } from "react";
import CustomCursor from "./CustomCursor";

const OriginDJ: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const clickableElements = document.querySelectorAll(
      'a, button, input, [role="button"]'
    );

    const videos = document.querySelectorAll("video");

    const onMouseOver = () => {
      const cursor = document.getElementById("customCursor");
      if (cursor) cursor.style.backgroundColor = "#1F51FF";
    };

    const onMouseOut = () => {
      const cursor = document.getElementById("customCursor");
      if (cursor) cursor.style.backgroundColor = "darkgray";
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

  const items = [originGUI, originLit, "/gui-with-seatbelt.mp4"];
  return (
    <div>
      {showCursor && <CustomCursor />}
      <div>
        <Header />
      </div>
      <div className="title">Origin DJ Board</div>
      <div className="intro">
        The Origin DJ Board is a UX tool, spread out of over three applications,
        that allowed Cruise designers to easily interact with the Origin
        vehicle. Before we created the DJ Board, the UX team wasted long hours
        trying to learn complex sequences of terminal commands to interact with
        the in-car screens and control other UX features of the car. I built the
        tool to allow designers to better do their job.
      </div>
      <div className="intro">
        The UX team's point of contact with the tool is a web app, where they
        can configure UX states for the car, save them, and play them in
        sequence using a timer, a remote control, or a hardware change like a
        button push or a seatbelt buckle. The UX features include halo lighting,
        button lighting, door controls, trunk controls, audio, and screen
        display content.
      </div>
      <div className="intro">
        The backend of the tool consists of two services. One is a python
        service, running on a computer in the car, which processes requests from
        the web app and executes them in the car. The second is a lightweight
        Android app, which processes websocket messages from the python service
        and renders screen content based on the request.
      </div>
      <div className="intro">
        I led this project from concept, through final design, to final
        implementation. The tool is still used today throughout the design
        department at Cruise.
      </div>
      <div className="grid-container-origin">
        {items.map((item, index) => (
          <div key={index} className="grid-item-origin">
            {item.split(".").length != 2 && (
              <img src={item} alt={`Item ${index + 1}`} />
            )}
            {item.split(".").length == 2 && (
              <video controls muted>
                <source src={item} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
      <div className="blooper">Blooper</div>
      <video controls>
        <source src={"/demonic_voice.mp4"} type="video/mp4" />
      </video>
    </div>
  );
};

export default OriginDJ;

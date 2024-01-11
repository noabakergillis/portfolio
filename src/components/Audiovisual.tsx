import Header from "./header";
import "../styles/Pav.css";
import vj1 from "../assets/vj1-min.png";
import vj2 from "../assets/vj2-min.png";
import vj3 from "../assets/vj3-min.png";
import vj4 from "../assets/vj4-min.png";
import vj5 from "../assets/purim-party1.jpeg";
import portrait from "../assets/portrait-vj.jpeg";
import vjphilly from "../assets/vjphilly.jpeg";
import React, { useState, useEffect } from "react";
import CustomCursor from "./CustomCursor";

const Audiovisual: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const clickableElements = document.querySelectorAll(
      'a, button, input, [role="button"]'
    );

    const videos = document.querySelectorAll("video");

    const onMouseOver = () => {
      const cursor = document.getElementById("customCursor");
      if (cursor) cursor.style.backgroundColor = "#97fe58";
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

  const items = [vj1, "/vjvideo.mp4", vjphilly, vj2, portrait, vj3, vj4, vj5];

  return (
    <div>
      {showCursor && <CustomCursor />}
      <div>
        <Header />
      </div>
      <div className="pav-title">Audio Visual Work</div>
      <div className="pav-intro">
        Outside of my work as a design engineer, I work as an audio visual
        artist. In my day job, I curate the experience of technology; as an
        audiovisual artist, I curate the experience of music and other people.
      </div>
      <div className="pav-intro">
        I started doing art and light installations in Tel Aviv in 2019, and
        continue my work in various venues around Philadelphia.
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

export default Audiovisual;

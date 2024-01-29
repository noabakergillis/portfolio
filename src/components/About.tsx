import React from "react";
import profilePic from "../assets/grasse_photo.jpeg";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <div className="profile-block">
      <img className="main-image" src={profilePic} alt="profile-pic" />
      <div style={{ width: "50%" }}>
        <div>
          Hi! I'm a creative technologist based in Philadelphia. I'm passionate
          about exploring the intersection of design and engineering. I love
          making things that are beautiful and/or functional. I'm looking for a
          job doing just that, and I'm open to relocating for the right
          adventure.
        </div>
        <div style={{ marginTop: "25px" }}>
          Scroll down to see some recent work.
        </div>
      </div>
    </div>
  );
};
export default About;

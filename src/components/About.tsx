import React from "react";
import profilePic from "../assets/grasse_photo.jpeg";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <div className="profile-block">
      <img className="main-image" src={profilePic} alt="profile-pic" />
      <div className="profile-block-div">
        <div>
          Hi! I'm a design engineer based in NYC. I work at Netflix, focusing
          on delight and special effects. I'm passionate about
          exploring the intersection of design and engineering. I love making
          things that are beautiful and/or functional. 
        </div>
        <div style={{ marginTop: "25px" }}>
          Scroll down to see some recent work.
        </div>
      </div>
    </div>
  );
};
export default About;

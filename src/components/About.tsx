import React from "react";
import Header from "./header";
import profilePic from "../assets/grasse_photo.jpeg";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="profile-block">
        <img className="main-image" src={profilePic} alt="profile-pic" />
        <span>
          Hi! I'm a UX engineer based in Philadelphia. I'm passionate about
          exploring the intersection of design and engineering. I like it when
          things are beautiful and functional. I'm open to relocating for the
          right adventure.
        </span>
      </div>
    </div>
  );
};
export default About;

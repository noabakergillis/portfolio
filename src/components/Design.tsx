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
import "../styles/Design.css";

const Design: React.FC = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="project-block">
        <div className="project-row">
          <video width="520" controls>
            <source src="/pav_video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="project-description-block">
          <div>
            <div className="project-title">Personal Autonomous Vehicle</div>
            <div className="project-description">
              The PAV project reimagines autonomous Cruise vehicles as your
              personal robot chauffeur. PAV drops you off at work, picks up your
              kids from school, and parks itself--all so you don't have to.
            </div>
          </div>
        </div>
      </div>
      <div className="project-block">
        <div className="project-description-block">
          <div>
            <div className="project-title">Origin DJ Board</div>
            <div className="project-description">
              The DJ Board allows UX designers to control features of the Origin
              Cruise car as they design, prototype, and later run UX research
              studies with early Origin vehicles. The DJ Board controls car
              features like screen content, doors, lights, locks, and button
              lights.
            </div>
          </div>
        </div>
        <div className="project-row">
          <video width="520" controls>
            <source src="/design_demo_origin_dj.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="project-block">
        <div className="project-row">
          <video width="520" controls muted>
            <source src="/milab_robot.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="project-description-block">
          <div>
            <div className="project-title">Magnetform</div>
            <div className="project-description">
              The Magnetform project considers how we can incorporate movement
              into our home environment to make our everyday objects feel
              personal and cozy. What if your napkins stood up to say hello? How
              do we interpret abstract movement from our personal objects?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Design;

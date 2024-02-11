import Header from "./header";
import HorizontalLine from "./horizontalLine";
import "../styles/Design.css";
import { Link } from "react-router-dom";
import About from "./About";
import React from "react";
import CustomCursor from "./CustomCursor";
import { useCustomCursor } from "../useCustomCursor";

const Design: React.FC = () => {
  useCustomCursor("#F94541");

  return (
    <div>
      <CustomCursor />
      <Header />
      <About />
      <HorizontalLine />
      <div className="project-block">
        <video className="project-row" controls>
          <source src="/compressed_pav_teaser.mp4" type="video/mp4" />
        </video>
        <div className="project-description-block">
          <div>
            <Link style={{ textDecoration: "none" }} to="/pav">
              <div className="project-title">Personal Autonomous Vehicle</div>
            </Link>
            <div className="project-description">
              The PAV project reimagines autonomous Cruise vehicles as your
              personal robot chauffeur. PAV drops you off at work, picks up your
              kids from school, and parks itself, seamlessly integrating itself
              into your life to bring you convenience and joy. The concept went
              from sketch to a working, drivable prototype in 6 months.
            </div>
            <div className="project-description" style={{ paddingTop: "15px" }}>
              I worked on a small innovation team within Cruise for this
              project, focusing on UI design and implementation for a built-in
              retractable tablet interface, which served as the user's main
              point of interaction with the car. I used Figma and Blender for
              designs, and built the app using Kotlin, Unity, and C#.
            </div>
            <div className="project-description" style={{ paddingTop: "15px" }}>
              This video was made by Cruise's marketing team to showcase the PAV
              project to senior leadership.
            </div>
            <Link style={{ color: "black" }} to="/pav">
              <div
                className="project-description"
                style={{ paddingTop: "15px" }}
              >
                Click to see case study
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="project-block">
        <div className="project-description-block">
          <div>
            <Link style={{ textDecoration: "none" }} to="/origin-dj">
              <div className="project-title">Origin DJ Board</div>
            </Link>
            <div className="project-description">
              The DJ Board allows UX designers to control features of Cruise's
              Origin vehicle as they design, prototype, and run UX research
              studies with early Origin vehicles. The DJ Board controls car
              features like screen content, doors, lights, locks, and button
              lights.
            </div>
            <div className="project-description" style={{ paddingTop: "15px" }}>
              I built this project in collaboration with other UX designers over
              4 months. This project comprised of three main services: the web
              app, built using Typescript with React, the backend services
              running on the Origin vehicle, built in python, and the frontend
              Android app, running on the in-car screens.
            </div>
            <div className="project-description" style={{ paddingTop: "15px" }}>
              I made this video as part of a presentation to the company during
              an All Hands.
            </div>
            <Link style={{ color: "black" }} to="/origin-dj">
              <div
                className="project-description"
                style={{ paddingTop: "15px" }}
              >
                Click to see case study
              </div>
            </Link>
          </div>
        </div>
        <video className="project-row" controls>
          <source src="/compressed_origin_tool.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="project-block">
        <video className="project-row" controls>
          <source src="/bart_compressed.mp4" type="video/mp4" />
        </video>
        <div className="project-description-block">
          <div>
            <Link style={{ textDecoration: "none" }} to="/pav">
              <div className="project-title">Text Classification: Bart</div>
            </Link>
            <div className="project-description">
              Bart is a data classifier used to categorize sentences or text
              snippets. At Zencity, we used Bart to break down large datasets
              for clients' perusal.
            </div>
            <div className="project-description" style={{ paddingTop: "15px" }}>
              I built a full stack service for interacting with and serving the
              Bart model. This included adding a feature in Zencity's main
              product, a web app that gave clients access to AI analysis of
              their data. Clients could choose a subset of their data, input
              categories for classification, and review back the classification
              results. I was the only engineer who worked on this, on a team of
              data scientists.
            </div>
            <div className="project-description" style={{ paddingTop: "15px" }}>
              This video is an example of Bart at work on HuggingFace.
            </div>
          </div>
        </div>
      </div>
      <div className="project-block">
        <div className="project-description-block">
          <div>
            <div className="project-title">Magnetform</div>
            <div className="project-description">
              The Magnetform project considers how we can incorporate movement
              into our home environment to make our everyday objects feel
              personal and cozy. What if your napkins stood up to say hello? How
              do we interpret abstract movement from our personal objects?
            </div>
            <div className="project-description" style={{ paddingTop: "15px" }}>
              I built this project in collaboration with other UX researchers at
              Reichman University's Media Innovation Lab. We designed the
              textile with magnets sewn into the corners, and 3D printed
              magentic robotic arms to build into the table, which were
              controlled by an Arduino.
            </div>
            <div className="project-description" style={{ paddingTop: "15px" }}>
              I made this video as part of a presentation at a UX Research
              conference at Technion Institute.
            </div>
            <Link style={{ color: "black" }} to="/magnetform">
              <div
                className="project-description"
                style={{ paddingTop: "15px" }}
              >
                Click to see case study
              </div>
            </Link>
          </div>
        </div>
        <video className="project-row" controls muted>
          <source src="/milab_robot.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Design;

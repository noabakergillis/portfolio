import Header from "./header";
import "../styles/Pav.css";
import magnetForm from "../assets/magnetform.jpeg";
import magnetformPres from "../assets/magnetform-pres.jpeg";
import robotArms from "../assets/robot-arms.jpeg";
import React from "react";
import CustomCursor from "./CustomCursor";
import { useCustomCursor } from "../useCustomCursor";

const Magnetform: React.FC = () => {
  useCustomCursor("#1F51FF");

  const items = [magnetForm, magnetformPres, robotArms];

  return (
    <div>
      <CustomCursor />
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

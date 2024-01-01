import React from "react";
import "../styles/NoaLogo.css";

const NoaLogo: React.FC<{ color: string }> = ({ color }) => {
  return (
    <div className="noa-logo">
      <div
        className="letter-box"
        style={{
          backgroundColor: color,
          transition: "background-color 0.5s ease",
        }}
      >
        <span>N</span>
      </div>
      <div
        className="letter-box"
        style={{
          backgroundColor: color,
          transition: "background-color 0.5s ease",
        }}
      >
        <span>o</span>
      </div>
      <div
        className="letter-box"
        style={{
          backgroundColor: color,
          transition: "background-color 0.5s ease",
        }}
      >
        <span>A</span>
      </div>
    </div>
  );
};

export default NoaLogo;

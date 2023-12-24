import React from "react";
import "../styles/NoaLogo.css";

const NoaLogo: React.FC = () => {
  return (
    <div className="noa-logo">
      {/* ... other letters ... */}
      <div className="letter-box">
        <span>n</span>
      </div>
      <div className="letter-box">
        <span>o</span>
      </div>
      <div className="letter-box">
        <span>a</span>
      </div>
      {/* ... other letters ... */}
    </div>
  );
};

export default NoaLogo;

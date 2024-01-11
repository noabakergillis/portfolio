import React, { useEffect } from "react";
import "../styles/CustomCursor.css";

const CustomCursor: React.FC = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  

  return <div id="customCursor" className="custom-cursor"></div>;
};

export default CustomCursor;

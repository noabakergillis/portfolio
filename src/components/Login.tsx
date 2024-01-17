// Login.tsx
import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import CustomCursor from "./CustomCursor";

interface LoginProps {
  onLogin: (password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(password);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const [showCursor, setShowCursor] = useState(true);
  useEffect(() => {
    const clickableElements = document.querySelectorAll(
      'a, button, input, [role="button"]'
    );

    const onMouseOver = () => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.style.backgroundColor = "#B026FF";
        cursor.style.opacity = "0.7";
      }
    };

    const onMouseOut = () => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.style.backgroundColor = "darkgray";
        cursor.style.opacity = "1";
      }
    };

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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <CustomCursor />
      <div style={{ padding: "20px" }}>Hi there, welcome to my portfolio.</div>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

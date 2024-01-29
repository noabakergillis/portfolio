import { useEffect } from "react";

export function useCustomCursor(hoverColor: string): void {
  useEffect(() => {
    const onMouseOver = (): void => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.style.backgroundColor = hoverColor;
        cursor.style.opacity = "0.7";
      }
    };

    const onMouseOut = (): void => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.style.backgroundColor = "darkgray";
        cursor.style.opacity = "1";
      }
    };

    const updateEventListeners = (): void => {
      const clickableElements = document.querySelectorAll(
        'a, button, input, [role="button"], video'
      );

      clickableElements.forEach((el) => {
        el.removeEventListener("mouseover", onMouseOver);
        el.removeEventListener("mousedown", onMouseOut);
        el.removeEventListener("mouseout", onMouseOut);
        el.addEventListener("mouseover", onMouseOver);
        el.addEventListener("mousedown", onMouseOut);
        el.addEventListener("mouseout", onMouseOut);
      });
    };

    updateEventListeners();

    return (): void => {
      const clickableElements = document.querySelectorAll(
        'a, button, input, [role="button"]'
      );
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseover", onMouseOver);
        el.removeEventListener("mousedown", onMouseOut);
        el.removeEventListener("mouseout", onMouseOut);
      });
    };
  }, []);
}

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

    const addEventListeners = (el: Element): void => {
      el.addEventListener("mouseover", onMouseOver);
      el.addEventListener("mouseout", onMouseOut);
    };

    const removeEventListeners = (el: Element): void => {
      el.removeEventListener("mouseover", onMouseOver);
      el.removeEventListener("mouseout", onMouseOut);
    };

    const updateEventListeners = (): void => {
      const clickableElements = document.querySelectorAll(
        'a, button, input, [role="button"], video'
      );

      clickableElements.forEach(addEventListeners);
    };

    updateEventListeners();

    return (): void => {
      const clickableElements = document.querySelectorAll(
        'a, button, input, [role="button"], video'
      );
      clickableElements.forEach(removeEventListeners);
    };
  }, []);
}

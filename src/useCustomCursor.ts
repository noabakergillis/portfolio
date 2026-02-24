import { useEffect } from "react";

export function useCustomCursor(): void {
  useEffect(() => {
    const onMouseOver = (): void => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.classList.add("hovering");
      }
    };

    const onMouseOut = (): void => {
      const cursor = document.getElementById("customCursor");
      if (cursor) {
        cursor.classList.remove("hovering");
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

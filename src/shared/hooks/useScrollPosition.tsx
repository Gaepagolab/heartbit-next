import { useEffect, useState } from "react";

type ScrollPosition = {
  x: number;
  y: number;
  direction: "up" | "down";
};

function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
    direction: "down",
  });

  const listener = () => {
    setScrollPosition((prev) => ({
      x: document.body.getBoundingClientRect().left,
      y: -document.body.getBoundingClientRect().top,
      direction:
        prev.y > -document.body.getBoundingClientRect().top ? "up" : "down",
    }));
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  });

  return scrollPosition;
}

export default useScrollPosition;

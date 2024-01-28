// components/FlashlightOverlay.js
import React, { useEffect } from "react";

const FlashlightOverlay = () => {
  useEffect(() => {
    // @ts-ignore
    function update(e) {
      const touches = e.touches;

      if (touches && touches.length > 0) {
        const x = touches[0].clientX;
        const y = touches[0].clientY;

        document.documentElement.style.setProperty("--cursorX", `${x}px`);
        document.documentElement.style.setProperty("--cursorY", `${y}px`);
      } else {
        const x = e.clientX;
        const y = e.clientY;

        document.documentElement.style.setProperty("--cursorX", `${x}px`);
        document.documentElement.style.setProperty("--cursorY", `${y}px`);
      }
    }

    document.addEventListener("mousemove", update);
    document.addEventListener("touchmove", update);

    return () => {
      document.removeEventListener("mousemove", update);
      document.removeEventListener("touchmove", update);
    };
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --cursorX: 50vw;
          --cursorY: 50vh;
        }
        :root:before {
          content: "";
          display: block;
          width: 100%;
          height: 100%;
          position: fixed;
          pointer-events: none;
          background: radial-gradient(
            circle 40vmax at var(--cursorX) var(--cursorY),
            rgba(21, 4, 128, 0.274) 5%,
            // White with 0% opacity
            rgba(21, 4, 128, 0.179) 50%,
            // White with 50% opacity
            rgba(21, 4, 128, 0.068) 70% // White with 95% opacity
          );
        }
      `}</style>
    </>
  );
};

export default FlashlightOverlay;

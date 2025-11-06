"use client";
import React, { useEffect, useRef } from "react";

const SmoothScrollWrapper = ({ children }) => {
  const luxyRef = useRef(null);

  useEffect(() => {
    let luxyInstance;

    // Delay initialization until DOM is fully rendered
    const timer = setTimeout(async () => {
      const luxy = (await import("luxy.js")).default;
      const isMobile = /Mobi|Android|iPhone|iPod|iPad|Phone/i.test(
        navigator.userAgent
      );

      if (!isMobile && luxyRef.current) {
        // Destroy any previous instance before initializing
        try {
          luxy.destroy();
        } catch (e) {}

        // Debug check — you should see >0 if elements exist
        console.log(
          "Luxy initializing... found",
          document.querySelectorAll(".luxy-el").length,
          "elements"
        );

        

        luxy.init({
          wrapper: "#luxy",
          targets: ".luxy-el",
          wrapperSpeed: 0.05,
        });

        luxyInstance = luxy;
      }
    }, 300); // ⏱️ wait 300ms to ensure DOM & children are ready

    return () => {
      clearTimeout(timer);
      if (luxyInstance) {
        try {
          luxyInstance.destroy();
        } catch (e) {}
      }
    };
  }, []);

  return (
    <div id="luxy" ref={luxyRef}>
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;

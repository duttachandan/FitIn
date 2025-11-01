"use client";
import React, { useEffect, useRef } from "react";

const SmoothScrollWrapper = ({ children }) => {
  const luxyRef = useRef(null);

  useEffect(() => {
    let luxyInstance;

    (async () => {
      const luxy = (await import("luxy.js")).default;
      console.log(navigator.userAgent);
      const isMobile = /Mobi|Android|iPhone|iPod|iPad|Phone/i.test(navigator.userAgent);

      if (!isMobile) {
        luxy.init({
          wrapper: "#luxy",
          wrapperSpeed: 0.08,
        });
      }

      luxyInstance = luxy;
    })();

    return () => {
      if (luxyInstance) {
        console.log(luxyInstance);
        luxyInstance.destroy();
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

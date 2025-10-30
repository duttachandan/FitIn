'use client'
import React, { useEffect, useRef } from "react";
import luxy from "luxy.js"; // Import luxy.js

const SmoothScrollWrapper = ({ children }) => {
  const luxyRef = useRef(null);

  useEffect(() => {
    // Initialize Luxy.js when the component mounts
    if (luxyRef.current) {
      luxy.init({
        wrapper: "#luxy", // The ID of the wrapper element
        // Add other Luxy.js options here as needed
        // For example:
        // wrapperSpeed: 0.08,
        // target: '.luxy-target',
      });
    }

    // Clean up Luxy.js when the component unmounts
    return () => {
      if (luxy) {
        luxy.destroy();
      }
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div id="luxy" ref={luxyRef}>
      {children}
    </div>
  );
};

export default SmoothScrollWrapper;

"use client";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const pointer = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let scale = 1; // Default scale
    let targetScale = 1; // For smooth transitions

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleHoverEnter = () => {
      targetScale = 3; // enlarge cursor on hover
    };

    const handleHoverLeave = () => {
      targetScale = 1; // back to normal
    };

    const animate = () => {
      // Smoothly move the cursor
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;

      // Smoothly scale the cursor
      scale += (targetScale - scale) * 0.1;

      if (pointer.current) {
        pointer.current.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(${scale})`;
      }

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    // Hover effects on specific elements
    // Use event delegation for hover tracking
    document.addEventListener("mouseover", (e) => {
      if (e.target.matches("h1, h2, h3, h4, h5, h6, a")) handleHoverEnter();
    });
    document.addEventListener("mouseout", (e) => {
      if (e.target.matches("h1, h2, h3, h4, h5, h6, a")) handleHoverLeave();
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={pointer} className="cursor"></div>;
};

export default Cursor;

"use client";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const pointer = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) / 9;
      cursorY += (mouseY - cursorY) / 9;

      if (pointer.current) {
        pointer.current.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={pointer} className="cursor"></div>;
};

export default Cursor;

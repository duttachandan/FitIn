"use client";
import React, { useEffect, useRef } from "react";

const Cursor = () => {
  const pointer = useRef();
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  const cursorMovement = (e) => {
    requestAnimationFrame(cursorMovement);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.09;
      cursorY += (mouseY - cursorY) * 0.09;

      pointer.current.style.top = cursorY + "px";
      pointer.current.style.left = cursorX + "px";
      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <div ref={pointer} className="cursor"></div>;
};

export default Cursor;

"use client";
import React, { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa6";

const ScrollToTop = () => {
  const scrollBtnRef = useRef(null);

  const scroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const scrollBtn = scrollBtnRef.current;
    if (!scrollBtn) return;

    scrollBtn.addEventListener("click", scroll);
    return () => scrollBtn.removeEventListener("click", scroll);
  }, []);

  return (
    <div
      ref={scrollBtnRef}
      id="scroll-btn"
      className="fixed bottom-[10px] md:bottom-[20px]
      right-[10px] md:right-[20px] h-[50px] w-[50px] md:h-[80px]
      bg-[#f2ff00] rounded-full md:w-[80px] z-[8]
      flex items-center justify-center cursor-pointer"
    >
      <FaArrowUp className="text-base md:text-2xl" />
    </div>
  );
};

export default ScrollToTop;

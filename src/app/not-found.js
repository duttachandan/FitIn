"use client";
import React from "react";
import Lottie from "lottie-react";
import Error from "@/Loader/Error 404.json";

const Custom404 = () => {
  return (
    <div
      className={`fixed inset-0 
      flex justify-center items-center 
      bg-black z-50 h-screen w-screen 
      transition-opacity flex-col
      duration-500`}
    >
      <Lottie
        animationData={Error}
        loop={true}
        autoplay={true}
        style={{ width: 500 }}
      />
      <span className="text-2xl font-bold">Loading....</span>
    </div>
  );
};

export default Custom404;

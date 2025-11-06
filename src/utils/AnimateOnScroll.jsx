"use client";

import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css'

const AnimateOnScroll = ({ children }) => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 1000,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return <>{children}</>;
};

export default AnimateOnScroll;

"use client";

import React, { useEffect } from "react";
import Aos from "aos";

const AnimateOnScroll = ({ children }) => {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return <>{children}</>;
};

export default AnimateOnScroll;

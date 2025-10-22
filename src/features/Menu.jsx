"use client";
import React from "react";

const Menu = ({ toggler }) => {
  return (
    <div
      onClick={() => (toggler == true ? (toggler = false) : (toggler = true))}
      className="navbar-toggler 3xl:hidden block"
    >
      <span
        className="h-[2px] w-[30px]
            bg-[#f2ff00] inline-block"
      ></span>
    </div>
  );
};

export default Menu;

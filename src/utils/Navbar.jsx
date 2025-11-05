"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const Navbar = () => {
  let [toggler, setToggler] = React.useState(false);

  useEffect(() => {
    const value = toggler ? "hidden" : "auto";
    document.body.style.overflowY = value;
    document.documentElement.style.overflowY = value;
  }, [toggler]);

  return (
    <header className="absolute top-0 left-0 right-0 py-3">
      <div className="container mx-auto px-[15px]">
        <nav className="flex items-center">
          <div className="nav-logo flex items-center">
            <Link href="/">
              <Image src={Logo} alt="FitIn Logo" />
            </Link>
          </div>
          <div
            className="flex items-center 
          navbar-collapsed flex-grow-1"
          >
            <div
              className={`flex fixed 3xl:static mx-auto p-[5px] 
              backdrop-blur-[13px] top-0 bottom-0
              ${toggler
                  ? "right-0 md:w-[60%] w-[90%] bg-black/30"
                  : "right-[-100%]"
                }
              items-center 3xl:rounded-full border 
              overflow-y-auto 3xl:overflow-hidden transition-all duration-500`}
            >
              <ul
                className="flex items-center flex-col 
              mx-auto 3xl:pt-0 pt-[50px] 3xl:flex-row"
              >
                <li className="mb-[10px] 3xl:mb-0">
                  <Link
                    className="nav-links pb-[21px] pt-[21px] px-[30px]"
                    href=""
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-[10px] 3xl:mb-0">
                  <Link
                    className="nav-links pb-[21px] pt-[21px] px-[20px]"
                    href=""
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <a className="relative nav-links pb-[21px] pt-[21px] px-[30px]">
                    Features
                    <RiArrowDropDownLine />
                  </a>
                </li>
                <li className="mb-[10px] 3xl:mb-0">
                  <Link
                    className="nav-links pb-[21px] pt-[21px] px-[30px]"
                    href=""
                  >
                    WorkOuts
                  </Link>
                </li>
                <li className="mb-[10px] 3xl:mb-0">
                  <Link
                    className="nav-links pb-[21px] pt-[21px] px-[30px]"
                    href=""
                  >
                    Trainers
                  </Link>
                </li>
                <li className="mb-[10px] 3xl:mb-0">
                  <Link
                    className="nav-links pb-[21px] pt-[21px] px-[30px]"
                    href=""
                  >
                    Testimonials
                  </Link>
                </li>
                <li className="mb-[10px] 3xl:mb-0">
                  <form
                    className="3xl:bg-black 3xl:text-white text-black bg-[#f2ff00] 
                    flex 3xl:hidden 4xl:flex items-center 
                    px-[15px] py-[18px] rounded-full mr-[5px]"
                  >
                    <button type="submit">
                      <CiSearch className="text-[24px]" />
                    </button>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search"
                      className="focus:outline-0 pl-[6px]"
                    />
                  </form>
                </li>
                <li
                  className="4xl:hidden 
                3xl:flex hidden mr-[10px] cursor-pointer"
                >
                  <CiSearch className="text-white text-[24px]" />
                </li>
                <li className="hidden items-center 3xl:flex">
                  <Link
                    className="cart-btn p-[20px] 
                  rounded-full"
                    href="/cart"
                  >
                    <FiShoppingBag className="text-[24px]" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Login Button */}
            <div className="ml-auto 3xl:ml-0 mr-[5px]">
              <Link
                href=""
                className="items-center border-2 
                rounded-full p-[7px] py-[5px]
                3xl:p-[20px] auth-btn"
              >
                <span className="relative z-20">Login/Create Account</span>
                <span
                  className="inline-block ml-[8px] relative z-22
                rounded-full bg-[#f2ff00] md:p-[11px] p-[7px]"
                >
                  <FaArrowRight className="text-[15px] text-black" />
                </span>
              </Link>
            </div>
          </div>

          {/* Hamberger icon */}
          <div
            onClick={() => setToggler(!toggler)}
            className={`navbar-toggler 3xl:hidden block ${toggler ? "active" : ""
              }`}
          >
            <span
              className="h-[2px] w-[30px]
            bg-[#f2ff00] inline-block"
            ></span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

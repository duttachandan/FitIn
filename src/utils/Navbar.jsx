import React from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
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
              className="3xl:flex hidden mx-auto p-[5px] 
              backdrop-blur-[13px]
              items-center rounded-full border 
              overflow-hidden"
            >
              <ul className="flex items-center">
                <li>
                  <Link className="nav-links py-[21px] px-[30px]" href="">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="nav-links py-[21px] px-[20px]" href="">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="nav-links py-[21px] px-[30px]" href="">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="nav-links py-[21px] px-[30px]" href="">
                    WorkOuts
                  </Link>
                </li>
                <li>
                  <Link className="nav-links py-[21px] px-[30px]" href="">
                    Trainers
                  </Link>
                </li>
                <li>
                  <Link className="nav-links py-[21px] px-[30px]" href="">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <form
                    className="bg-black hidden items-center 
                  px-[15px] py-[18px] rounded-full mr-[5px] 4xl:flex"
                  >
                    <button type="submit">
                      <CiSearch className="text-white text-[24px]" />
                    </button>
                    <input
                      type="text"
                      name="search"
                      id="search"
                      placeholder="Search"
                      className="focus:outline-0 text-white pl-[6px]"
                    />
                  </form>
                </li>
                <li className="4xl:hidden flex mr-[10px] cursor-pointer">
                  <CiSearch className="text-white text-[24px]" />
                </li>
                <li className="flex items-center">
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
            <div className="ml-auto mr-[5px]">
              <Link
                href=""
                className="items-center border-2 rounded-full p-[7px] py-[5px]
                md:p-[20px] auth-btn"
              >
                Login/Create Account
                <span
                  className="inline-block ml-[8px]
                rounded-full bg-[#f2ff00] md:p-[11px] p-[7px]"
                >
                  <FaArrowRight className="text-[15px] text-black" />
                </span>
              </Link>
            </div>
          </div>
          <div className="navbar-toggler 3xl:hidden block">
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

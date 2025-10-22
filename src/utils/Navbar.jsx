import React from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";
import Menu from "@/features/Menu";

const Navbar = () => {
  var toggler = false;

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
              ${toggler ? "right-0" : "right-[-100%]"}
              items-center 3xl:rounded-full border 
              overflow-hidden`}
            >
              <ul className="flex items-center flex-col mx-auto 3xl:pt-0 pt-[50px] 3xl:flex-row">
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
          <Menu toggler={toggler} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

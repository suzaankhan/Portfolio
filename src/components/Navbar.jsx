

import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const openNav = () => {
    setnav(!nav);
  };

  const closeNav = () => {
    setnav(!nav);
  };

  const menuVariants = {
    open: {
      x: 0,
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
    closed: {
      x: "-100%",
      transition: {
        stiffness: 20,
        damping: 15,
      },
    },
  };

  return (
    <div className=" fixed top-0 left-0 w-full bg-opacity-70 backdrop-blur-md z-50">
      <div
        className="max-w-[1300px] mx-auto  flex justify-between 
        text-gray-100 text-xl items-center md:px-20 px-10 h-16"
      >
        <a href="#" className="font-cursive text-3xl">S.KHAN</a>

        <ul className="hidden md:flex gap-12 z-10 [&>*]:transition duration-300">
          <li className="for-li">
            <Link to="home" smooth={true} duration={500} offset={-10}>
              Home
            </Link>
          </li>
          <li className="for-li">
            <Link to="education" smooth={true} duration={500} offset={-10}>
              Education
            </Link>
          </li>
          <li className="for-li">
            <Link to="techstack" smooth={true} duration={500} offset={-60}>
              TechStack
            </Link>
          </li>
          <li className="for-li">
            <Link to="projects" smooth={true} duration={500} offset={-50}>
              Projects
            </Link>
          </li>
          <li className="for-li">
            <Link to="contact" smooth={true} duration={500} offset={-50}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger icon */}
        <div onClick={openNav} className="md:hidden z-50 text-gray-100">
          {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        {/* Menu for mobile */}
        <motion.div
          initial={false}
          animate={nav ? "open" : "closed"}
          variants={menuVariants}
          className="fixed left-0 top-0 w-full min-h-screen bg-[#0a192f] z-40 flex items-center 
            justify-center"
        >
          <ul className="flex flex-col gap-10 text-3xl text-center">
            <li className="for-li">
              <Link onClick={closeNav} to="home" smooth={true} duration={500} offset={50}>
                Home
              </Link>
            </li>
            <li className="for-li">
              <Link onClick={closeNav} to="education" smooth={true} duration={500} offset={-50}>
                Education
              </Link>
            </li>
            <li className="for-li">
              <Link onClick={closeNav} to="techstack" smooth={true} duration={500} offset={-50}>
                TechStack
              </Link>
            </li>
            <li className="for-li">
              <Link onClick={closeNav} to="projects" smooth={true} duration={500} offset={-50}>
                Projects
              </Link>
            </li>
            <li className="for-li">
              <Link onClick={closeNav} to="contact" smooth={true} duration={500} offset={-50}>
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>


        {/* Social icons */}
        {/* <div className="fixed flex flex-left top-[50%]">
          qwljkwelk
        </div> */}

      </div>
    </div>
  );
};

export default Navbar;

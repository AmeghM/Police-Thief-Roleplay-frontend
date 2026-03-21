import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

function DesktopNavbar() {
  const NavbarMenu = [
    {
      id: 1,
      title: "Home",
      link: "/",
      delay: "0.2",
    },
    {
      id: 2,
      title: "How to Play",
      link: "#how",
      delay: "0.4",
    },
  ];

  const slideDown = (delay) => ({
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });
  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 
      bg-white/10 backdrop-blur-md 
      border-b border-white/20 shadow-lg shadow-black/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.h1
          variants={slideDown(0.1)}
          initial="hidden"
          animate="show"
          className="text-white font-bold text-lg tracking-wide italic"
        >
          ZLX
        </motion.h1>

        {/* Links */}
        <div className="flex items-center gap-10 text-white uppercase font-medium ">
          <Link to="/" className=" hover:text-gray-300 hover:underline">
            Home
          </Link>

          <Link to="/#how" className="  hover:text-gray-300 hover:underline">
            How it Works
          </Link>
        </div>

        {/* CTA */}
        <Link
          to="/play"
          className="px-4 py-2 rounded-lg bg-gray-300  font-medium
          hover:bg-gray-400 text-black hover:text-white transition-all duration-300"
        >
          Play
        </Link>
      </div>
    </nav>
  );
}

export default DesktopNavbar;

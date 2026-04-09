import React from "react";
import { motion } from "motion/react";
import PoliceImg from "../assets/media/police.png";
import ThiefImg from "../assets/media/Kallan.png";
import KingImg from "../assets/media/king.png";
import HeroCard from "../components/HeroCard";
import How from "../components/How";
import Footer from "../components/Footer";
import NavbarWrapper from "../components/Navbars/NavbarWrapper";
import BannerScroll from "../components/BannerScoll";

function Home() {
  const slideDown = (delay) => ({
    hidden: {
      opacity: 0,
      y: -40,
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
  const slideUp = (delay) => ({
    hidden: {
      opacity: 0,
      y: 20,
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
    <>
      <NavbarWrapper />
      <section className="bg-gray-800 text-white relative py-10 overflow-hidden  h-dvh">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 min-h-200 items-center">
          <div className=""></div>
          {/* hero image */}
          <div className="flex justify-center items-center relative mt-20 mb-4 ">
            <motion.img
              variants={slideUp(0.6)}
              initial="hidden"
              animate="show"
              src={PoliceImg}
              alt=""
              className="max-w-100 absolute z-5 md:max-w-135 brightness-110"
              width={700}
            />
            <motion.img
              src={ThiefImg}
              variants={slideUp(0.8)}
              initial="hidden"
              animate="show"
              alt=""
              className="max-w-100 md:max-w-135 absolute z-4 translate-x-24 md:translate-x-44 mt-6"
              width={700}
            />
            <motion.img
              src={KingImg}
              variants={slideUp(1.0)}
              initial="hidden"
              animate="show"
              alt=""
              className="max-w-100 md:max-w-135 absolute z-3 -translate-x-24 md:-translate-x-45 mt-5"
              width={700}
            />
          </div>
          <div>
            <div></div>
          </div>
        </div>
        {/* bg text */}
        <motion.p
          variants={slideDown(0.6)}
          initial="hidden"
          animate="show"
          className="flex items-center justify-center text-[180px] md:text-[220px] lg:text-[250px] font-bold font-serif  z-2 absolute left-1/2 -translate-x-1/2 lg:-top-1 top-5  text-white/60"
        >
          PlaY
        </motion.p>
        <div className="h-100 w-125 bg-white/45 blur-3xl rounded-full absolute left-1/2 -translate-x-1/2 top-0"></div>
        <HeroCard />
      </section>
      <BannerScroll />
      <How />

      <Footer />
    </>
  );
}

export default Home;

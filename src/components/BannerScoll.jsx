import React from "react";
import { motion } from "motion/react";
import Kallan from "../assets/media/Banner/KallanRun.png";
import Police from "../assets/media/Banner/policeRun.png";

function BannerScroll() {
  // MORE groups = no gap
  const groups = Array(12).fill([Kallan, Police]);

  return (
    <div className="relative w-full overflow-hidden   bg-gray-800/90 border-t border-gray-400 border-b  py-3">
      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 h-full w-16 bg-linear-to-r from-gray-800 to-transparent z-10 pointer-events-none" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 h-full w-16 bg-linear-to-r  from-transparent to-gray-800 z-10 pointer-events-none" />

      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 20,
          repeat: Infinity,
        }}
      >
        {[...groups, ...groups].map((group, index) => (
          <div key={index} className="flex items-center gap-1 mx-4">
            <img src={group[0]} className="w-5 md:w-7 object-contain" alt="" />
            <img src={group[1]} className="w-5 md:w-7 object-contain" alt="" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default BannerScroll;

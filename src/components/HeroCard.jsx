import React, { useState } from "react";
import { motion } from "motion/react";
import RoomFormModal from "./modals/RoomFormModal";

function HeroCard() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");

  const popup = (delay) => ({
    hidden: {
      opacity: 0,
      scale: 0.7,
    },
    show: {
      opacity: 1,
      scale: 1,

      transition: {
        duration: 0.5,
        delay: delay,
      },
    },
  });

  return (
    <>
      <motion.div
        variants={popup(1.1)}
        animate="show"
        initial="hidden"
        className="space-y-6 p-6 rounded-xl shadow w-110 h-50 bg-white/30 text-center backdrop-blur-xs flex flex-col items-center justify-center absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div>
          <motion.p
            className="text-2xl font-bold text-center text-gray-800 will-change-transform"
            animate={{ y: -10 }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            Ready to Play?
          </motion.p>
        </div>
        <div className="flex justify-between items-center w-full px-5">
          <motion.button
            onClick={() => {
              setType("create");
              setOpen(true);
            }}
            className="px-4 py-2 bg-orange-400 rounded-2xl font-semibold cursor-pointer"
          >
            Create Room
          </motion.button>
          <button
            onClick={() => {
              setType("join");
              setOpen(true);
            }}
            className="px-4 py-2 bg-gray-700 rounded-2xl font-semibold cursor-pointer"
          >
            Join Room
          </button>
        </div>
      </motion.div>

      <RoomFormModal open={open} setOpen={setOpen} type={type} />
    </>
  );
}

export default HeroCard;

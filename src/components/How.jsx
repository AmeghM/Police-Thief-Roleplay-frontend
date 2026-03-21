import React from "react";
import { motion } from "motion/react";

function How() {
  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  const dotVariant = {
    hidden: { scale: 0, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  };
  return (
    <>
      <div
        id="how"
        className="min-h-screen w-full bg-gray-900 flex justify-center flex-col items-center p-5 "
      >
        <h2 className="sm:text-2xl text-lg text-white underline font-semibold uppercase tracking-wider mt-6 mb-3">
          How it works
        </h2>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-9 p-8">
          {/* 1 */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-4 w-full h-full "
          >
            <div className="w-full h-full bg-gray-800 rounded-md p-4 border border-blue-400/30 hover:border-blue-400/60 ">
              <h1 className="text-white text-xl font-medium py-2 ">
                Room Setup
              </h1>
              <ul className="list-disc pl-5 text-gray-200">
                <li className="list-item">
                  A player creates the room and becomes the host.
                </li>
                <li>The owner sets not of players, rounds, and roles.</li>
                <li>A room code is generated for others to join.</li>
              </ul>
            </div>
          </motion.div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-500"></div>
            <motion.div
              variants={dotVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 border border-blue-400/70"
            ></motion.div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          {/* 2 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-500"></div>
            <motion.div
              variants={dotVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 text-white text-center border border-blue-400/70"
            ></motion.div>
          </div>
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-4 w-full h-full"
          >
            <div className="w-full h-full bg-gray-800 rounded-md p-4 border border-blue-400/30 ">
              <h1 className="text-white text-xl font-medium py-2 ">
                Custom Roles
              </h1>
              <ul className="list-disc pl-6 text-white">
                <li>The owner can add any roles</li>
                <li>Each role can have custom points</li>
                <p>Eg: King, Soldier etc..</p>
              </ul>
            </div>
          </motion.div>

          {/* 3 */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-4 w-full h-full "
          >
            <div className="w-full h-full bg-gray-800 rounded-md p-4 border border-blue-400/30 ">
              <h1 className="text-white text-xl font-medium py-2 ">
                Role Shuffle
              </h1>
              <ul className="list-disc pl-5 text-gray-200">
                <li className="list-item">
                  Roles are randomly assigned each round.
                </li>
                <li>Players can only see their own role.</li>
                <li>Other roles remain hidden.</li>
              </ul>
            </div>
          </motion.div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-500"></div>
            <motion.div
              variants={dotVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 text-white text-center border border-blue-400/70"
            ></motion.div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          {/* 4 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-500"></div>
            <motion.div
              variants={dotVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 text-white text-center border border-blue-400/70"
            ></motion.div>
          </div>
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-4 w-full h-full"
          >
            <div className="w-full h-full bg-gray-800 rounded-md p-4 border border-blue-400/30 ">
              <h1 className="text-white text-xl font-medium py-2 ">
                Discussion
              </h1>
              <ul className="list-disc pl-6 text-white">
                <li>The police can ask questions and discuss with players</li>
                <li>Players answer while hiding their roles.</li>
                <p>The thief thrives to blend in.</p>
              </ul>
            </div>
          </motion.div>

          {/* 5 */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-4 w-full h-full "
          >
            <div className="w-full h-full bg-gray-800 rounded-md p-4 border border-blue-400/30 ">
              <h1 className="text-white text-xl font-medium py-2 ">
                Police Guess
              </h1>
              <ul className="list-disc pl-5 text-gray-200">
                <li className="list-item">Police chooses a suspected thief.</li>
                <li>The result is shown.</li>
              </ul>
            </div>
          </motion.div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-500"></div>
            <motion.div
              variants={dotVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 text-white text-center border border-blue-400/70"
            ></motion.div>
          </div>
          <div className="col-span-4 w-full h-full"></div>

          {/* 6 */}
          <div className="col-span-4 w-full h-full"></div>
          <div className="relative col-span-1 w-full h-full flex justify-center items-center">
            <div className="h-full w-1 bg-gray-500"></div>
            <motion.div
              variants={dotVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="absolute w-6 h-6 rounded-full bg-gray-400 z-10 text-white text-center border border-blue-400/70"
            ></motion.div>
          </div>
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="col-span-4 w-full h-full"
          >
            <div className="w-full h-full bg-gray-800 rounded-md p-4 border border-blue-400/30 ">
              <h1 className="text-white text-xl font-medium py-2 ">
                Scores & Win
              </h1>
              <ul className="list-disc pl-6 text-white">
                <li>Points are awarded based on roles</li>
                <li>The game continues for the set of rounds.</li>
                <p>Highest total score player wins.</p>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default How;

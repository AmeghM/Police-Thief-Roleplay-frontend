import React from "react";
import { motion } from "motion/react";

const steps = [
  {
    title: "Room Setup",
    side: "left",
    content: [
      "A player creates the room and becomes the host.",
      "The owner sets number of players, rounds, and roles.",
      "A room code is generated for others to join.",
    ],
  },
  {
    title: "Custom Roles",
    side: "right",
    content: [
      "The owner can add any roles",
      "Each role can have custom points",
      "Eg: King, Soldier etc..",
    ],
  },
  {
    title: "Role Shuffle",
    side: "left",
    content: [
      "Roles are randomly assigned each round.",
      "Players can only see their own role.",
      "Other roles remain hidden.",
    ],
  },
  {
    title: "Discussion",
    side: "right",
    content: [
      "Police can ask questions and discuss",
      "Players answer while hiding roles",
      "The thief tries to blend in",
    ],
  },
  {
    title: "Police Guess",
    side: "left",
    content: ["Police chooses a suspected thief", "The result is shown"],
  },
  {
    title: "Scores & Win",
    side: "right",
    content: [
      "Points are awarded based on roles",
      "Game continues for set rounds",
      "Highest score wins",
    ],
  },
];

function How() {
  const leftVariant = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const dotVariant = {
    hidden: { scale: 0, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div
      id="how"
      className="min-h-screen w-full bg-gray-900 flex flex-col items-center p-5"
    >
      <h2 className="text-lg sm:text-2xl text-white underline font-semibold uppercase tracking-wider mt-6 mb-6">
        How it works
      </h2>

      <div className="relative w-full max-w-6xl">
        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 z-0 -translate-x-1/2 w-0.5 h-full bg-gray-700"></div>

        {steps.map((step, i) => {
          const isLeft = step.side === "left";

          return (
            <div key={i} className="mb-12">
              {/*  MOBILE VIEW */}
              <div className="flex  flex-col items-center text-center md:hidden">
                {/* DOT */}
                <motion.div
                  variants={dotVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="w-5 h-5  rounded-full bg-orange-400 border  mb-4 z-10 shadow-[0_0_8px_rgba(249,115,22,0.5)]"
                />

                {/* CARD */}
                <motion.div
                  variants={leftVariant}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="w-full max-w-sm z-10"
                >
                  <div className="bg-gray-800 rounded-md p-4 border border-orange-400/30 text-left hover:border-orange-400/50 transition-colors shadow-xl">
                    <h3 className="text-orange-400 text-lg font-semibold mb-2">
                      {step.title}
                    </h3>
                    <ul className="list-disc pl-5 text-gray-200 space-y-1">
                      {step.content.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              {/*  DESKTOP VIEW */}
              <div className="hidden  md:grid md:grid-cols-9 items-center gap-4">
                {/* LEFT */}
                {isLeft && (
                  <motion.div
                    variants={leftVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="col-span-4"
                  >
                    <Card step={step} />
                  </motion.div>
                )}

                {/* EMPTY */}
                {!isLeft && <div className="col-span-4"></div>}

                {/* DOT */}
                <div className="col-span-1 flex justify-center">
                  <motion.div
                    variants={dotVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="w-5 h-5 rounded-full bg-orange-400 z-10 shadow-[0_0_10px_rgba(249,115,22,0.5)]"
                  />
                </div>

                {/* RIGHT */}
                {!isLeft && (
                  <motion.div
                    variants={rightVariant}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="col-span-4"
                  >
                    <Card step={step} />
                  </motion.div>
                )}

                {/* EMPTY */}
                {isLeft && <div className="col-span-4"></div>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Card({ step }) {
  return (
    <div className="bg-gray-800 rounded-md p-4 border border-orange-400/20 hover:border-orange-400/50 transition-colors shadow-xl">
      <h3 className="text-orange-400 text-lg font-semibold mb-2">
        {step.title}
      </h3>
      <ul className="list-disc pl-5 text-gray-200 space-y-1">
        {step.content.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default How;

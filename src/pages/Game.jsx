import React, { useState } from "react";
import SelectThiefModal from "../components/modals/SelectThiefModal";
import SuspenseModal from "../components/modals/SuspenseModal";
import RevealModal from "../components/modals/RevealModal";
import RoundScore from "../components/modals/RoundScore";

function Game() {
  const [selectModal, setSelectModal] = useState(false);
  const [suspenseModal, setSuspenseModal] = useState(false);
  const [revealModal, setRevealModal] = useState(false);
  const [roundScore, setRoundScore] = useState(false);
  return (
    <>
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-gray-900 rounded-xl shadow-xl p-6">
          <h1 className="text-white text-2xl font-semibold text-center mb-6">
            Round 1
          </h1>

          <div className="bg-gray-800 border-gray-700 rounded-lg p-4 mb-6 text-center">
            <p className="text-gray-400 text-sm uppercase">Your Role:</p>
            <p className="text-2xl font-bold text-white tracking-widest ">
              Police
            </p>
            <p className="text-gray-400 text-sm mb-3">
              (Discuss & Catch the thief)
            </p>

            <button
              onClick={() => setSelectModal(true)}
              className=" lg:hidden bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded text-black font-semibold text-sm"
            >
              Select Thief
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6 items-start">
            <div className="lg:col-span-2 border border-gray-700 rounded-lg overflow-hidden order-2 lg:order-1">
              <div className="bg-gray-700 text-center px-4 py-2 text-gray-300 text-sm font-semibold">
                Players
              </div>

              <table className="w-full text-left text-sm text-gray-200">
                <tbody className="divide-y text-center divide-gray-700">
                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Max</td>
                  </tr>
                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Sam</td>
                  </tr>
                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Qwerty</td>
                  </tr>
                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">John</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="lg:col-span-3 border border-gray-700 rounded-lg flex flex-col overflow-hidden max-h-64 order-1 lg:order-2">
              <div className="bg-blue-900/80 px-4 py-2 text-gray-300 text-sm font-semibold text-center ">
                Discuss
              </div>

              <div className="flex-1 min-h-20 p-3 text-sm text-gray-200 space-y-2 overflow-y-auto">
                <p>
                  <span className="text-orange-400">Max: </span>Sam is sus
                </p>
                <p>
                  <span className="text-yellow-400">Sam: </span>Why me?
                </p>
                <p>
                  <span className="text-yellow-400">Sam: </span>Lorem ipsum
                  dolor sit amet consectetur adipisicing elit. Accusamus fugiat
                  dignissimos hic necessitatibus quisquam natus? Quas et sunt,
                  explicabo dolorem nemo delectus neque voluptates ea cum autem,
                  aliquam voluptatibus adipisci.
                </p>
                <p>
                  <span className="text-yellow-400">Sam: </span>Lorem ipsum
                  dolor, sit amet consectetur adipisicing elit. Autem ut
                  blanditiis praesentium facilis alias eveniet veritatis
                  excepturi, libero exercitationem illo, ipsa sapiente quis
                  distinctio cupiditate ab nesciunt minima! Quod, rem.
                </p>
                <p>
                  <span className="text-orange-400">Max: </span>Sam is sus
                </p>
              </div>

              <div className="border-t border-gray-700 p-2 flex gap-2">
                <input
                  className="flex-1 bg-gray-800 text-white px-2 py-1 rounded outline-none text-sm"
                  placeholder="Message..."
                  type="text"
                />

                <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white text-sm">
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-between items-center mt-6">
            <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white text-sm">
              Leave Room
            </button>

            <button
              onClick={() => setSelectModal(true)}
              className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded text-black font-semibold text-sm shadow-md"
            >
              Select Thief
            </button>
          </div>
        </div>
      </div>

      {selectModal && (
        <SelectThiefModal
          selectModal={selectModal}
          setSelectModal={setSelectModal}
          suspenseModal={suspenseModal}
          setSuspenseModal={setSuspenseModal}
        />
      )}

      {suspenseModal && (
        <SuspenseModal
          suspenseModal={suspenseModal}
          setSuspenseModal={setSuspenseModal}
          revealModal={revealModal}
          setRevealModal={setRevealModal}
        />
      )}

      {revealModal && (
        <RevealModal
          revealModal={revealModal}
          setRevealModal={setRevealModal}
          roundScore={roundScore}
          setRoundScore={setRoundScore}
        />
      )}

      {roundScore && (
        <RoundScore roundScore={roundScore} setRoundScore={setRoundScore} />
      )}
    </>
  );
}

export default Game;

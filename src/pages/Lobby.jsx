import React, { useState } from "react";
import CountDownModal from "../components/modals/CountDownModal";
import NavbarWrapper from "../components/Navbars/NavbarWrapper";

function Lobby() {
  const [game, setGame] = useState(false);

  return (
    <>
      <NavbarWrapper />
      <div className="h-dvh bg-gray-800 flex items-center justify-center p-6  ">
        <div className="w-full max-w-5xl bg-gray-900 rounded-xl shadow-xl p-5  mt-15 mb-20 md:mb-0 ">
          {/* Title */}
          <h1 className="text-2xl font-bold text-white text-center mb-6">
            Game Lobby
          </h1>

          {/* Room Code */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6 text-center">
            <p className="text-gray-400 text-sm">ROOM CODE</p>
            <p className="text-2xl font-bold text-white tracking-widest">
              AB123
            </p>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            {/* Players Section */}
            <div className="lg:col-span-3 border border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gray-700 px-4 py-2 text-gray-300 text-sm font-semibold">
                Players
              </div>

              <table className="w-full text-left text-sm text-gray-200">
                <tbody className="divide-y divide-gray-700">
                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Amegh (Host)</td>
                    <td className="px-4 py-3 text-green-400">Ready</td>
                  </tr>

                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Rahul</td>
                    <td className="px-4 py-3 text-yellow-400">Waiting</td>
                  </tr>

                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Rahul</td>
                    <td className="px-4 py-3 text-yellow-400">Waiting</td>
                  </tr>
                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Rahul</td>
                    <td className="px-4 py-3 text-yellow-400">Waiting</td>
                  </tr>
                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Rahul</td>
                    <td className="px-4 py-3 text-yellow-400">Waiting</td>
                  </tr>
                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Rahul</td>
                    <td className="px-4 py-3 text-yellow-400">Waiting</td>
                  </tr>
                  <tr className="hover:bg-gray-700/40">
                    <td className="px-4 py-3">Rahul</td>
                    <td className="px-4 py-3 text-yellow-400">Waiting</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Chat Section */}
            <div className="lg:col-span-2 border border-gray-700 rounded-lg flex flex-col">
              <div className="bg-gray-700 px-4 py-2 text-gray-300 text-sm font-semibold">
                Chat
              </div>

              <div className="flex-1 p-3 text-sm text-gray-200 space-y-2 overflow-y-auto h-64">
                <p>
                  <span className="text-blue-400">Rahul:</span> wait
                </p>
                <p>
                  <span className="text-green-400">Amegh:</span> ok
                </p>
              </div>

              <div className="border-t border-gray-700 p-2 flex gap-2">
                <input
                  className="flex-1 bg-gray-800 text-white px-2 py-1 rounded outline-none text-sm"
                  placeholder="message..."
                />

                <button className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white text-sm">
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between">
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">
              Leave
            </button>

            <div className="flex gap-3">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
                Ready
              </button>

              <button
                onClick={() => setGame(true)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
      {game && <CountDownModal />}
    </>
  );
}

export default Lobby;

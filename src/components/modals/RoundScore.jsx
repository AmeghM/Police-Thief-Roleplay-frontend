import React from "react";
import { Link } from "react-router-dom";

function RoundScore({ room, onNextRound, isHost }) {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex  items-center justify-center z-50">
        <div className="max-w-88 w-full p-6 bg-gray-800 border border-gray-700  shadow-2xl rounded-lg ">
          <p className="text-gray-400 text-sm text-center mb-1">
            Round {room.currentRound}
          </p>
          <h2 className="text-white mb-5 font-semibold text-xl text-center">
            Round Result
          </h2>

          <div className="overflow-hidden rounded-lg border border-gray-700">
            <table className="w-full text-sm text-gray-200">
              <thead className="bg-gray-700  text-gray-300 text-xs tracking-wide">
                <tr className="">
                  <th className="px-4 py-3 text-left">Players</th>
                  <th className="px-4 py-3 text-left">Roles</th>
                  <th className="px-4 py-3 text-right">Points+</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-600">
                {[...room.players]
                  .sort((a, b) => b.roundScore - a.roundScore)
                  .map((p) => (
                    <tr key={p.id} className=" hover:bg-gray-700/30 transition">
                      <td className="px-4 py-2 font-medium">{p.name}</td>
                      <td className="px-4 py-2 text-red-600 ">{p.role.role}</td>
                      <td className="px-4 py-2 text-right text-green-400 font-semibold ">
                        +{p.roundScore}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
            <p>
              Next round in <span className="text-white font-bold">5s</span> ...
            </p>
            {isHost ? (
              <button
                onClick={onNextRound}
                className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-semibold"
              >
                Next Round
              </button>
            ) : (
              <p className="text-gray-500">Waiting for host...</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default RoundScore;

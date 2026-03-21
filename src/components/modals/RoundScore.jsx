import React from "react";
import { Link } from "react-router-dom";

function RoundScore() {
  return (
    <>
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex  items-center justify-center z-50">
        <div className="max-w-88 w-full p-6 bg-gray-800 border border-gray-700  shadow-2xl rounded-lg ">
          <p className="text-gray-400 text-sm text-center mb-1">Round 1</p>
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
                <tr className=" hover:bg-gray-700/30 transition">
                  <td className="px-4 py-2 font-medium">Max</td>
                  <td className="px-4 py-2 text-red-600 ">Thief</td>
                  <td className="px-4 py-2 text-right text-green-400 font-semibold ">
                    +100
                  </td>
                </tr>
                <tr className=" hover:bg-gray-800/60 transition">
                  <td className="px-4 py-2 font-medium">Sam</td>
                  <td className="px-4 py-2 text-yellow-600 ">Police</td>
                  <td className="px-4 py-2 text-center text-green-400 font-semibold ">
                    +100
                  </td>
                </tr>
                <tr className=" hover:bg-gray-800/60 transition">
                  <td className="px-4 py-2 font-medium">Jack</td>
                  <td className="px-4 py-2 text-amber-400 ">King</td>
                  <td className="px-4 py-2 text-right text-green-400 font-semibold ">
                    +100
                  </td>
                </tr>
                <tr className=" hover:bg-gray-800/60 transition">
                  <td className="px-3 py-2 font-medium">John</td>
                  <td className="px-3 py-2 text-amber-400 ">Thief</td>
                  <td className="px-3 py-2 text-right text-green-400 font-semibold ">
                    +100
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex justify-between items-center mt-6 text-sm text-gray-400">
            <p>
              Next round in <span className="text-white font-bold">5s</span> ...
            </p>

            <Link
              to={"/result"}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded text-white font-semibold"
            >
              Next Round
            </Link>

            <p className="text-gray-500">Waiting for host...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoundScore;

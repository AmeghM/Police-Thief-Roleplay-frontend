import React from "react";

function FinalResult() {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center flex-col justify-center px-4">
      <h1 className="text-white text-3xl sm:text-4xl mb-6 font-bold tracking-wide">
        Game Over
      </h1>
      <div className="w-full max-w-xl bg-gray-900 rounded-xl shadow-xl p-6">
        <h2 className="text-center text-gray-300 font-semibold text-lg sm:text-xl mb-4">
          Total Scores
        </h2>
        <p className="text-center text-yellow-400 font-semibold mb-4 text-lg animate-pulse transition">
          🏆 Max wins the game!
        </p>
        <div className="overflow-hidden rounded-lg border border-gray-700">
          <table className="w-full text-sm text-gray-200">
            <thead className="bg-gray-700 text-gray-300 text-sm tracking-wide">
              <tr>
                <th className="px-3 py-2 ">#</th>
                <th className="px-3 py-2 ">Players</th>
                <th className="px-3 py-2 ">Scores</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              <tr className="bg-yellow-500/10 border-l-4 border-yellow-400  hover:scale-[1.01]  hover:bg-gray-800/70 transition text-center">
                <td className="px-3 py-2">1</td>
                <td className="px-3 py-2 font-medium">Max</td>
                <td className="px-3 py-2 font-medium">1000</td>
                <td className="px-3 py-2">🥇</td>
              </tr>
              <tr className="  hover:bg-gray-800/70 transition text-center">
                <td className="px-3 py-2">2</td>
                <td className="px-3 py-2 font-medium">Jack</td>
                <td className="px-3 py-2 font-medium">800</td>
                <td className="px-3 py-2">🥈</td>
              </tr>
              <tr className="  hover:bg-gray-800/70 transition text-center">
                <td className="px-3 py-2">3</td>
                <td className="px-3 py-2 font-medium">Rock</td>
                <td className="px-3 py-2 font-medium">700</td>
                <td className="px-3 py-2">🥉</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 hover:text-red-500 transition">
            Leave
          </button>
          <button className="px-4 py-2 bg-green-500 rounded text-white hover:bg-green-600  font-semibold transition ">
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinalResult;

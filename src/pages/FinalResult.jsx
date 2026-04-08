import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { socket } from "../socket/socket";
import { useEffect } from "react";

function FinalResult() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const { code } = useParams();

  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  const winner = sortedPlayers[0];

  const handleLeave = () => {
    socket.emit("leave_room", code);
    navigate("/");
  };

  const handlePlayAgain = () => {
    socket.emit("play_again", code);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("finalPlayers"));
    if (data) {
      setPlayers(data);
    }
  }, []);

  useEffect(() => {
    socket.on("game_restarted", () => {
      navigate(`/lobby/${code}`);
    });
    return () => socket.off("game_restarted");
  }, []);
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
          🏆 {winner?.name} wins the game!
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
              {sortedPlayers.map((p, index) => (
                <tr
                  key={p.id}
                  className={`hover:bg-gray-800/70 transition text-center ${index === 0 ? "bg-yellow-500/10 border-l-4 border-yellow-400 transition hover:scale-[1.01]" : ""}`}
                >
                  <td className="px-3 py-2">{index + 1}</td>
                  <td className="px-3 py-2 font-medium">{p.name}</td>
                  <td className="px-3 py-2 font-medium">{p.score}</td>
                  <td className="px-3 py-2">
                    {index === 0
                      ? "🥇"
                      : index === 1
                        ? "🥈"
                        : index === 2
                          ? "🥉"
                          : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={handleLeave}
            className="px-4 py-2 bg-gray-700 rounded text-white hover:bg-gray-600 hover:text-red-500 transition"
          >
            Leave
          </button>
          {players[0]?.id === socket.id && (
            <button
              onClick={handlePlayAgain}
              className="px-4 py-2 bg-green-500 rounded text-white hover:bg-green-600  font-semibold transition "
            >
              Play Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FinalResult;

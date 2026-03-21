import React, { useEffect } from "react";

function RevealModal({ roundScore, setRoundScore }) {
  useEffect(() => {
    const roundScoreModal = setTimeout(() => {
      setRoundScore(true);
    }, 3000);
  }, []);
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-gray-900 w-full max-w-87.5 flex flex-col items-center p-6 rounded-lg shadow-2xl shadow-gray-500/40  border border-gray-700">
        <p className="text-gray-400 text-sm mb-2">Revealing role...</p>

        <p className="font-semibold text-white text-2xl mb-6 ">Max was...</p>

        <p className=" text-5xl font-bold text-green-400 tracking-wide animate-pulse ">
          Thief
        </p>
      </div>
    </div>
  );
}

export default RevealModal;

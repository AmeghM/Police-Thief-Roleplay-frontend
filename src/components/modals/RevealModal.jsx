import React, { useEffect } from "react";

function RevealModal({
  roundScore,
  setRoundScore,
  revealData,
  setRevealModal,
}) {
  const selectedPlayer = revealData?.players.find(
    (p) => p.id === revealData.selectedId,
  );

  const actualThief = revealData?.players.find(
    (p) => p.id === revealData.actualThiefId,
  );
  useEffect(() => {
    const timer = setTimeout(() => {
      setRevealModal(false);
      setRoundScore(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center">
      <div className="bg-gray-900 w-full max-w-87.5 flex flex-col items-center p-6 rounded-lg shadow-2xl shadow-gray-500/40  border border-gray-700">
        <p className="text-gray-400 text-sm mb-2">Revealing role...</p>

        {revealData.isCorrect ? (
          <p className="text-green-400 text-4xl font-bold">Thief</p>
        ) : (
          <>
            <p className="text-red-400 text-4xl font-bold">Not Thief</p>
            <p className="text-yellow-400 mt-4">
              Real thief: {actualThief?.name}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default RevealModal;

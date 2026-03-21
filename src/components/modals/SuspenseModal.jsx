import React, { useEffect } from "react";

function SuspenseModal({
  suspenseModal,
  setSuspenseModal,
  revealModal,
  setRevealModal,
}) {
  useEffect(() => {
    const suspense = setTimeout(() => {
      setSuspenseModal(false);
    }, 3000);

    const reveal = setTimeout(() => {
      setRevealModal(true);
    }, 3000);

    return () => {
      clearTimeout(suspense);
      reveal;
    };
  }, []);
  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="text-center">
        <p className="text-white text-2xl font-semibold mb-3">
          Police has made a guess...
        </p>
        <p className="text-yellow-400 text-lg font-medium animate-pulse">
          Revealing...
        </p>
      </div>
    </div>
  );
}

export default SuspenseModal;

import React from "react";

function SuspenseModal() {
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

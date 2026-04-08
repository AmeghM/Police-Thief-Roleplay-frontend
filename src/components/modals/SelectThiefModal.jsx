import React, { useState } from "react";
import SuspenseModal from "../modals/SuspenseModal";
import { socket } from "../../socket/socket";

function SelectThiefModal({ selectModal, setSelectModal, players, code }) {
  const [selectedId, setSelectedId] = useState(null);

  const handleConfirm = () => {
    if (!selectedId) return;

    socket.emit("select_thief", {
      code,
      selectedId,
    });
    setSelectModal(false);
  };
  return (
    <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
      <div className=" bg-gray-800 w-full max-w-87.5 p-6 rounded-lg shadow-xl shadow-gray-500/30">
        <p className="text-white text-xl font-semibold text-center mb-1">
          Select Thief
        </p>
        <p className="text-gray-400 text-sm text-center mb-5">
          Choose wisely...
        </p>

        <div className=" grid grid-cols-2 md:grid-cols-3 gap-3  max-h-66 px-3 py-1 overflow-y-auto">
          {players
            ?.filter((p) => p.id !== socket.id)
            .map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className={`w-full text-left px-4 py-3 rounded-lg border ${selectedId === p.id ? `bg-yellow-400 text-black border-yellow-500 ` : ` border-gray-600 bg-gray-700 text-gray-200 hover:bg-gray-600`} transition`}
              >
                {p.name}
              </button>
            ))}
        </div>

        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setSelectModal(false)}
            className="text-gray-400 hover:text-white text-sm"
          >
            Cancel
          </button>
          <button
            onClick={() => handleConfirm()}
            className="px-5 py-2 rounded text-sm font-semibold bg-yellow-400 text-black hover:bg-yellow-500 shadow-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectThiefModal;

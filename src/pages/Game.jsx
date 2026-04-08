import React, { useState } from "react";
import SelectThiefModal from "../components/modals/SelectThiefModal";
import SuspenseModal from "../components/modals/SuspenseModal";
import RevealModal from "../components/modals/RevealModal";
import RoundScore from "../components/modals/RoundScore";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { socket } from "../socket/socket";

function Game() {
  const [selectModal, setSelectModal] = useState(false);
  const [suspenseModal, setSuspenseModal] = useState(false);
  const [revealModal, setRevealModal] = useState(false);
  const [roundScore, setRoundScore] = useState(false);

  const { code } = useParams();
  const [room, setRoom] = useState(null);
  const [roleData, setRoleData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const [revealData, setRevealData] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    socket.emit("send_game_message", {
      code,
      message: input,
    });
    setInput("");
  };

  const handleLeave = () => {
    socket.emit("leave_room", code);
    navigate("/");
  };

  const handleNextRound = () => {
    socket.emit("next_round", code);
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("role"));
    setRoleData(saved);

    socket.emit("get_room", code);
    socket.on("room_update", (roomData) => {
      setRoom(roomData);
    });
    socket.on("game_chat_update", (chat) => {
      setMessages(chat);
    });

    return () => {
      socket.off("room_update");
      socket.off("game_chat_update");
    };
  }, []);

  useEffect(() => {
    socket.on("reveal_result", (data) => {
      setRevealData(data);
      setSuspenseModal(true);

      setTimeout(() => {
        setSuspenseModal(false);
        setRevealModal(true);
      }, 3000);
    });
    return () => socket.off("reveal_result");
  }, []);

  useEffect(() => {
    socket.on("next_round_started", (data) => {
      console.log("Next round:", data);
      setRoundScore(false);
      setRevealModal(false);
      setSuspenseModal(false);
      setMessages([]);
    });
    return () => socket.off("next_round_started");
  }, []);

  useEffect(() => {
    socket.on("your_role", (data) => {
      setRoleData(data);
      localStorage.setItem("role", JSON.stringify(data));
    });
    return () => socket.off("your_role");
  }, []);

  useEffect(() => {
    socket.on("game_over", (data) => {
      localStorage.setItem("finalPlayers", JSON.stringify(data.players));
      navigate(`/result/${code}`);
    });
    return () => socket.off("game_over");
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-800 flex items-center justify-center">
        <div className="w-full max-w-5xl bg-gray-900 rounded-xl shadow-xl p-6">
          <button
            onClick={handleLeave}
            className="lg:hidden bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white text-sm"
          >
            Leave Room
          </button>
          <h1 className="text-white text-2xl font-semibold text-center mb-6">
            Round {room?.currentRound}
          </h1>

          <div className="bg-gray-800 border-gray-700 rounded-lg p-4 mb-6 text-center">
            <p className="text-gray-400 text-sm uppercase">Your Role:</p>
            <p className="text-2xl font-bold text-white tracking-widest ">
              {roleData?.role.role}
            </p>
            <p className="text-gray-400 text-sm mb-3">
              {roleData?.role?.role === "Police"
                ? "(Discuss & Catch the thief)"
                : roleData?.role?.role === "Thief"
                  ? "(Discuss smartly and act cunning)"
                  : "Discuss "}
            </p>

            {roleData?.role?.role === "Police" && (
              <button
                onClick={() => setSelectModal(true)}
                className=" lg:hidden bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded text-black font-semibold text-sm"
              >
                Select Thief
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6 items-start">
            <div className="lg:col-span-2 border border-gray-700 rounded-lg overflow-hidden order-2 lg:order-1">
              <div className="bg-gray-700 text-center px-4 py-2 text-gray-300 text-sm font-semibold">
                Players
              </div>

              <table className="w-full text-left text-sm text-gray-200">
                <tbody className="divide-y text-center divide-gray-700">
                  {room?.players.map((player) => (
                    <tr key={player.id} className="hover:bg-gray-700/40">
                      <td className="px-4 py-3">{player.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:col-span-3 border border-gray-700 rounded-lg flex flex-col overflow-hidden max-h-64 order-1 lg:order-2">
              <div className="bg-blue-900/80 px-4 py-2 text-gray-300 text-sm font-semibold text-center ">
                Discuss
              </div>

              <div className="flex-1 min-h-20 p-3 text-sm text-gray-200 space-y-2 overflow-y-auto">
                {messages.map((msg) => {
                  const isMe = msg.senderId === socket.id;
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                    >
                      <div className="px-3 py-2 rounded-;g max-w-[70%] text-sm">
                        {!isMe && (
                          <p className="text-xs font-semibold mb-1">
                            {msg.user}
                          </p>
                        )}
                        <p className="text-white">{msg.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="border-t border-gray-700 p-2 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSend();
                    }
                  }}
                  className="flex-1 bg-gray-800 text-white px-2 py-1 rounded outline-none text-sm"
                  placeholder="Message..."
                  type="text"
                />

                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white text-sm"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex justify-between items-center mt-6">
            <button
              onClick={handleLeave}
              className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white text-sm"
            >
              Leave Room
            </button>

            {roleData?.role?.role === "Police" && (
              <button
                onClick={() => setSelectModal(true)}
                className="bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded text-black font-semibold text-sm shadow-md"
              >
                Select Thief
              </button>
            )}
          </div>
        </div>
      </div>

      {selectModal && (
        <SelectThiefModal
          selectModal={selectModal}
          setSelectModal={setSelectModal}
          players={room?.players}
          code={code}
        />
      )}

      {suspenseModal && <SuspenseModal />}

      {revealModal && (
        <RevealModal
          revealModal={revealModal}
          setRevealModal={setRevealModal}
          roundScore={roundScore}
          setRoundScore={setRoundScore}
          revealData={revealData}
        />
      )}

      {roundScore && (
        <RoundScore
          room={room}
          onNextRound={handleNextRound}
          isHost={room?.host === socket.id}
        />
      )}
    </>
  );
}

export default Game;

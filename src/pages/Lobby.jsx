import React, { useState } from "react";
import CountDownModal from "../components/modals/CountDownModal";
import NavbarWrapper from "../components/Navbars/NavbarWrapper";
import { useNavigate, useParams } from "react-router-dom";
import { Copy } from "lucide-react";
import { toast, Toaster } from "sonner";
import { socket } from "../socket/socket";
import { useEffect } from "react";

function Lobby() {
  const [game, setGame] = useState(false);

  const [room, setRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const { code } = useParams();
  const navigate = useNavigate();

  const isHost = room?.host === socket.id;
  const player = room?.players.find((p) => p.id === socket.id);
  const allReady = room?.players.every((p) => p.ready);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success("Room code copied!!");
  };

  const handleReady = () => {
    socket.emit("toggle_ready", code);
  };

  const handleLeave = () => {
    socket.emit("leave_room", code);

    navigate("/");
  };

  const handleStart = () => {
    socket.emit("start_game", code);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    socket.emit("send_message", {
      code,
      message: input,
    });

    setInput("");
  };

  useEffect(() => {
    if (!code) return;
    socket.emit("get_room", code);

    socket.on("room_update", (roomData) => {
      console.log("Room updated", roomData);
      setRoom(roomData);
    });
    socket.on("chat_update", (chat) => {
      setMessages(chat);
    });

    return () => {
      socket.off("room_update");
      socket.off("chat_update");
    };
  }, [code]);

  useEffect(() => {
    socket.on("your_role", (data) => {
      console.log("My role:", data);
      localStorage.setItem("role", JSON.stringify(data));
    });

    socket.on("game_started", () => {
      setGame(true);

      setTimeout(() => {
        navigate(`/game/${code}`);
      }, 3000);
    });
    return () => {
      socket.off("your_role");
      socket.off("game_started");
    };
  }, []);

  return (
    <>
      <Toaster position="top-center" />
      <NavbarWrapper />
      <div className="h-dvh bg-gray-800 flex items-center justify-center p-6  ">
        <div className="w-full max-w-5xl bg-gray-900 rounded-xl shadow-xl p-5  mt-15 mb-20 md:mb-0 ">
          {/* Title */}
          <h1 className="text-2xl font-bold text-white text-center mb-6">
            Game Lobby
          </h1>

          {/* Room Code */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-6 text-center">
            <p className="text-gray-400 text-sm">ROOM CODE</p>
            <div className="flex items-center justify-center gap-3">
              <p className="text-2xl font-bold text-white tracking-widest">
                {code}
              </p>

              <button
                onClick={handleCopy}
                className="p-2 rounded bg-gray-700 hover:bg-gray-600 transition"
                title="Copy code"
              >
                <Copy size={11} className="text-gray-300" />
              </button>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
            {/* Players Section */}
            <div className="lg:col-span-3 border border-gray-700 rounded-lg overflow-hidden">
              <div className="bg-gray-700 px-4 py-2 text-gray-300 text-sm font-semibold">
                Players
              </div>

              <table className="w-full text-left text-sm text-gray-200">
                <tbody className="divide-y divide-gray-700">
                  {room?.players.map((p) => (
                    <tr key={p.id} className="hover:bg-gray-700/40">
                      <td className="px-4 py-3">
                        {p.name}
                        {p.id === room.host && "(Host)"}{" "}
                      </td>
                      <td className="px-4 py-3 text-green-400">
                        {p.ready ? (
                          <span className="text-green-400">Ready</span>
                        ) : (
                          <span className="text-yellow-400">Waiting</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Chat Section */}
            <div className="lg:col-span-2 border border-gray-700 rounded-lg flex flex-col">
              <div className="bg-gray-700 px-4 py-2 text-gray-300 text-sm font-semibold">
                Chat
              </div>

              <div className="flex-1 p-3 text-sm text-gray-200 space-y-2 overflow-y-auto max-h-64">
                {messages.map((msg) => {
                  const isMe = msg.senderId === socket.id;
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isMe ? "justify-end" : "justify-start"}`}
                    >
                      <div className="px-3 py-2 rounded-lg max-w-[70%] text-sm">
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
                  placeholder="message..."
                />

                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className={`px-3 py-1 rounded text-white text-sm ${input.trim() ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-500 cursor-not-allowed"}`}
                >
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex justify-between">
            <button
              onClick={handleLeave}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
            >
              Leave
            </button>

            <div className="flex gap-3">
              <button
                onClick={handleReady}
                className={`text-white px-4 py-2 rounded-lg ${player?.ready ? "bg-yellow-500 hover:bg-yellow-600" : "bg-blue-500 hover:bg-blue-600"} `}
              >
                {!player?.ready ? "Ready" : "Not ready"}
              </button>
              {isHost && (
                <button
                  onClick={handleStart}
                  disabled={!allReady}
                  className={`text-white px-4 py-2 rounded-lg ${allReady ? "bg-green-500 hover:bg-green-600" : "bg-gray-500 cursor-not-allowed"} `}
                >
                  Start
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {game && <CountDownModal />}
    </>
  );
}

export default Lobby;

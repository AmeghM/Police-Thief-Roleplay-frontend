import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { socket } from "../../socket/socket";
import { useEffect } from "react";

function RoomFormModal({ open, setOpen, type }) {
  const [players, setPlayers] = useState(3);
  const [roles, setRoles] = useState([]);
  const [username, setUsername] = useState("");
  const [rounds, setRounds] = useState(5);
  const [roomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  console.log(username);

  const handlePlayersChange = (e) => {
    const value = Number(e.target.value);
    setPlayers(value);

    const newRoles = Array.from({ length: value }, () => ({
      role: "",
      points: "",
    }));
    setRoles(newRoles);
  };

  const handleRoleChange = (index, field, value) => {
    const updatedRoles = [...roles];
    updatedRoles[index][field] = value;
    setRoles(updatedRoles);
  };

  const handleCreate = async () => {
    if (!username) {
      toast.error("Enter your name");
      return;
    }
    if (players < 3) {
      toast.error("Minimum 3 players required");
      return;
    }
    const roleNames = roles.map((r) => r.role.toLowerCase());

    if (!roleNames.includes("police") || !roleNames.includes("thief")) {
      toast.warning("You must include at least one Police and one Thief role");
      return;
    }
    localStorage.setItem("name", username);

    const formData = {
      username,
      players,
      roles,
      rounds,
    };

    console.log("Creating room ", formData);
    socket.emit("create_room", formData);

    console.log(formData);
  };

  const handleJoin = async () => {
    if (!username || !roomCode) {
      toast.error("Enter name and room code!!");
      return;
    }

    localStorage.setItem("name", username);
    socket.connect();
    socket.emit("join_room", {
      username,
      roomCode,
    });

    toast.success(`Room joined ${username}`);
  };

  useEffect(() => {
    socket.connect();

    const handleRoomCreated = (room) => {
      toast.success("Room created");
      navigate(`/lobby/${room.code}`);
    };

    const handleRoomUpdate = (room) => {
      navigate(`/lobby/${room.code}`);
    };

    socket.on("room_created", handleRoomCreated);
    socket.on("room_update", handleRoomUpdate);

    return () => {
      socket.off("room_created", handleRoomCreated);
      socket.off("room_update", handleRoomUpdate);
    };
  }, []);

  console.log(roomCode);
  socket.on("connect", () => {
    console.log("✅ Connected to server:", socket.id);
  });

  if (!open) return null;
  return (
    <>
      <Toaster position="top-center" />;
      <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
        <div className="bg-gray-800 p-6 rounded-lg w-87.5 shadow-xl ">
          <h2 className="text-xl font-bold mb-4 text-center">
            {type === "create" ? "Create Room" : "Join Room"}
          </h2>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Your Name"
            className="border p-2 w-full mb-3 rounded-lg"
          />
          {type === "create" && (
            <>
              <input
                type="number"
                placeholder="No. of players (3>)"
                min={3}
                value={players}
                className="border p-2 w-full mb-3 rounded-lg"
                onChange={(e) => handlePlayersChange(e)}
              />
              <input
                type="number"
                placeholder="No. of rounds"
                min={1}
                value={rounds}
                onChange={(e) => setRounds(Number(e.target.value))}
                className="border p-2 w-full mb-3 rounded-lg"
              />
              <p className="">Add the roles:</p>
              <div className="max-h-30 overflow-y-auto mb-3">
                {roles.map((r, index) => (
                  <div key={index} className="flex gap-2 mb-2 p-2">
                    <input
                      placeholder="Role (Police)"
                      className="border p-2 w-1/2 rounded"
                      onChange={(e) =>
                        handleRoleChange(index, "role", e.target.value)
                      }
                    />

                    <input
                      type="number"
                      placeholder="Points"
                      min={0}
                      className="border p-2 w-1/2 rounded"
                      onChange={(e) =>
                        handleRoleChange(index, "points", e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </>
          )}
          {type === "join" && (
            <input
              placeholder="Room Code"
              className="border p-2 w-full mb-3 rounded-lg"
              onChange={(e) => setRoomCode(e.target.value)}
            />
          )}

          <button
            onClick={type === "create" ? handleCreate : handleJoin}
            className={` text-white px-4 py-2 w-full rounded cursor-pointer ${type === "create" ? "bg-orange-400" : "bg-gray-600"}`}
          >
            {type === "create" ? "Create" : "Join"}
          </button>

          <button
            onClick={() => setOpen(false)}
            className="mt-3 text-gray-500 w-full cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default RoomFormModal;

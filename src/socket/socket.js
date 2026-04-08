import { io } from "socket.io-client";

// export const socket = io("http://localhost:3000", {
//   autoConnect: false,
// });
export const socket = io("https://police-thief-roleplay-backend.onrender.com", {
  transports: ["websocket"],
  reconnection: true,
  reconnectionAttempts: 5,
});

socket.on("connect", () => {
  console.log("✅ Connected to server:", socket.id);
});

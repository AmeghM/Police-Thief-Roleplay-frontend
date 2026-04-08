import { io } from "socket.io-client";

// export const socket = io("http://localhost:3000", {
//   autoConnect: false,
// });
export const socket = io("https://police-thief-roleplay-backend.onrender.com");

socket.on("connect", () => {
  console.log("✅ Connected to server:", socket.id);
});

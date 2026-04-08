import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
import FinalResult from "./pages/FinalResult";
import Pnf from "./pages/Pnf";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lobby/:code" element={<Lobby />} />
        <Route path="/game/:code" element={<Game />} />
        <Route path="/result/:code" element={<FinalResult />} />
        <Route path="/*" element={<Pnf />} />
      </Routes>
    </>
  );
}

export default App;

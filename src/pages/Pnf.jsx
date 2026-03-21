import React from "react";
import PnfImg from "../assets/media/pnf.png";
import { Link } from "react-router-dom";
function Pnf() {
  return (
    <>
      <div className="h-dvh bg-gray-900 w-full flex flex-col justify-center items-center">
        <img src={PnfImg} alt="" className="w-230" />
        <Link
          to={"/"}
          className="px-4 py-2 bg-violet-700 rounded text-white hover:bg-white hover:text-violet-700 transition font-semibold"
        >
          Go to Home
        </Link>
      </div>
    </>
  );
}

export default Pnf;

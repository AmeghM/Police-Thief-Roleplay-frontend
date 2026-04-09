import { Link } from "lucide-react";
import React from "react";

function MobileNavbar() {
  return (
    <div
      className="fixed bottom-0 left-0 w-full z-50 
      bg-white/10 backdrop-blur-md border-t border-white/20 rounded-t-2xl"
    >
      <div className="flex justify-around py-3 text-white/80 text-xs">
        <Link to="/">Home</Link>

        <a href="/#how">How</a>

        <a href="/#play">Play</a>
      </div>
    </div>
  );
}

export default MobileNavbar;

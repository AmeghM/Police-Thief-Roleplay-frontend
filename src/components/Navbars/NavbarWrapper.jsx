import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

function NavbarWrapper() {
  return (
    <>
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}

export default NavbarWrapper;

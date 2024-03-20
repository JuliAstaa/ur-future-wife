import React, { useState } from "react";
import NavMenu from "./Nav-menu";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div id="home" className="flex items-center w-full h-16 py-8 ">
      <div className="w-full grid grid-cols-3">
        <div className="logo col-span-2 lg:col-span-1 px-2 lg:px-0">
          <h1 className="font-bold font-lobster text-xl">Ur future wife.</h1>
        </div>
        <div className="hamburger flex justify-end lg:hidden px-2 relative">
          <button
            onClick={() => setActive(!active)}
            className={`hamburger-toggle flex flex-col justify-between ${
              active ? "hamburger-active" : null
            }`}
          >
            <span className="line origin-top-left"></span>
            <span className="line origin-left"></span>
            <span className="line origin-bottom-left"></span>
          </button>
          <div
            className={`absolute top-full z-[999] w-[200px] flex justify-center items-center bg-white border shadow-xl rounded-md px-4 py-16 transition-all ease-in-out duration-300 origin-top-right ${
              active ? "scale-100" : "scale-0"
            }`}
          >
            <NavMenu />
          </div>
        </div>
        <div className="col-span-2 hidden lg:block">
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

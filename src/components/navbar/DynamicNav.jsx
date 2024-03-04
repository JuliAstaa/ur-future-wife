import React from "react";
import { Link } from "react-router-dom";

const DynamicNav = () => {
  return (
    <div className="flex items-center w-full h-16 py-8 ">
      <div className="w-full grid grid-cols-3">
        <div className="logo col-span-2 lg:col-span-1 px-2 lg:px-0">
          <Link to={"/"}>
            <h1 className="font-bold font-lobster text-xl">Ur future wife.</h1>
          </Link>
        </div>
        <div className="hamburger flex justify-end lg:hidden px-2 relative"></div>
      </div>
    </div>
  );
};

export default DynamicNav;

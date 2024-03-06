import React from "react";
import { Link } from "react-router-dom";

const DynamicNav = ({ path }) => {
  return (
    <div className="flex items-center w-full h-16 py-8 ">
      <div className="w-full grid grid-cols-2">
        <div className="logo col-span-1 px-2 lg:px-0">
          <Link to={"/"}>
            <h1 className="font-bold font-lobster text-xl">Ur future wife.</h1>
          </Link>
        </div>
        <div className="hamburger flex justify-end relative px-2 lg:px-0">
          {path.map((url, index) => {
            return (
              <div key={index} className="flex gap-2">
                <Link
                  to={url.url}
                  className="font-poppins transition-all ease-in-out duration-300 hover:text-[#FF9800] hover:translate-x-1 capitalize"
                >
                  {url.path}
                </Link>
                <span className="mr-2">
                  {path.length - 1 != index ? "/" : null}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DynamicNav;

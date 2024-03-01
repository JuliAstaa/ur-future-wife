import React from "react";
import bg from "/bg-table.jpg";
import { FaSearch } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="w-full h-80">
      <div className="relative w-full h-full">
        <img src={bg} alt="" className="w-full h-80" />

        <div className="absolute top-0 left-0  w-full h-full flex flex-col gap-4 justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-robotoCondensed text-white text-center p-4 lg:p-0 uppercase font-bold">
            What do you want to eat today honey?
          </h1>
          <div className="input w-3/4 lg:w-1/2  h-10 rounded-md overflow-hidden flex items-center justify-center bg-white">
            <label htmlFor="search"></label>
            <input
              type="text"
              name="search"
              id="search"
              className="w-full h-full px-2 outline-none"
            />
            <button className="px-4">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

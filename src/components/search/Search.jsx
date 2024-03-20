import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const keywordRef = useRef();
  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(`/search/${keywordRef.current.value}`);
  };
  return (
    <div className="w-3/4 lg:w-1/2  h-10 overflow-hidden flex items-center justify-center">
      <form
        onSubmit={() => handleSubmit()}
        action=""
        className="input w-full g:w-1/2  h-10 rounded-md overflow-hidden flex items-center justify-center bg-white"
      >
        <label htmlFor="search"></label>
        <input
          ref={keywordRef}
          type="text"
          name="search"
          id="search"
          className="w-full h-full px-2 outline-none"
        />
        <button type="submit" className="px-4">
          <FaSearch />
        </button>
      </form>
    </div>
  );
};

export default Search;

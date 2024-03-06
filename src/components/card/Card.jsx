import React from "react";
import { Link } from "react-router-dom";

const Card = ({ rec }) => {
  return (
    <div className="shadow-xl group cursor-pointer">
      <Link to={`/meal/${rec.idMeal}`}>
        <div className="img relative overflow-hidden">
          <img src={rec.strMealThumb} alt="" />
          <div className="absolute top-0 right-0 w-auto h-6 grid place-items-center px-2 bg-[#FF9800] rounded-bl-md font-poppins md:text-md">
            {rec.strCategory}
          </div>
          <div className="absolute transition-all  ease-in-out duration-500 w-full h-full bg-[#FF9800]/60 -left-full top-0 group-hover:left-0"></div>
        </div>
        <div className="desc my-4 flex flex-col justify-between">
          <h1 className="font-poppins font-semibold text-xl">{rec.strMeal}</h1>
          <p className="text-xs text-slate-600">~~{rec.strArea}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

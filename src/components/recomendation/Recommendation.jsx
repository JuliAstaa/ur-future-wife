import React from "react";
import { useSelector } from "react-redux";
import { recommend } from "../../data/dataSlice";

const Recommendation = () => {
  const recomendation = useSelector(recommend);
  return (
    <div className="w-fullx pt-8 px-2 lg:px-0">
      <div className="title">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-robotoCondensed uppercase">
          Recommendation for u
        </h1>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {recomendation.map((rec) => {
          return (
            <div key={rec.idMeal} className="shadow-xl group cursor-pointer">
              <div className="img relative overflow-hidden">
                <img src={rec.strMealThumb} alt="" />
                <div className="absolute top-0 right-0 w-auto h-6 grid place-items-center px-2 bg-[#FF9800] rounded-bl-md font-poppins md:text-md">
                  {rec.strCategory}
                </div>
                <div className="absolute transition-all  ease-in-out duration-500 w-full h-full bg-[#FF9800]/60 -left-full top-0 group-hover:left-0"></div>
              </div>
              <div className="desc my-4 flex flex-col justify-between">
                <h1 className="font-poppins font-semibold text-xl">
                  {rec.strMeal}
                </h1>
                <p className="text-xs text-slate-600">~~{rec.strArea}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommendation;

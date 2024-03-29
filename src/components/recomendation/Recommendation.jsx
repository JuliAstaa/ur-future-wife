import React from "react";
import { useSelector } from "react-redux";
import { recommend } from "../../data/dataSlice";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import Categories from "../categories/Categories";
import CardLoading from "../loading/CardLoading";

const Recommendation = () => {
  const recomendation = useSelector(recommend);
  return (
    <div id="recipe" className="w-fullx pt-8 px-2 lg:px-0">
      <div className="title flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-robotoCondensed uppercase">
          Recommendation for u
        </h1>

        <Link
          to={"/meal"}
          className="font-poppins flex items-center gap-2 group "
        >
          <span className="group-hover:text-[#FF9800] transition-all ease-in-out duration-300">
            More
          </span>
          <FaArrowRightLong className="group-hover:text-[#FF9800] group-hover:translate-x-2 transition-all ease-in-out duration-300" />
        </Link>
      </div>
      <Categories />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {recomendation.length === 0
          ? [1, 2, 3, 4].map((_, index) => {
              return <CardLoading key={index} />;
            })
          : recomendation.slice(0, 4).map((rec) => {
              return <Card key={rec.idMeal} rec={rec} />;
            })}
      </div>
    </div>
  );
};

export default Recommendation;

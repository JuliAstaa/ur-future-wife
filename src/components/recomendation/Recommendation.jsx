import React from "react";
import { useSelector } from "react-redux";
import { recommend } from "../../data/dataSlice";
import Card from "../card/Card";

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
          return <Card rec={rec} />;
        })}
      </div>
    </div>
  );
};

export default Recommendation;

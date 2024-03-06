import React, { useState } from "react";
import DynamicNav from "../components/navbar/DynamicNav";
import { useLocation } from "react-router-dom";
import Card from "../components/card/Card";
import { useSelector } from "react-redux";
import { recommend } from "../data/dataSlice";
import Footer from "../components/footer/Footer";

const Meal = () => {
  const location = useLocation();
  const recomendation = useSelector(recommend);
  return (
    <div className="w-full h-full">
      <div className="w-full h-full max-w-5xl mx-auto">
        <DynamicNav path={[{ path: "Meal", url: location.pathname }]} />
        <div className="meals px-2 lg:px-0">
          <h1 className="text-4xl md:text-6xl  font-robotoCondensed font-bold">
            MEALS
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {recomendation.map((rec) => {
              return <Card key={rec.idMeal} rec={rec} />;
            })}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Meal;

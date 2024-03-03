import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mealDetail } from "../libs/api";

const MealDetail = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await mealDetail(idMeal).then((data) => data);
        setMeal(datas.meals[0]);
        console.log(datas.meals[0]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [idMeal]);
  console.log(idMeal);
  console.log(meal);

  return <div className="w-full h-full">{meal?.strMeal}</div>;
};

export default MealDetail;

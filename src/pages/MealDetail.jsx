import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mealDetail } from "../libs/api";
import Footer from "../components/footer/Footer";
import DynamicNav from "../components/navbar/DynamicNav";

const MealDetail = () => {
  const { idMeal } = useParams();
  const [meal, setMeal] = useState();
  const [ingredients, setIngredients] = useState([]);
  const [measures, setMeasures] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await mealDetail(idMeal).then((data) => data);
        setMeal(datas.meals[0]);
        const igr = [];
        const msr = [];
        let i = 0;
        while (i < 20) {
          igr.push(datas.meals[0][`strIngredient${i + 1}`]);
          msr.push(datas.meals[0][`strMeasure${i + 1}`]);
          i++;
        }
        setIngredients(igr);
        setMeasures(msr);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [idMeal]);

  return (
    <div className="w-full h-full">
      <div className="max-w-5xl mx-auto">
        <DynamicNav />
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="img col-span-2 lg:col-span-1">
            <img src={meal?.strMealThumb} alt="" />
          </div>
          <div className="col-span-2 lg:col-span-1 px-2 lg:px-0">
            <div className="title">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-robotoCondensed font-bold">
                {meal?.strMeal}
              </h1>
            </div>
            <div className="ingredients">
              <h3 className="font-semibold font-robotoCondensed text-xl mt-4">
                Ingredients
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {ingredients
                  .filter((item) => item !== "")
                  .map((ingredient, index) => {
                    return (
                      <div
                        className="text-base font-poppins px-2 rounded-sm flex items-center"
                        key={index}
                      >
                        {ingredient}
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="measures px-2 lg:px-0">
            <h3 className="font-semibold font-robotoCondensed text-xl mt-4">
              Measures
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-2">
              {measures
                .filter((item) => item !== "")
                .map((measure, index) => {
                  return (
                    <div
                      className="text-base font-poppins px-2 rounded-sm flex items-center"
                      key={index}
                    >
                      {measure}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        <div className="step-by-step px-2 lg:px-0">
          <h3 className="font-semibold font-robotoCondensed text-xl mt-4">
            Instructions
          </h3>
          <p className="font-poppins">{meal?.strInstructions}</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MealDetail;

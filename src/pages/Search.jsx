import React, { useEffect, useState } from "react";
import { searchedRecipe, setSearchedRecipes } from "../data/dataSlice";
import { useSelector, useDispatch } from "react-redux";
import { searchRecipe } from "./../libs/api";
import DynamicNav from "../components/navbar/DynamicNav";
import Footer from "../components/footer/Footer";
import CardLoading from "../components/loading/CardLoading";
import { useParams, useLocation } from "react-router-dom";
import Card from "./../components/card/Card";

const Search = () => {
  const dispatch = useDispatch();
  const recipes = useSelector(setSearchedRecipes);
  const { keyword } = useParams();
  const location = useLocation();
  console.log(recipes);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datas = await searchRecipe(keyword).then((data) => data);
        dispatch(searchedRecipe(datas.meals));
      } catch (error) {
        console.log(error);
        throw error;
      }
    };
    fetchData();
  }, [keyword]);

  return (
    <div className="w-full h-full">
      <div className="w-full h-full max-w-5xl mx-auto">
        <DynamicNav
          path={[
            { path: "Search", url: "/search" },
            { path: keyword, url: location.pathname },
          ]}
        />
        <div className="meals px-2 lg:px-0">
          <h1 className="text-4xl md:text-6xl  font-robotoCondensed font-bold">
            MEALS
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {recipes === null ? (
              <div className="col-span-2 lg:col-span-4 w-full h-96 grid place-content-center">
                <div className="w-full h-fullgrid place-content-center">
                  <h1 className="font-bold font-poppins text-xl">{`There's no recipe with keyword "${keyword}"`}</h1>
                </div>
              </div>
            ) : recipes.length === 0 ? (
              [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
                return <CardLoading key={index} />;
              })
            ) : (
              recipes.map((rec) => {
                return <Card key={rec.idMeal} rec={rec} />;
              })
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;

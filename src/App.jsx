import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allRecipes, filteredRecipe } from "./libs/api";
import { setAllRecipes } from "./data/dataSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";
import Meal from "./pages/Meal";
import { getSelectedCategory } from "./data/dataSlice";
import Search from "./pages/Search";

const App = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCategory === "All") {
          const recipes = [];
          for (let i = 0; i < 12; i++) {
            const datas = await allRecipes().then((data) => data);
            recipes.push(datas.meals[0]);
          }
          dispatch(setAllRecipes(recipes));
        } else {
          const datas = await filteredRecipe(selectedCategory).then(
            (data) => data
          );
          dispatch(setAllRecipes(datas.meals));
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meal" element={<Meal />}></Route>
        <Route path="/meal/:idMeal" element={<MealDetail />}></Route>
        <Route path="/search" element={<Home />}></Route>
        <Route path="/search/:keyword" element={<Search />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

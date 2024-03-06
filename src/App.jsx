import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allRecipes } from "./libs/api";
import { setAllRecipes } from "./data/dataSlice";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MealDetail from "./pages/MealDetail";
import Meal from "./pages/Meal";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipes = [];
        for (let i = 0; i < 12; i++) {
          const datas = await allRecipes().then((data) => data);
          recipes.push(datas.meals[0]);
        }
        dispatch(setAllRecipes(recipes));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meal" element={<Meal />}></Route>
          <Route path="/meal/:idMeal" element={<MealDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;

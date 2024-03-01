import React, { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import { useDispatch } from "react-redux";
import { allRecipes } from "./libs/api";
import { setAllRecipes } from "./data/dataSlice";
import Hero from "./components/hero/Hero";
import Recommendation from "./components/recomendation/Recommendation";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const recipes = [];
        for (let i = 0; i < 4; i++) {
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
    <div className="">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <Hero />
        <div className="w-full">
          <Recommendation />
        </div>
      </div>
      <About />
      <Footer />
    </div>
  );
};

export default App;

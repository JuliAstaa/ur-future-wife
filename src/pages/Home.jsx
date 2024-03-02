import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Recommendation from "../components/recomendation/Recommendation";
import About from "../components/about/About";
import Footer from "../components/footer/Footer";

const Home = () => {
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

export default Home;

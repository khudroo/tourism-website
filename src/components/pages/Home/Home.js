import React from "react";
import Banner from "../../include/Banner/Banner";
import Contact from "../../include/Contact/Contact";
import Packages from "../../include/Packages/Packages";
import Review from "../../include/Review/Review";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Packages></Packages>
      <Review></Review>
      <Contact></Contact>
    </div>
  );
};

export default Home;

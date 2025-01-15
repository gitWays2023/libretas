import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import AboutUs from "./AboutUs";
import Review from "./Review";
import NewsLetter from "../../utils/NewsLetter";
import Contact from "./Contact";
import { FrequentlyQuestion } from "../../utils/FrequentlyQuestion";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <Review />
      <FrequentlyQuestion />
      <Contact />
      <NewsLetter />
    </>
  );
};

export default Home;

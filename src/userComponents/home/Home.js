import React from "react";
import About from "../about/About";
import Building from "../building/Building";
import Instant from "../instant/Instant";
import Service from "../service/Service";
import Slider from "../slider/Slider";

const Home = () => {
  return (
    <>
      <Slider />
      <About />

      <Service />
      <Instant />
      <Building />
    </>
  );
};

export default Home;

import React from "react";
import Ourvision from "./OurVision/Ourvision";
import Ourclients from "./Ourclients/Ourclients";
import Counter from "./Counter/Counter";
import Ourproduct from "./OurProducts/Ourproduct";
import Testimonial from "./Testimonials/Testimonial";
import Brandvalues from "./BrandValues/Brandvalues";
import Aboutus from "./About/Aboutus";

function Home() {
  return (
    <div>
      <Ourvision />
      <Counter />
      <Aboutus />
      <Ourproduct />
      <Testimonial />
      <Brandvalues />
      <Ourclients />
    </div>
  );
}

export default Home;

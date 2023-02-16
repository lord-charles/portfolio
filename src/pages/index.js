import React, { useState } from "react";
import {
  Header,
  Hero,
  Expertise,
  OtherTech,
  Help,
  Bot,
  Work,
  Experience,
  LatestWrks,
  Slider1,
  PreFooter,
  Footer,
  Model,
} from "components";

const Home = () => {
  const [show, setShow] = useState(true);
  const states = { show, setShow };

  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 overflow-hidden">
      <Header />
      <Hero />
      <Bot states={states} />
      <Expertise />
      <OtherTech />
      <Help />
      <Work />
      <Experience />
      <LatestWrks />
      <Slider1 />
      <PreFooter />
      <Footer />
      <Model states={states} />
    </div>
  );
};

export default Home;

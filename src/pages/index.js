import React from "react";
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
} from "components";

const index = () => {
  return (
    <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 overflow-hidden">
      <Header />
      <Hero />
      <Bot />
      <Expertise />
      <OtherTech />
      <Help />
      <Work />
      <Experience />
      <LatestWrks />
      <Slider1 />
      <PreFooter />
      <Footer />
    </div>
  );
};

export default index;

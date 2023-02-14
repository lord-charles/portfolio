import React from "react";
import { workExp } from "utils/data";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "utils/motion";
const Experience = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="xxxs:top-[150px] s:top-[50px] xxxs:h-[38rem] s:h-[47rem] relative "
    >
      <a className="anchor" id="experience"></a>
      <h1 className="text-center xxxs:text-[30px] s:text-[47px] font-bold  font-serif">
        My work experience
      </h1>
      <div>
        {workExp.map((item, index) => {
          return (
            <div
              className="flex justify-between xxxs:mx-[20px] s:mx-[40px] md:mx-[80px]"
              key={index}
            >
              <div className="flex flex-col xxxs:w-[45%] ">
                <span className="xxxs:text-[18px] s:text-[30px]">
                  {item.place}
                </span>
                <span className="xxxs:text-[12px] s:text-[20px]">
                  {item.tenure}
                </span>
              </div>
              <div className="flex flex-col xxxs:w-[45%]">
                <span className="xxxs:text-[18px] s:text-[27px]">
                  {item.role}
                </span>
                <span className="xxxs:text-[13px] s:text-[20px]">
                  {item.detail}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {/* two dots */}
      <motion.div
        variants={fadeIn("down", "tween", 0.5, 1.0)}
        className="w-[10px] h-[10px] s:w-[15px] s:h-[15px] rounded-full absolute bg-green-500 md:top-[4.3rem] s:top-[3.5rem] xxxs:top-[5vh] transform -translate-x-1/2 left-[49%] md:left-[49.63%]"
      />
      <motion.div
        variants={fadeIn("up", "slideIn", 0.5, 2.5)}
        className="xxxs:h-[61vh] s:h-[33.5rem] md:h-[25rem] absolute transform -translate-x-1/2 left-[50%] w-[2px] xxxs:top-12 s:top-[4.5rem] md:top-[5.2rem] border border-dashed"
      />

      <motion.div
        variants={fadeIn("up", "tween", 1.0, 2.0)}
        className="w-[10px] h-[10px] s:w-[15px] s:h-[15px] rounded-full absolute bg-pink-500 md:top-[16rem] s:top-[23rem]  xxxs:top-[66vh]  transform -translate-x-1/2 left-[49%] md:left-[49.63%]"
      />
      <motion.div
        variants={fadeIn("up", "tween", 1.0, 3.5)}
        className="w-[10px] h-[10px] s:w-[15px] s:h-[15px] rounded-full absolute bg-yellow-500 md:top-[30rem] s:top-[38rem]  xxxs:top-[33vh]  transform -translate-x-1/2 left-[49%] md:left-[49.63%]"
      />
    </motion.div>
  );
};

export default Experience;

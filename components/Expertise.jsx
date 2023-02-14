import Image from "next/image";
import React from "react";
import { projectExperience, projectTechUsed } from "utils/data";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "utils/motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Expertise = () => {
  const [visibility, setVisibility] = React.useState(false);
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative md:top-[25px] s:top-[100px] xxxs:top-[90px] h-fit ] rounded-2xl flex md:justify-evenly s:justify-evenly xxxs:justify-between mx-1 xxxs:pb-5"
    >
      <a className="anchor" id="services"></a>

      <div className="absolute md:left-[44vw] xxxs:left-[31vw] s:left-[35vw] xxxs:text-[20px] s:text-[35px] md:text-[24px] font-serif font-bold xxxs:top-[9px] s:top-[-4px] ">
        Main Technologies
      </div>
      <div
        className="md:w-[40vw] s:w-[40vw] xxxs:w-[43vw] h-fit  bg-white rounded-2xl relative top-[2.5rem] xxxs:left-[15px] 
      "
      >
        {projectExperience.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("right", "tween", 1.0, 1.7)}
              key={index}
            >
              <div className="flex justify-between items-center md:mx-[40px] s:mx-[15px] xxxs:mx-[4.5px] mt-[10px] rounded-lg mb-[10px] xxxs:h-[11vh] md:h-[12.5vh] relative hover:shadow-lg transition-all bg-gradient-to-r from-teal-300 via-gray-300 to-blue-300">
                <div
                  className="absolute h-[10px] w-[10px] rounded-full p-0.5 md:top-2  md:right-8 xxxs:top-2 xxxs:right-4"
                  style={{ background: item.bg }}
                />
                <div
                  className="absolute h-[10px] w-[10px] rounded-full p-0.5 md:top-2  md:right-12 xxxs:top-2 xxxs:right-8"
                  style={{ background: item.bg }}
                />
                <div
                  className="absolute h-[10px] w-[10px] rounded-full p-0.5 md:top-[40px] md:left-5 xxxs:top-2 xxxs:right-8"
                  style={{ background: item.bg }}
                />
                <div
                  style={{ background: item.bg }}
                  className="rounded-full md:p-4 xxxs:p-2 s:p-3 relative md:left-[60px] s:left-[15px]"
                >
                  {item.icon}
                </div>
                <div className="flex flex-col relative md:right-10 ">
                  <span className="md:text-xl s:text-[23px] xxxs:text-sm font-bold">
                    {item.name}
                  </span>

                  <span className="md:text-sm s:text-[20px] xxxs:text-xs s:mt-3 font-bold md:text-[18px] justify-center flex gap-x-1">
                    projects
                    <VisibilitySensor
                      onChange={(isVisible) => setVisibility(isVisible)}
                    >
                      <CountUp
                        start={0}
                        end={item.projects}
                        duration={9}
                        separator=","
                        delay={1.5}
                        redraw={visibility}
                        className="text-red-500 font-bold md:text-[23px] ml-1"
                      />
                    </VisibilitySensor>
                    +
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* divide */}
      <div className="items-center flex flex-col  justify-center">
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1.0)}
          className="absolute md:h-[68vh] s:h-[58vh] xxxs:h-[60vh]  w-[2px] top-[3rem] border border-dashed rounded-lg"
        />
        <motion.svg
          variants={fadeIn("right", "tween", 0.5, 1.0)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-6 s:h-[30px] s:w-[30px] md:w-[30px] md:h-[30px] absolute md:top-[17.2vh] s:top-[14vh] xxxs:top-[16.5vh] text-yellow-900 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </motion.svg>
        <motion.svg
          variants={fadeIn("right", "tween", 0.5, 3.7)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-6 s:h-[30px] s:w-[30px] md:w-[30px] md:h-[30px] absolute md:top-[58.5vh] s:top-[49vh] xxxs:top-[52.5vh] text-pink-500 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </motion.svg>
        <motion.svg
          variants={fadeIn("right", "tween", 0.5, 1.0)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="xxxs:w-4 md:h-[40px] md:w-[40px]  s:h-[30px] s:w-[30px]  relative md:right-[15px] s:right-[14px] xxxs:right-[7px] xxxs:top-[-2.5rem] md:top-[-2vh] text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </motion.svg>
        <motion.svg
          variants={fadeIn("right", "tween", 0.5, 3.7)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="xxxs:w-4 md:h-[40px] md:w-[40px] s:h-[30px] s:w-[30px] relative md:right-[15px] s:right-[14px] xxxs:right-[7px] md:top-[24vh] xxxs:top-[10.5rem] s:top-[19vh] text-pink-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </motion.svg>
        <motion.svg
          variants={fadeIn("left", "tween", 0.5, 1.0)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="xxxs:w-4 xxxs:h-4 md:h-[40px] s:h-[40px] s:w-[30px] md:w-[40px] relative  md:top-[-25vh] xxxs:top-[-11.2rem] s:top-[-20vh] text-pink-500 md:left-[15px] xxxs:left-[4px]  s:left-[14px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </motion.svg>
        <motion.svg
          variants={fadeIn("left", "tween", 0.5, 3.7)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="xxxs:w-4 md:h-[40px] md:w-[40px] s:h-[40px] s:w-[30px] relative  md:top-[8.5vh] s:top-[10vh] xxxs:top-[6rem] text-green-500 md:left-[15px] xxxs:left-[4px]  s:left-[14px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </motion.svg>

        {/* two dots */}
        <motion.div
          variants={fadeIn("down", "tween", 0.5, 1.0)}
          className="w-[10px] h-[10px] rounded-full absolute bg-green-500 md:top-[5vh] s:top-[3vh] xxxs:top-[5vh]"
        />
        <motion.div
          variants={fadeIn("up", "tween", 1.0, 5.0)}
          className="w-[10px] h-[10px] rounded-full absolute bg-pink-500 md:top-[73vh] s:top-[61vh]  xxxs:top-[65vh]"
        />
      </div>
      <div
        className="md:w-[40vw] s:w-[40vw] h-fit xxxs:w-[43vw] bg-white rounded-2xl relative top-[2.5rem] xxxs:right-[15px]
      "
      >
        {projectTechUsed.map((item, index) => {
          return (
            <motion.div
              variants={fadeIn("left", "tween", 1.0, 1.9)}
              key={index}
            >
              <div className="flex justify-between items-center md:mx-[40px] s:mx-[15px] xxxs:mx-[4.5px] mt-[10px] rounded-lg mb-[10px] xxxs:h-[11vh] md:h-[12.5vh] relative hover:shadow-lg transition-all bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-500 to-sky-600">
                <div
                  className="absolute h-[10px] w-[10px] rounded-full p-0.5 md:top-2  md:right-8 xxxs:top-2 xxxs:right-4"
                  style={{ background: item.bg }}
                />
                <div
                  className="absolute h-[10px] w-[10px] rounded-full p-0.5 md:top-2  md:right-12 xxxs:top-2 xxxs:right-8"
                  style={{ background: item.bg }}
                />
                <div
                  className="absolute h-[10px] w-[10px] rounded-full p-0.5 md:top-[40px] md:left-5 xxxs:top-2 xxxs:right-8"
                  style={{ background: item.bg }}
                />
                <div className="rounded-full md:p-0 xxxs:p-2 relative md:left-[60px]">
                  <Image
                    src={item.image}
                    width={50}
                    height={100}
                    alt="image"
                    className="s:w-[80px] md:w-[60px]"
                  />
                </div>
                <div className="flex flex-col relative md:right-10">
                  <span className="md:text-xl xxxs:text-sm font-bold s:text-[23px]">
                    {item.name}
                  </span>

                  <span className="md:text-sm xxxs:text-xs s:text-[20px] s:mt-3  md:text-[18px] ">
                    {item.projects}
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Expertise;

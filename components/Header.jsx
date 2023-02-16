import React, { useState } from "react";
import { motion } from "framer-motion";
import { useWindowSize } from "react-use";
import {
  aboutmeVariants,
  contactVariants,
  ExperienceVariants,
  logoVariants,
  portfolioVariants,
  ServicesVariants,
  testimonialsVariants,
} from "utils/motion";
import useHeaderShadow from "utils/hooks/useHeaderShadow";
import Image from "next/image";
import useBackground from "utils/hooks/useBackground";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const headerShadow = useHeaderShadow(true);
  const setBackground = useBackground(true);
  const { width } = useWindowSize();
  return (
    <div
      className="position fixed top-0 left-0 right-0   md:h-[123px] xxxs:h-[92px] s:h-[120px] z-[999]"
      style={{
        boxShadow: headerShadow,
        backgroundImage: setBackground,
      }}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex justify-between md:mt-[50px] xxs:mx-5  mt-[30px] pb-6">
          {/* logo  */}
          <motion.div
            className="font-serif text-[13px] xxxs:text-[19px] md:ml-[50px] items-center justify-center flex flex-col absolute md:mt-[-10px]"
            variants={logoVariants}
          >
            <span>
              <Image
                src={"/LOGO5.png"}
                width={100}
                height={100}
                alt="image"
                className=" w-[100px] xxxs:w-[70px] s:w-[110px] animate-pulse"
              />
            </span>
            <span className="flex items-center">
              <span className="w-[5px] h-[5px]  bg-purple-600 rounded-full mr-1 animate-ping" />
              <span className="xxxs:text-[14px] s:text-[20px] md:text-[20px]">
                Charles
              </span>
            </span>
          </motion.div>

          {/* bars */}
          <div className="md:hidden ">
            {!isClicked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 s:w-[40px] s:h-[40px] absolute top-8 right-2"
                onClick={() => setIsClicked(true)}
              >
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm7 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 absolute top-8 right-2"
                onClick={() => setIsClicked(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </div>
        </div>
        {/* links */}
        <div
          className={` ${
            !isClicked
              ? `xxxs:left-[100vw]`
              : `xxxs:left-[54vw] xxxs:gradientCst s:left-[70vw] `
          }  font-serif md:text-[16px] s:text-[24px] transition-all xxxs:duration-700 top-[15px] s:w-[240px]  font-bold  md:mNavLinks xxxs:smNavLinks `}
        >
          <motion.div
            variants={
              width > 768
                ? portfolioVariants
                : {
                    open: portfolioVariants.hidden,
                    closed: portfolioVariants.show,
                  }
            }
            initial={width > 768 ? "hidden" : isClicked ? "open" : "closed"}
            animate={isClicked ? "closed" : "open"}
            whileInView="show"
            className="mr-2 xxxs:block mb-3 md:block xxxs:ml-[-20px] md:mr-[30px]  hover:text-green-500
            "
            onClick={() => setIsClicked(false)}
          >
            <a href="#portfolio">PORTFOLIO</a>
          </motion.div>
          <motion.div
            variants={
              width > 768
                ? ServicesVariants
                : {
                    open: ServicesVariants.hidden,
                    closed: ServicesVariants.show,
                  }
            }
            initial={width > 768 ? "hidden" : isClicked ? "open" : "closed"}
            animate={isClicked ? "closed" : "open"}
            whileInView="show"
            className=" md:block xxxs:block mr-2 mb-2 xxxs:ml-[-20px] hover:text-green-500 "
            onClick={() => setIsClicked(false)}
          >
            <a href="#services">SERVICES</a>
          </motion.div>
          <motion.div
            variants={
              width > 768
                ? ExperienceVariants
                : {
                    open: ExperienceVariants.hidden,
                    closed: ExperienceVariants.show,
                  }
            }
            initial={width > 768 ? "hidden" : isClicked ? "open" : "closed"}
            animate={isClicked ? "closed" : "open"}
            whileInView="show"
            className="mr-2 xxxs:block mb-3 md:block  xxxs:ml-[-20px] md:ml-[0px]  hover:text-green-500"
            onClick={() => setIsClicked(false)}
          >
            <a href="#experience">EXPERIENCE</a>
          </motion.div>
          <motion.div
            variants={
              width > 768
                ? testimonialsVariants
                : {
                    open: testimonialsVariants.hidden,
                    closed: testimonialsVariants.show,
                  }
            }
            initial={width > 768 ? "hidden" : isClicked ? "open" : "closed"}
            animate={isClicked ? "closed" : "open"}
            whileInView="show"
            className="mr-2 xxxs:block mb-3 md:block xxxs:ml-[-20px] md:ml-[0px]  hover:text-green-500"
            onClick={() => setIsClicked(false)}
          >
            <a href="#testimonials">TESTIMONIALS</a>
          </motion.div>
          <motion.div
            variants={
              width > 768
                ? aboutmeVariants
                : {
                    open: aboutmeVariants.hidden,
                    closed: aboutmeVariants.show,
                  }
            }
            initial={width > 768 ? "hidden" : isClicked ? "open" : "closed"}
            animate={isClicked ? "closed" : "open"}
            whileInView="show"
            className="mr-2 xxxs:block mb-3 md:block xxxs:ml-[-20px] md:ml-[0px]  hover:text-green-500"
            onClick={() => setIsClicked(false)}
          >
            <a href="#about">ABOUT ME</a>
          </motion.div>
          <motion.div
            variants={contactVariants}
            className=" gap-2 mr-2  xxxs:block mb-3 md:flex  xxxs:ml-[-20px] md:ml-[0px]  hover:text-green-500"
            onClick={() => setIsClicked(false)}
          >
            <a href="#contact" className="md:flex md:space-x-2">
              <div className="hidden md:block">+254 740315545</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-2 xxxs:mb-3 md:mb-0 "
              >
                <path d="M3.5 2A1.5 1.5 0 002 3.5V5c0 1.149.15 2.263.43 3.326a13.022 13.022 0 009.244 9.244c1.063.28 2.177.43 3.326.43h1.5a1.5 1.5 0 001.5-1.5v-1.148a1.5 1.5 0 00-1.175-1.465l-3.223-.716a1.5 1.5 0 00-1.767 1.052l-.267.933c-.117.41-.555.643-.95.48a11.542 11.542 0 01-6.254-6.254c-.163-.395.07-.833.48-.95l.933-.267a1.5 1.5 0 001.052-1.767l-.716-3.223A1.5 1.5 0 004.648 2H3.5zM16.72 2.22a.75.75 0 111.06 1.06L14.56 6.5h2.69a.75.75 0 010 1.5h-4.5a.75.75 0 01-.75-.75v-4.5a.75.75 0 011.5 0v2.69l3.22-3.22z" />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;

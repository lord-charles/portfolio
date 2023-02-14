import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "utils/motion";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { TypeAnimation } from "react-type-animation";
import useOpacity from "utils/hooks/opacity";

const Hero = () => {
  const [visibility, setVisibility] = React.useState(false);
  const Scale = useOpacity(true);

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative md:top-[115px] xxxs:top-[70px] xxxs:pt-10 s:pt-[70px] md:pt-5 md:h-[100vh] xxxs:h-[95vh] s:h-[95vh] rounded-b-2xl  overflow-hidden"
    >
      <a className="anchor" id="portfolio"></a>
      <div className="md:mx-[150px] s:7x-[60px] xxxs:mx-[20px]">
        <div className="flex justify-between">
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="text-black xxxs:text-[25px] s:text-[45px] m:text-35px font-bold transition-all duration-[2.5s]"
          >
            Hi, There,
            <br /> I&apos;m Charles
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="xxxs:text-[12px] first md:text-[20px] s:text-[25px] xxxs:ml-4 font-serif transition-all duration-[1s]"
            style={{ scale: Scale }}
          >
            <span className="flex items-center">
              <p>As a,</p>
              <TypeAnimation
                sequence={[
                  "Designer",
                  2000,
                  "Prototyper",
                  2000,
                  "Programmer",
                  2000,
                ]}
                //  Replacing previous Text
                style={{ fontSize: "1.2em" }}
                speed={20}
                deletionSpeed={20}
                wrapper="h4"
                repeat={Infinity}
                className="relative left-1"
              />
              ,
            </span>
            I have a passion for creating elegantly <br /> simple and
            aesthetically pleasing designs. <br /> My job brings me immense joy.
          </motion.span>
        </div>

        <div className="flex justify-center relative xxxs:top-[70px] s:top-[95px] md:top-[10px]">
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1.3)}
            className="absolute flex"
          >
            <Image
              src={"/splash.png"}
              width={150}
              height={150}
              className="md:w-[200px] s:w-[370px]"
              alt="image"
            />
          </motion.div>
          <motion.div
            variants={slideIn("up", "tween", 0.5, 1.3)}
            className="absolute flex"
          >
            <Image
              src={"/nigga.png"}
              width={150}
              height={220}
              quality={100}
              className=" md:w-[330px] s:w-[540px] xxxs:w-[280px] rounded-lg"
              loading="eager"
              alt="image"
            />
            <span className="absolute md:top-[21.5rem] s:top-[34.5rem] md:left-[30px] xxxs:left-[15px] s:left-[70px] xxxs:top-[18.5rem] s:text-[25px] xxxs:text-[15px] md:text-[18px] text-black">
              <Link href={"#mwanikicharles226@gmail.com"}>
                mwanikicharles226@gmail.com
              </Link>
            </span>
          </motion.div>
        </div>
        <div className="flex relative md:top-[350px] s:top-[750px] justify-between items-center xxxs:top-[470px]">
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className="flex items-center"
          >
            <span className="xxxs:text-[45px] s:text-[70px] font-bold p-1">
              <VisibilitySensor
                onChange={(isVisible) => setVisibility(isVisible)}
              >
                <CountUp
                  start={0}
                  end={4}
                  duration={2}
                  separator=","
                  delay={1}
                  redraw={visibility}
                />
              </VisibilitySensor>
            </span>
            <span className="ml-[5px] flex flex-col s:text-[24px]">
              <span>Years</span>
              <span>of</span>
              <span>Experience</span>
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className="items-center  flex flex-col"
          >
            <Image
              src={"/cert.png"}
              width={100}
              height={100}
              className="md:w-[150px] xxxs:w-[80px] s:w-[130px] animate-pulse"
              alt="image"
            />
            <span className="xxxs:text-[15px] md:text-[20px] s:text-[25px] flex flex-col items-center font-bold">
              <span>CERTIFIED PROFESSIONAL </span> <span>SOFTWARE DEV</span>
            </span>
          </motion.div>
        </div>
      </div>
      <div className="absolute xxxs:top-[92%] md:top-[81%] s:top-[94%]  left-[50%] transform -translate-y-1/2 -translate-x-1/2 pulseCtm">
        <Image
          src={"/downarrow2.png"}
          width={100}
          height={100}
          alt="image"
          className=" xxxs:w-[60px] xxxs:h-[60px] md:w-[80px] md:h-[80px] s:w-[99px] s:h-[99px]"
        />
      </div>
    </motion.div>
  );
};

export default Hero;

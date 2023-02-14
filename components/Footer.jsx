import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div
      className=" relative mt-[100px] xxxs:mt-[280px] rounded-tl-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-300 via-green-600 to-purple-400
   flex xxxs:flex-col md:flex-row justify-center md:h-[28vh]
    "
    >
      <div className="relative h-[24vh] w-[100vw]">
        <div className="absolute top-[40px] left-[40px] s:left-[60px] s:top-[60px] animate-spin">
          <Image
            src={"/flower1.png"}
            width={100}
            height={100}
            alt="image"
            className="w-[40px] s:w-[60px]"
          />
        </div>
        <div className="absolute right-2 top-1">
          <div className="text-center font-bold font-serif md:text-[23px] s:text-[34px]">
            <h1>Get in touch</h1>
            <h1>Let&apos;s work together</h1>
          </div>
        </div>

        <div className="relative md:top-[50px] xxxs:top-[40px] s:top-[80px] mt-4">
          <span className="xxxs:text-[10px] xxxs:flex xxxs:ml-[100px] md:text-[15px] md:ml-[900px] s:text-[20px] text-right p-1 ">
            I &apos;m available to help you with your website or mobile app
            idea, or provide design advice in a respectful and professional
            manner. Let&apos;s work together to create something exceptional -
            contact me soon as my schedule fills up quickly.
          </span>
          <div className="flex items-center  space-x-3 relative xxxs:left-[20px] md:left-[200px] md:bottom-[30px]">
            <div className="relative rounded-full border border-purple-500 p-2 ">
              <Image
                src={"/nigga.png"}
                width={100}
                height={100}
                className="w-[30px] h-[30px] s:w-[50px] s:h-[50px] "
                alt="image"
              />
              <div className="w-[6px] h-[6px] bg-pink-600 absolute rounded-full bottom-0 right-0 z-[999] animate-ping" />
            </div>

            <span className="s:text-[25px] xxxs:text-[10px] md:text-[17px] flex">
              <h1>Reply time:</h1> <h2>within~30min</h2>
            </span>
          </div>
        </div>
      </div>
      <div className="xxxs:text-[12px] md:text-[16px] s:text-[19px] opacity-40 text-center absolute transform -translate-x-[50%] left-[50%] bottom-0 pulseCtm">
        <span>© {new Date().getFullYear()} All rights reserved.</span>{" "}
        <span>-Designed & Coded by Charles</span>
      </div>

      <div className="absolute xxxs:right-[40px] md:right-[60px] s:right-[80px] bottom-1 flex xxxs:text-[14px] md:text-[20px] s:text-[24px] font-serif items-center">
        <h4>Say hi</h4>
        <Image
          src={"/arrowc.png"}
          height={100}
          width={100}
          alt="image"
          className="xxxs:w-[25px] md:w-[35px] s:w-[40px]"
        />
      </div>
    </div>
  );
};

export default Footer;

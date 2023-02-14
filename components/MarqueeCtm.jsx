import Image from "next/image";
import React from "react";
import { OtherTechUsed, OtherTechUsedRv } from "utils/data";
export const MarqueeCtm = () => {
  return (
    <div>
      {OtherTechUsed.map((item, index) => {
        return (
          <div
            key={index}
            className="xxxs:w-[40vw] mb-3 xxxs:h-[15vh] md:w-[13vw] s:w-[25vw] rounded-lg xxxs:mx-auto  flex flex-col justify-center items-center relative top-[-10vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-400 to-sky-600 "
          >
            <Image
              src={item.image}
              height={100}
              width={100}
              alt="image"
              className="w-[80px] h-[80px] s:w-[100px] s:h-[100px] md:h-[75px] md:w-[75px] mb-3"
            />
            <div className="s:text-[23px] md:text-[19px]">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export const MarqueeCtm2 = () => {
  return (
    <div>
      {OtherTechUsedRv.map((item, index) => {
        return (
          <div
            key={index}
            className="xxxs:w-[40vw] mb-3 xxxs:h-[15vh] md:w-[13vw] s:w-[25vw] rounded-lg xxxs:mx-auto  flex flex-col justify-center items-center relative top-[-10vh] bg-gradient-to-r from-purple-400 to-yellow-400"
          >
            <Image
              src={item.image}
              height={100}
              width={100}
              alt="image"
              className="w-[80px] h-[80px] s:w-[100px] s:h-[100px] md:h-[75px] md:w-[75px] mb-3"
            />
            <div className="s:text-[23px] md:text-[19px]">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};
export const MarqueeCtm3 = () => {
  return (
    <div>
      {OtherTechUsed.map((item, index) => {
        return (
          <div
            key={index}
            className="xxxs:w-[40vw] mb-3 xxxs:h-[15vh] md:w-[13vw] s:w-[25vw] rounded-lg xxxs:mx-auto  flex flex-col justify-center items-center relative top-[-10vh] ] bg-gray-300 rounded-lg xxxs:mx-auto  flex flex-col justify-center items-center relative top-[-10vh] bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-400 to-sky-600 "
          >
            <Image
              src={item.image}
              height={100}
              width={100}
              alt="image"
              className="w-[80px] h-[80px] s:w-[100px] s:h-[100px] md:h-[75px] md:w-[75px] mb-3"
            />
            <div className="s:text-[23px] md:text-[19px]">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export const MarqueeCtm4 = () => {
  return (
    <div>
      {OtherTechUsedRv.map((item, index) => {
        return (
          <div
            key={index}
            className="xxxs:w-[40vw] mb-3 xxxs:h-[15vh] md:w-[13vw] s:w-[25vw] rounded-lg xxxs:mx-auto  flex flex-col justify-center items-center relative top-[-10vh] bg-gradient-to-r from-purple-400 to-yellow-400"
          >
            <Image
              src={item.image}
              height={100}
              width={100}
              alt="image"
              className="w-[80px] h-[80px] s:w-[100px] s:h-[100px] md:h-[75px] md:w-[75px] mb-3"
            />
            <div className="s:text-[23px] md:text-[19px]">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

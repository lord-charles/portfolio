import React from "react";
import {
  MarqueeCtm2,
  MarqueeCtm,
  MarqueeCtm3,
  MarqueeCtm4,
} from "./MarqueeCtm";
const OtherTech = () => {
  return (
    <div className="relative xxxs:h-[55vh] s:h-[53vh] md:h-[58vh] md:top-[vh] s:top-[14.5vh] xxxs:top-[18.5vh]  mx-1">
      <div className="flex justify-center xxxs:text-[23px] s:text-[28px] font-bold mb-[10px]">
        Tertiary Technologies
      </div>
      <div className=" justify-evenly grid mygrid xxxs:cols-2 h-[47vh] w-[98vw] overflow-hidden rounded-[30px] p-2">
        <div className="marquee-item-vertical relative top-[-10vh]">
          <MarqueeCtm />
        </div>
        <div className="marquee-item-reverse-vertical relative top-[-20vh]">
          <MarqueeCtm2 />
        </div>
        <div className="marquee-item-vertical relative top-[-15vh]">
          <MarqueeCtm3 />
        </div>
        <div className="marquee-item-reverse-vertical relative top-[-10vh]">
          <MarqueeCtm4 />
        </div>
      </div>
    </div>
  );
};

export default OtherTech;

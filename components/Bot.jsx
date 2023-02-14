import Image from "next/image";
import React from "react";

const Bot = () => {
  return (
    <div className="fixed bottom-[1vh] right-1 animate-bounce rounded-full z-[999]">
      <Image
        src={"/message.png"}
        height={100}
        width={100}
        alt="image"
        className="s:w-[60px] xxxs:w-[40px] cursor-pointer"
      />
    </div>
  );
};

export default Bot;

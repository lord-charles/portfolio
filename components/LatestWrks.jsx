import Image from "next/image";
import React, { useState } from "react";

const LatestWrks = () => {
  const [video1, setVideo1] = useState(true);
  const [video2, setVideo2] = useState(true);
  const [video3, setVideo3] = useState(true);
  const [video4, setVideo4] = useState(true);
  const [video5, setVideo5] = useState(true);
  const [video6, setVideo6] = useState(true);

  console.log(video1);
  return (
    <div className="relative xxxs:h-fit xxxs:top-[5rem] md:top-[1rem] md:w-[90vw] md:left-[5vw] ">
      <h1 className="xxxs:text-[27px] md:text-[38px] s:text-[39px] font-serif font-bold text-center">
        My Latest Projects
      </h1>
      <h2 className="xxxs:text-center md:text-[20px] s:text-[23px] underline">
        Perfect solution for digital experience
      </h2>
      <div className="items-center s:w-[100vw] md:w-[95vw] flex  flex-col space-y-[15px] mt-[20px] md:grid md:mygrid2 md:mx-[30px] s:grid s:mygrid2 s:mx-[30px] sm:mx-[60px] mb-[100px] ">
        {/* post 1 */}
        <div className="relative overflow-hidden w-[350px]  h-[270px] z">
          <div
            className={` ${
              !video1 ? ` top-[70vh] ` : `bottom-5`
            } absolute  flex space-x-9 text-pink-500 font-bold transform -translate-x-1/2 left-[50%]  w-[200px]`}
          >
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              Demo app
            </div>
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              git repo
            </div>
          </div>
          <video
            autoPlay
            loop
            className={`w-[350px] rounded-xl h-[270px] `}
            onClick={() => {
              setVideo1(!video1);
            }}
          >
            <source src={"/video5.mp4"} type="video/mp4" />
          </video>
        </div>

        {/* post 2 */}
        <div className="relative overflow-hidden w-[350px]  h-[270px]">
          <div
            className={` ${
              !video2 ? ` top-[70vh] ` : `bottom-5`
            } absolute  flex space-x-9 text-pink-500 font-bold transform -translate-x-1/2 left-[50%]  w-[200px]`}
          >
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              Demo app
            </div>
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              git repo
            </div>
          </div>
          <video
            autoPlay
            loop
            className="w-[350px] rounded-xl  h-[270px]"
            onClick={() => {
              setVideo2(!video2);
            }}
          >
            <source src={"/video2.mp4"} type="video/mp4" />
          </video>
        </div>
        {/* post 3 */}
        <div className="relative overflow-hidden w-[350px]  h-[270px]">
          <div
            className={` ${
              !video3 ? ` top-[70vh] ` : `bottom-5`
            } absolute  flex space-x-9 text-pink-500 font-bold transform -translate-x-1/2 left-[50%]  w-[200px]`}
          >
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              Demo app
            </div>
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              git repo
            </div>
          </div>
          <video
            autoPlay
            loop
            className="w-[350px] rounded-xl  h-[270px]"
            onClick={() => {
              setVideo3(!video3);
            }}
          >
            <source src={"/video3.mp4"} type="video/mp4" />
          </video>
        </div>

        {/* post 4 */}
        <div className="relative overflow-hidden w-[350px]  h-[270px]">
          <div
            className={` ${
              !video4 ? ` top-[70vh] ` : `bottom-5`
            } absolute  flex space-x-9 text-pink-500 font-bold transform -translate-x-1/2 left-[50%]  w-[200px]`}
          >
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              Demo app
            </div>
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              git repo
            </div>
          </div>
          <video
            autoPlay
            loop
            className="w-[350px] rounded-xl  h-[270px]"
            onClick={() => {
              setVideo4(!video4);
            }}
          >
            <source src={"/video4.mp4"} type="video/mp4" />
          </video>
        </div>

        {/* post5 */}
        <div className="relative overflow-hidden w-[350px]  h-[270px]">
          <div
            className={` ${
              !video5 ? ` top-[70vh] ` : `bottom-5`
            } absolute  flex space-x-9 text-pink-500 font-bold transform -translate-x-1/2 left-[50%]  w-[200px]`}
          >
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              Demo app
            </div>
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              git repo
            </div>
          </div>
          <Image
            src={"/showCase1.png"}
            height={150}
            width={250}
            alt="image"
            className="w-[345px] h-[270px]"
            onClick={() => {
              setVideo5(!video5);
            }}
          />
        </div>

        {/* post 5 */}
        <div className="relative overflow-hidden w-[350px]  h-[270px]">
          <div
            className={` ${
              !video6 ? ` top-[70vh] ` : `bottom-5`
            } absolute  flex space-x-9 text-pink-500 font-bold transform -translate-x-1/2 left-[50%]  w-[200px]`}
          >
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              Demo app
            </div>
            <div className="border p-1 border-green-500 hover:bg-gradient-to-r from-green-300 via-blue-500 to-purple-600  cursor-pointer ">
              git repo
            </div>
          </div>
          <Image
            src={"/showCase2.png"}
            height={150}
            width={250}
            alt="image"
            className="w-[345px] h-[270px]"
            onClick={() => {
              setVideo6(!video6);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default LatestWrks;

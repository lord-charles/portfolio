import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "utils/motion";

const Help = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <a className="anchor" id="about"></a>
      <div className=" relative s:top-[17vh] xxxs:top-[21vh] md:top-[15vh] mb-[200px]">
        <div className="text-center xxxs:text-[25px] s:text-[35px] font-bold font-serif">
          About Me
        </div>
        {/* container */}
        <div
          className=" relative xxxs:mx-4 s:h-[42rem]  xxxs:h-[49rem]  md:h-[32rem] md:mx-[75px]
          bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-orange-900 via-amber-100 to-orange-900  rounded-lg animate-pulse 
      "
        >
          {/* section A */}
          <div className="text-center font-serif relative top-[40px] xxxs:text-[15px] md:text-[17px] s:text-[23px] xxxs:mx-[5px] s:mx-[20px]">
            <div className="relative bounceupCtm">
              <div className="absolute xxxs:h-[6px] xxxs:w-[6px] md:h-0 bg-red-400 rounded-full top-2 " />
              <span className="xxxs:mx-1">
                As a full-stack developer and skilled UI/UX designer, I bring
                innovative ideas to life. I am committed to transforming
                successful business.
              </span>
            </div>
            <div className="relative">
              <div className="absolute xxxs:h-[6px] xxxs:w-[6px] md:h-0 bg-red-400 rounded-full top-2" />
              <span className="xxxs:mx-1">
                My goal is to exceed your expectations and help bring your
                dreams to fruition with my unique blend of technical expertise
                and creative flair.
              </span>
            </div>
            <div className="relative bouncedownCtm">
              <div className="absolute xxxs:h-[6px] xxxs:w-[6px] md:h-0 bg-red-400 rounded-full top-2" />
              <span className="xxxs:mx-1">
                I humbly offer my services to bring your ideas to the <br />{" "}
                next level.
              </span>
            </div>
          </div>
          <div className="md:flex s:flex s:mx-[5px] s:space-x-2 s:items-center md:mx-[0px] justify-evenly">
            {/* section B */}
            <motion.div
              variants={fadeIn("right", "tween", 2.0, 3.7)}
              className="xxxs:h-[40%] xxxs:w-[90%] xxxs:mt-[50px] s:mt-[70px] md:w-[35%]  text-center font-serif"
            >
              <div className="text-transparent md:text-[24px] xxxs:text-[24px] s:text-[32px] bg-clip-text bg-gradient-to-r from-blue-500 to-pink-600 flex items-center justify-center space-x-1">
                <span>Profile</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-blue-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
              </div>
              <div className=" border font-bold">
                <div className="xxxs:ml-[15px] xxxs:mt-[20px] xxxs:text-[15px] md:text-[17px] s:text-[19px]">
                  <span className="flex space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mb-2 text-red-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                      />
                    </svg>
                    <h1>Charles Mwaniki</h1>
                  </span>
                  <span className="flex space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mb-2 text-red-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                    <h1>+254 740315545</h1>
                  </span>
                  <span className="flex space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mb-2 text-red-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 3.75H6.912a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H15M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859M12 3v8.25m0 0l-3-3m3 3l3-3"
                      />
                    </svg>
                    <h1>mwanikicharles226@gmail.com</h1>
                  </span>
                  <span className="flex space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 mb-2 text-red-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    <span>Egerton-nakuru, Kenya</span>
                  </span>
                  <span className="flex space-x-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-pink-400"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
                      />
                    </svg>
                    <span>
                      Freelancer (Independent contractor) & full-time programmer
                    </span>
                  </span>
                </div>
              </div>
            </motion.div>
            {/* section C*/}
            <motion.div
              variants={fadeIn("left", "tween", 1.0, 6.7)}
              className="xxxs:h-[40%] xxxs:w-[90%] md:w-[35%] xxxs:mt-[10px] mx-auto text-center font-serif s:mt-[50px]"
            >
              <div
                className="text-transparent md:text-[24px] xxxs:text-[24px] s:text-[29px] bg-clip-text bg-gradient-to-r from-blue-500 
to-pink-600 flex items-center justify-center"
              >
                What do i help?
              </div>
              <div className="border border-r-emerald-400 border-l-emerald-400 border-t-blue-300 border-b-pink-300 xxxs:text-[15px] md:text-[17px] s:text-[17px] md:p-2">
                <div>
                  As a skilled programmer, my aim is to assist clients in
                  finding solutions and solving problems through my expertise in
                  process design for creating innovative digital products. I am
                  committed to delivering tailored and efficient support, and I
                  firmly believe that my knowledge and approach can help bring
                  my clients&apos; visions to life.
                </div>
              </div>
            </motion.div>
          </div>
          {/* section D  */}
          <motion.div
            variants={fadeIn("up", "tween", 3.0, 6.7)}
            className="relative top-[5vh] flex justify-evenly"
          >
            <div className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg p-[5px] flex items-center cursor-pointer h-[60px]">
              <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-sm p-1 text-white xxxs:text-[10px] s:text-[20px]">
                Get in touch
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-3 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </div>
            <div className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg p-[5px] flex items-center cursor-pointer h-[60px]">
              <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-sm p-1 text-white xxxs:text-[10px] s:text-[20px]">
                Download Cv
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Help;

// bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-900 to-yellow-300

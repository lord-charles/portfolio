import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "utils/motion";

const Work = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative s:top-[70px] s:h-[60rem] xxxs:h-[45rem]"
    >
      <div className="text-center s:text-[33px] xxxs:text-[25px] font-bold">
        How i work
      </div>
      <div className="grid grid-cols-2 items-center space-x-5 space-y-5 s:mx-[35px] md:mx-[50px] xxxs:mx-[5px] relative right-[9px]">
        {/* section a  */}
        <motion.div
          variants={fadeIn("up", "slideIn", 2.5, 2.5)}
          className="ml-[20px]"
        >
          <span className="flex justify-center s:text-[32px] xxxs:text-[20px] font-serif">
            Design Process
          </span>
          <div className="font-serif s:text-[25px] xxxs:text-[15px]  border md:h-[7rem]  overflow-auto indent-7">
            Reach your business goals with excellent user experience. Let&apos;s
            start working on your awesome Web or android/iOs app.
          </div>
        </motion.div>
        {/* section b  */}
        <motion.div
          variants={fadeIn("up", "slideIn", 1.5, 2.5)}
          className="flex justify-evenly "
        >
          <div className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg p-[5px] flex items-center cursor-pointer h-[60px]">
            <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-sm p-1 text-white xxxs:text-[10px] s:text-[18px]">
              Start a project
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
          <div className=" bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 rounded-lg p-[5px] flex items-center cursor-pointer h-[60px]">
            <span className="bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded-sm p-1 text-white xxxs:text-[10px] s:text-[18px]">
              Learn more
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

        {/* section c  */}
        <div className="">
          <div className="text-center s:text-[32px] xxxs:text-[20px] font-serif">
            Strategy
          </div>
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 2.5)}
            className="font-serif s:text-[25px] xxxs:text-[15px] xxxs:h-[13rem] border md:h-[15rem] s:h-[16rem] overflow-auto indent-8"
          >
            At the outset of any design project, it is imperative to ensure that
            we have a clear understanding of the objectives and challenges at
            hand. To achieve this, we engage in comprehensive market research,
            competitive analysis, and consultation to ensure that we are asking
            the right questions and exploring the most effective solutions. This
            approach enables us to deliver designs that are both professional
            and impactful, exceeding the expectations of our clients.
          </motion.div>
        </div>

        {/* section d */}
        <div>
          <div className="text-center s:text-[32px] xxxs:text-[20px] font-serif">
            Designing
          </div>
          <motion.div
            variants={fadeIn("left", "tween", 1.5, 2.5)}
            className="font-serif s:text-[25px] xxxs:text-[15px]  xxxs:h-[13rem]  border md:h-[15rem] s:h-[16rem] overflow-auto indent-9"
          >
            Our problem-solving approach culminates in the delivery of a
            meticulously crafted design that perfectly aligns with your vision
            for your app or website. Through a seamless transition from
            wireframes to the final design, we utilize prototypes to bring the
            design to life, providing an accurate simulation of the end-result
            before development commences. This process allows us to ensure that
            the design meets the highest standards of professionalism, accuracy,
            and visual appeal, providing an exceptional experience for our
            clients.
          </motion.div>
        </div>

        {/* section e  */}
        <div>
          <div className="text-center s:text-[32px] xxxs:text-[20px] font-serif">
            Development
          </div>
          <motion.div
            variants={fadeIn("fadeIn", "slideIn", 3.5, 2.5)}
            className="font-serif s:text-[25px]  xxxs:h-[13rem]  xxxs:text-[15px]  border md:h-[15rem] s:h-[16rem] overflow-auto indent-9"
          >
            As a seasoned professional developer, I have a proven track record
            of effectively collaborating with other developers to bring designs
            to life. I understand the importance of seamless teamwork and
            communication in the software development process. I take pride in
            my ability to work closely with my peers, ensuring that every
            project is completed to the highest standard, and that our clients
            receive the very best in terms of quality and customer service. I
            believe that my passion for my work and commitment to excellence
            make me an excellent choice for clients looking for a dependable and
            knowledgeable development partner.
          </motion.div>
        </div>

        {/* section f  */}
        <div>
          <div className="text-center s:text-[32px] xxxs:text-[20px] font-serif">
            Quality assurance
          </div>
          <motion.div
            variants={fadeIn("fadeIn", "slideIn", 2.5, 2.5)}
            className="font-serif s:text-[25px] xxxs:text-[15px]  xxxs:h-[13rem]  border md:h-[15rem] s:h-[16rem] overflow-auto indent-9"
          >
            As a professional developer, I am dedicated to providing a
            transparent and thorough design process for my clients. I believe in
            regular and open communication, and I am committed to keeping you
            informed and up-to-date every step of the way. I am pleased to offer
            a complete overview of my design process, including regular meetings
            and updates, to ensure that you have a clear understanding of the
            progress and direction of your project. Furthermore, I am eager to
            engage in user testing with your customers, to gain valuable
            insights and ensure that we are providing the best possible
            solutions to meet their needs. I understand the importance of
            delivering a solution that not only meets the technical requirements
            but also satisfies the needs of the end-users. I am confident that
            my passion for delivering exceptional results and my commitment to
            your success will ensure that you receive the highest quality
            solutions, designed to meet your specific needs
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;

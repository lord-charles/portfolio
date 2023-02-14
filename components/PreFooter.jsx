import Image from "next/image";
import Link from "next/link";
import React from "react";

const PreFooter = () => {
  return (
    <div className=" relative top-[40px] xxxs:mx-[15px] md:mx-[120px] s:mx-[50px] mb-[50px] ">
      <a className="annchor" id="contact"></a>
      <div>
        <span className="flex space-x-2 items-center">
          <h1 className="opacity-50 font-serif s:text-[22px]">
            Nice to meet you{" "}
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-pink-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
            />
          </svg>
        </span>

        <h1 className="xxxs:text-[25px] s:text-[30px] font-bold">
          Hi there, I&apos;m Charles
        </h1>
      </div>

      <div className="flex md:flex-row md:justify-evenly md:space-x-5 xxxs:flex-col">
        <div className="md:w-[70%]">
          <div>
            <h1 className="font-serif xxxs:text-[22px] s:text-[30px]">
              My name is Charles mwaniki, i work as User interface, User
              experience and fullstack developer based in Kenya
            </h1>
            <br />
            <h2 className="s:text-[22px]">
              Currently am designing the next generation of note taking
              experience at craft with an incredible team. Previously, i was a
              product developer at inVision <br />
              Outside of my full-time commitments, i work with a select
              freelance client base base to create amazing products and
              solutions. I&apos;m passionate about building & designing
              delightful experiences with the combination of business, marketing
              and UX/UI design to make customers and users satisfied when
              they&apos;re using products and services online.
            </h2>
          </div>
          {/* profile  */}
          <div className="flex items-center justify-center space-x-5 mt-[10px] p-2">
            <Image
              src={"/nigga.png"}
              width={100}
              height={100}
              className="w-[100px] h-[100px] s:w-[150px] s:h-[150px] rounded-full border border-purple-500 p-1 "
              alt="image"
            />
            <span className="s:text-[25px]"> Charles mwaniki</span>
          </div>
        </div>

        <div className="xxxs:mt-[30px] ">
          <h1 className="xxxs:text-[23px] md:text-[25px] s:text-[35px] font-bold">
            Stay up-to-date
          </h1>
          <span className="flex items-center">
            <h2 className="font-semibold xxxs:text-[16px] s:text-[24px] md:text-[16px]">
              Hint:
            </h2>
            <h3 className="font-serif s:text-[22px] md:text-[15px]">
              I&apos;m especially active on whatsup and twitter
            </h3>
          </span>
          <div className="s:text-[20px]">
            <span className="flex space-x-2 items-center">
              <Link target={"_blank"} href="https://whatsup.com">
                <Image
                  src={"/whatsup.png"}
                  height={100}
                  width={100}
                  alt="image"
                  className="w-[40px]"
                />
              </Link>
              <h1>WhatsApp</h1>
            </span>
            <span className="flex space-x-2 items-center">
              <Link target={"_blank"} href="https://twitter.com">
                <Image
                  src={"/twitter.png"}
                  height={100}
                  width={100}
                  alt="image"
                  className="w-[40px]"
                />
              </Link>
              <h1>Twitter</h1>
            </span>
            <span className="flex space-x-2 items-center">
              <Link target={"_blank"} href="https://facebook.com">
                <Image
                  src={"/fb.png"}
                  height={100}
                  width={100}
                  alt="image"
                  className="w-[40px]"
                />
              </Link>
              <h1>Facebook</h1>
            </span>
            <span className="flex space-x-2 items-center">
              <Link target={"_blank"} href="https://instagram.com">
                <Image
                  src={"/instagram.png"}
                  height={100}
                  width={100}
                  alt="image"
                  className="w-[40px]"
                />
              </Link>
              <h1>Instagram</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;

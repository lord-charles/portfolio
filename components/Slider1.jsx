import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore, { Autoplay } from "swiper";
import "swiper/css/autoplay";
import Image from "next/image";
import { comments } from "utils/data";

const Slider1 = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="relative xxxs:top-[220px] s:top-[190px] mb-[100px] items-center">
      <a className="anchor" id="testimonials"></a>

      <div className="text-center xxxs:text-[28px] md:text-[39px] s:text-[45px] font-serif font-bold">
        People talk about us
      </div>
      <div className="flex xxxs:mx-[7px] s:ml-[55px]">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay
          pagination={{ clickable: true }}
        >
          <div>
            {comments.map((item, index) => {
              return (
                <SwiperSlide
                  className="flex justify-center items-center"
                  key={index}
                >
                  <div className="relative xxxs:h-[25vh] xxxs:w-[48vw] md:w-[30vw] s:w-[40vw] md:mx-auto xxxs:mt-[50px] s:mt-[70px] rounded-sm bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-purple-600 via-gray-100 to-green-500">
                    <Image
                      src={item.img}
                      width={100}
                      height={100}
                      alt="image"
                      className={`w-[70px] h-[70px]  s:w-[100px] s:h-[100px] absolute left-[50%] top-[-20%] s:top-[-20%] md:top-[-27%] transform -translate-x-[50%] rounded-full border-[3px]`}
                      style={{ borderColor: item.color }}
                    />
                    <div className="relative xxxs:text-[12px] xxxs:top-[30px] md:text-[18px] md:mx-[30px] s:text-[23px] s:ml-[20px] font-serif">
                      {item.comment}
                    </div>

                    <div className="relative top-[50px] transform -translate-x-[30%] left-[50%]">
                      <h1 className="md:text-[20px] s:text-[25px] font-bold">
                        {item.name}
                      </h1>
                      <div className="xxxs:text-[12px] s:text-[20px]">
                        {item.post}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>

      {/* slider2 */}
    </div>
  );
};

export default Slider1;

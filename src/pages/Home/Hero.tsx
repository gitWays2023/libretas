import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Img1 from "../../assets/hero-background.png";
import Img2 from "../../assets/hero1.png";
import Img3 from "../../assets/hero2.png";
import "swiper/css";
import "swiper/css/pagination";

import "@/styles.css";

import { Pagination, Autoplay } from "swiper/modules";

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className="relative w-full h-auto  lg:h-[95vh] bg-cover pt-20 bg-center py-9"
      style={{ backgroundImage: `url(${Img1})` }}
    >
      <div className="absolute inset-0 bg-blue-900 bg-opacity-95"></div>
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Autoplay]}
      >
        <SwiperSlide className="bg-transparent py-20">
          <div className="flex justify-between px-4 py-14 flex-col md:flex-row sm:px-8 lg:px-10 items-center gap-2 bg-transparent">
            <div className="text-left w-full md:w-[40%]">
              <h1 className="text-white text-3xl capitalize md:text-5xl font-bold">
                Congratulations you have found freedom
              </h1>
              <p className="text-white text-md md:text-lg py-8 mt-4 leading-snug">
                Everyone has the right to freedom of opinion and expression;
                this right includes freedom to hold opinions without
                interference and to seek, receive and impart information and
                ideas through any media and regardless of frontiers" Article 19,
                universal declaration of human rights
              </p>
            </div>
            <div className="w-full md:w-[50%] p-8 ">
              <img src={Img2} className="w-[80%]" alt="Slide 1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent py-20">
          <div className="flex justify-between px-4 py-14 flex-col md:flex-row sm:px-8 lg:px-10 items-center gap-2 bg-transparent">
            <div className="text-left w-full md:w-[40%]">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                We All Deserve Assets
              </h1>
              <p className="text-white text-lg py-8 mt-4">
                Discover Research, platforms and communities for the development
                and access to Web Assets.
              </p>
            </div>
            <div className="w-full md:w-[50%] p-8 ">
              <img src={Img3} className="w-[80%]" alt="Slide 1" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="bg-transparent py-20">
          <div className="flex justify-between px-4 py-14 flex-col md:flex-row sm:px-8 lg:px-10 items-center gap-2 bg-transparent">
            <div className="text-left w-full md:w-[40%]">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Spread the Word
              </h1>
              <p className="text-white text-lg py-8 mt-4">
                Get Involved with Libertas Alpha directly: create value, become
                a partner in research and develop solutions.
              </p>
            </div>
            <div className="w-full md:w-[50%] p-8 ">
              <img src={Img2} className="w-[80%]" alt="Slide 1" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;

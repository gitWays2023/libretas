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
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                We Solve Business Problems with Technology
              </h1>
              <p className="text-white text-lg py-8 mt-4 leading-snug">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                fermentum, urna nec accumsan feugiat, metus tortor volutpat
                ligula, non tempus justo magna at mi.
              </p>
              <button className="text-white border border-white py-2 px-4 mt-4">
                Get Started
              </button>
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
                Our Product Create Transparency System and Building Trust
              </h1>
              <p className="text-white text-lg py-8 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                fermentum, urna nec accumsan feugiat, metus tortor volutpat
                ligula, non tempus justo magna at mi.
              </p>
              <button className="text-white border border-white py-2 px-4 mt-4">
                Get Started
              </button>
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
                We are Improving on the System by Integrating Blockchain
              </h1>
              <p className="text-white text-lg py-8 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                fermentum, urna nec accumsan feugiat, metus tortor volutpat
                ligula, non tempus justo magna at mi.
              </p>
              <button className="text-white border border-white py-2 px-4 mt-4">
                Get Started
              </button>
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

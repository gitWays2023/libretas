import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import Person1 from "@/assets/person1.png";
import Person2 from "@/assets/person2.png";
import Person3 from "@/assets/person3.png";
import ReviewImg from "@/assets/review.png";

import { FaQuoteLeft } from "react-icons/fa";
// install Swiper modules

const slides = [
  {
    name: "Samson",
    img: Person1,
    title: "Web Developer",
    desc: "This people provides good services that can help your business to grow in al measure they have really help my company",
  },
  {
    name: "Genevieve",
    img: Person2,
    title: "Hair Stylits",
    desc: "In the aspect of personnel training they have really done enogh for my company my employees are now up and willing to adapt to the new technologies",
  },
  {
    name: "Samuel",
    img: Person3,
    title: "Web Hacker",
    desc: "Libetras is one of the brand that give the best analytics fo businesses which can enhance the growth of the company in a period of time that is what have upshoot my company",
  },
];

const Review: React.FC = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row py-8 px-8 items-center">
      <div className="w-full md:w-[50%]">
        <div className="slider">
          <h2 className="font-bold leading-relaxed mt-8 md:mt-2 font-plays text-4xl text-center">
            Why Customer Love Us
          </h2>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
          >
            {slides.map((slideContent, index) => (
              <SwiperSlide key={index} className="py-10">
                <div className="flex flex-col items-center px-12 gap-8">
                  <FaQuoteLeft className="text-primary font-bold text-5xl" />
                  <p className="text-gray-700 text-center leading-snug text-lg font-lighter">
                    {slideContent.desc}
                  </p>
                  <div className="flex justify-center items-center">
                    <div className="overflow-hidden w-[80px] h-[80px] rounded-full">
                      <img src={slideContent.img} alt={slideContent.title} />
                    </div>
                    <div className="w-[200px] pl-4 flex-col gap-2">
                      <h2 className="font-bold text-md">{slideContent.name}</h2>
                      <h3 className="font-bold text-sm">
                        {slideContent.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="w-full md:w-[50%] rounded-lg">
        <img src={ReviewImg} alt="Review" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Review;

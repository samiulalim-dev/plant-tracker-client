import React from "react";
// import  from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import firstSlider from "../../assets/slider1.jpg";
import secondSlider from "../../assets/slider2.jpg";
import thirdSlider from "../../assets/slider3.jpg";

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative">
            <img
              src={firstSlider}
              className="w-full h-[400px] object-cover rounded-lg"
              alt=""
            />
            <div className="absolute top-0 left-0 bottom-10 right-0 bg-shadow-sm flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Grow with Love, Care with Passion
              </h2>
              <p className="text-lg md:text-xl">
                Track your plant's journey every day
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={secondSlider}
              className="w-full h-[400px] object-cover rounded-lg"
              alt=""
            />
            <div className="absolute top-0 left-0 bottom-10 right-0 bg-shadow-sm flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                Track. Care. Thrive
              </h2>
              <p className="text-lg md:text-xl">
                Join the Plant Care Community
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              src={thirdSlider}
              className="w-full h-[400px] object-cover rounded-lg"
              alt=""
            />
            <div className="absolute top-0 left-0 bottom-10 right-0 bg-shadow-sm flex flex-col justify-center items-center text-white text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-2">
                To plant a garden is to believe in tomorrow.
              </h2>
              <p className="text-lg md:text-xl">
                Mobile-Friendly & Easy to Use
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

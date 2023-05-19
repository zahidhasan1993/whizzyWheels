import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  EffectCreative,
  EffectCards,
  EffectCoverflow,
  Pagination,
} from "swiper";

const Gallery = () => {
  return (
    <div className="my-11">
      <h1 className="text-3xl font-bold text-center text-amber-700 mt-10 mb-12 underline">
        Toy Gallery
      </h1>

      <div className="md:grid md:grid-cols-2 md:gap-6">
        <div className="border border-amber-700 border-8">
          <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                tranamber: [0, 0, -400],
              },
              next: {
                tranamber: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://i.ibb.co/wY7RZtj/steinar-engeland-drw6-Rt-OKDi-A-unsplash.jpg"
                className="w-[100%] h-[100%]"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/ydxK9Xg/nick-xc-Rt6-KM5s04-unsplash.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/ZhFPYwW/andressa-lyrio-do-couto-sv8-Jh-Mp-Vj-F8-unsplash.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/9qcG5Kk/gimmel-magaway-HBOb5-KZti-U0-unsplash.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="border border-amber-700 border-8">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://i.ibb.co/k65PzxS/aditya-rathod-tc-rukx-VBXQ-unsplash.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/58N61LM/eric-nopanen-Euf-Bd-G-ZQMs-unsplash.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/gFFGWV5/gimmel-magaway-4-E0u7-Vsf-Gms-unsplash.jpg"
                alt=""
                className="w-[100%] h-[100%]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="md:col-span-2 border border-amber-700 border-8">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="https://i.ibb.co/9qcG5Kk/gimmel-magaway-HBOb5-KZti-U0-unsplash.jpg"
                className="w-[100%] h-[30rem]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/x3MxQ9R/gustavo-S-W9v-DL5wh-U-unsplash.jpg"
                className="w-[100%] h-[30rem]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/gmS1gbV/mink-mingle-Riz1q-Apl-MQk-unsplash.jpg"
                className="w-[100%] h-[30rem]"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://i.ibb.co/QvWBvTN/ugur-peker-bs-DYBke-U2f-I-unsplash.jpg"
                className="w-[100%] h-[30rem]"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
{
  /* */
}

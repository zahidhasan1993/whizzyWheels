import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper";
import pic1 from "../../assets/images/pic1.jpg";
import pic2 from "../../assets/images/pic2.jpg";
import pic3 from "../../assets/images/pic3.jpg";
import pic4 from "../../assets/images/pic4.jpg";
import pic5 from "../../assets/images/pic5.jpg";

const Slider = () => {
    return (
        <div className="">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={pic1} className=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={pic5} />
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Slider;
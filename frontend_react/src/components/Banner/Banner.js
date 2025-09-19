import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import banner1 from "../../assets/img/banner/1.webp";
import banner2 from "../../assets/img/banner/2.webp";
import banner3 from "../../assets/img/banner/3.webp";
import RightArrowIcon from "../../assets/icon/right-arrow.png";
import LeftArrowIcon from "../../assets/icon/left-arrow.png";

import "./Banner.scss";

const images = [banner1, banner2, banner3, banner1, banner2, banner3];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // проблема бага останньго слайду

  return (
    <div className="banner">
      <div className="left-arrow">
        <img src={LeftArrowIcon} alt={LeftArrowIcon} />
      </div>
      <div className="right-arrow">
        <img src={RightArrowIcon} alt={RightArrowIcon} />
      </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: ".left-arrow",
          nextEl: ".right-arrow",
        }}
        pagination={{
          clickable: true, // кружечки клікабельні
        }}
        loop={true}
        //centeredSlides
        watchSlidesProgress={true}
        watchSlidesVisibility={true}
        initialSlide={1}
        loopedSlides={images.length} // ✅ додай це
        centeredSlides={false} // true
        loopAdditionalSlides={4}
        slidesPerView="1" //дефолт 1, було auto
        spaceBetween={16}
        breakpoints={{
          0: {
            slidesPerView: 1, // до 768px два слайди
            centeredSlides: false,
          },
          490: {
            slidesPerView: 2, // до 768px два слайди
            centeredSlides: false,
          },
          768: {
            slidesPerView: "auto", // вище 768px як було
            centeredSlides: true,
          },
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="banner-swiper"
      >
        {images.map((src, index) => {
          const isActive = index === activeIndex;
          const className = isActive ? "slide-center" : "slide-side";

          return (
            <SwiperSlide className={`slide ${className}`} key={index}>
              <img src={src} alt={`Банер ${index + 1}`} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Banner;

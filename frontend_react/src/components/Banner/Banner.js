// import React, { useContext } from 'react';
// import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';

// import RightArrowIcon from '../../assets/icon/right-arrow.png';
// import LeftArrowIcon from '../../assets/icon/left-arrow.png';
// import banner1 from '../../assets/img/banner/1.webp';
// import banner2 from '../../assets/img/banner/2.webp';
// import banner3 from '../../assets/img/banner/3.webp';

// import './Banner.scss';

// const LeftArrow = () => {
//   const { scrollPrev } = useContext(VisibilityContext);

//   return (
//     <p onClick={() => scrollPrev()} className="right-arrow">
//       <img src={LeftArrowIcon} alt="right-arrow" />
//     </p>
//   );
// };

// const RightArrow = () => {
//   const { scrollNext } = useContext(VisibilityContext);

//   return (
//     <p onClick={() => scrollNext()} className="left-arrow">
//       <img src={RightArrowIcon} alt="right-arrow" />
//     </p>
//   );
// };

// const bannerImages = [
//   {
//     id: 1,
//     src: banner1,
//     alt: 'Банер 0'
//   },
//   {
//     id: 2,
//     src: banner2,
//     alt: 'Банер 2'
//   },
//   {
//     id: 3,
//       src: banner3,
//     alt: 'Банер 3'
//   },

// ];

// const Banner = () => {
//   return (
//     <div className='banner'>
//       <ScrollMenu
//         LeftArrow={LeftArrow} 
//         RightArrow={RightArrow}
//         scrollBy={1}
//         >
//           {bannerImages.map((image) => (
       
//             <div key={image.id} className='banner__item'>

//               <img
//                 src={image.src}
//                 alt={image.alt}
//                // className="w-full h-auto object-cover"
//               />
//             </div>
//           ))}
//       </ScrollMenu>
//     </div>
//   )
// }

// export default Banner
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import banner1 from '../../assets/img/banner/1.webp';
import banner2 from '../../assets/img/banner/2.webp';
import banner3 from '../../assets/img/banner/3.webp';
import RightArrowIcon from '../../assets/icon/right-arrow.png';
import LeftArrowIcon from '../../assets/icon/left-arrow.png';

import './Banner.scss';

const images = [banner1, banner2, banner3, banner1, banner2, banner3];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
// проблема бага останньго слайду
// на вечір помістити все в контейнер
// почати робити корзину
//витягнути всі картинки
  return (
    <div className="banner">
      <div className="left-arrow">
        <img src={LeftArrowIcon} alt={LeftArrowIcon} />
      </div>
      <div className="right-arrow">
        <img src={RightArrowIcon} alt={RightArrowIcon}/>
      </div>
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: '.left-arrow',
          nextEl: '.right-arrow',
        }}
        loop={true}
        //centeredSlides
        watchSlidesProgress={true}
        watchSlidesVisibility={true}
        initialSlide={1}
        loopedSlides={images.length} // ✅ додай це
        centeredSlides={true}
        loopAdditionalSlides={4}
        slidesPerView="auto"
        spaceBetween={16}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        className="banner-swiper"
      >
        {images.map((src, index) => {
          const isActive = index === activeIndex;
          const className = isActive ? 'slide-center' : 'slide-side';

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


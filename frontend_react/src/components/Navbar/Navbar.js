import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useWindowWidth from "../../utils/useWindowWidth";
import Logo from "../../assets/icon/Logo.png";
import Cart from "../../assets/icon/cart.png";
import Search from "../../assets/icon/search.svg";

import "./Navbar.scss";

import RightArrowIcon from "../../assets/icon/right-arrow.png";
import LeftArrowIcon from "../../assets/icon/left-arrow.png";
import "swiper/css";
import "swiper/css/navigation";

const Navbar = ({ setProd, orders, requiredIds }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const menuItems = [
    "Сети",
    "Роли",
    "Акціі",
    "Комбо",
    "Новинки",
    "Суші бургери",
    "Суші",
    "Гаряче та салати",
    "Десерти та напої",
    "Доповнення",
    "Філадельфії",
    "Каліфорніі",
  ];
  //це функція виводить суму замовлених товарів, без врахування обов'язкових
  //
  const totalCount = orders
    .filter((item) => !requiredIds.includes(item.id))
    .reduce((sum, item) => sum + item.quantity, 0);
  // цей хук використовуємо для з'ясування ширини в'юпорта, щоб використовувати або слайдер, або
  const width = useWindowWidth();
  const isMobile = width > 1280;
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__header">
          <div className="navbar__header-location">
            <p className="navbar__header-text">Київ</p>
          </div>
          <NavLink
            to="/"
            className="navbar__logo"
            onClick={() => {
              setProd("All");
            }}
          >
            <img src={Logo} alt="logo" className="navbar__img" />
          </NavLink>
          <div className="navbar__header-right">
            <Link to="/search" className="navbar__header-search">
              <img src={Search} alt="search" />
            </Link>
            <Link
              to="/cart"
              onClick={(e) => {
                if (totalCount === 0) e.preventDefault();
              }}
              className="navbar__cart"
            >
              <img src={Cart} alt="cart" className="cart__img" />
              {totalCount ? <span>{totalCount}</span> : null}
            </Link>
          </div>
        </div>

        {isMobile ? (
          <div className="navbar__menu">
            <ul className="navbar__menu-list">
              {menuItems.map((item, index) => (
                <li className="navbar__menu-item">
                  <NavLink
                    to={`/category/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      isActive
                        ? "active navbar__menu-link"
                        : "navbar__menu-link"
                    }
                    onClick={() => {
                      setProd(item.toLowerCase());
                    }}
                    key={index}
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="navbar__menu">
            <div className="left-arrow__nav">
              <img src={LeftArrowIcon} alt={LeftArrowIcon} />
            </div>
            <div className="right-arrow__nav">
              <img src={RightArrowIcon} alt={RightArrowIcon} />
            </div>
            <ul className="navbar__menu-list">
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  320: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                  },
                  456: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                  },
                  576: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                  },
                  768: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                  },
                  991: {
                    slidesPerView: 7,
                    spaceBetween: 16,
                  },
                  1280: {
                    slidesPerView: 8,
                    spaceBetween: 16,
                  },
                }}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".left-arrow__nav",
                  nextEl: ".right-arrow__nav",
                }}
                // slidesPerView="auto"
                spaceBetween={16}
                // onSlideChange={(swiper) => {
                //   setActiveIndex(swiper.realIndex);
                // }}
                className="banner-swiper"
              >
                {menuItems.map((item, index) => {
                  // const isActive = index === activeIndex;
                  // const className = isActive ? 'slide-center' : 'slide-side';

                  return (
                    <SwiperSlide
                      className="navbar__menu-item"
                      key={index}
                      //style={{ width: 'auto' }}
                    >
                      <NavLink
                        to={`/category/${item.toLowerCase()}`}
                        className={({ isActive }) =>
                          isActive
                            ? "active navbar__menu-link"
                            : "navbar__menu-link"
                        }
                        onClick={() => {
                          setProd(item.toLowerCase());
                        }}
                      >
                        {item}
                      </NavLink>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

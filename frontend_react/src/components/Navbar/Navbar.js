import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.scss';
import Logo from '../../assets/icon/Logo.png';
import Cart from '../../assets/icon/cart.png';
import Search from '../../assets/icon/search.svg'


const Navbar = ({setProd, orders, requiredIds}) => {

  const menuItems = [
    'Сети', 'Роли', 'Акціі', 'Комбо', 'Новинки', 'Суші бургери',
    'Суші', 'Гаряче та салати', 'Десерти та напої',
    'Доповнення', 'Філадельфії', 'Каліфорніі'
  ];
//це функція виводить суму замовлених товарів, без врахування обов'язкових
const totalCount = orders
  .filter(item => !requiredIds.includes(item.id))
  .reduce((sum, item) => sum + item.quantity, 0);

return (
  <div className='navbar'>
    <div className="container">
      <div className="navbar__header">
        <div className="navbar__header-location">
          <p className='navbar__header-text'>Київ</p>
        </div>
        <NavLink
          to='/'
          className='navbar__logo'
          onClick={() => {
            setProd('All');
          }}
          >
          <img src={Logo} alt='logo' className='navbar__img'/>
        </NavLink>
        <div className="navbar__header-right">
          <Link
            to='/search'
            className='navbar__header-search'
          >
            <img src={Search} alt="search" />
          </Link>
          <Link
            to='/cart'
            onClick={(e) => {
              if (totalCount === 0) e.preventDefault();
            }}
            className='navbar__cart'
            >
              <img src={Cart} alt='cart' className='cart__img'/>
              {totalCount ? <span>{totalCount}</span> : null}
          </Link>
        </div>

      </div>

      <div className="navbar__menu">
        <ul className="navbar__menu-list">
          {menuItems.map((item, index) => (
            <li className="navbar__menu-item">
              <NavLink 
                to={`/category/${item.toLowerCase()}`}
                className={({ isActive }) => isActive ? 'active navbar__menu-link' : 'navbar__menu-link'}
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
    </div>

  </div>
)
}

export default Navbar;

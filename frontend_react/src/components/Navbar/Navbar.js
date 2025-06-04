import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.scss';
import Logo from '../../assets/icon/Logo.png';
import Cart from '../../assets/icon/cart.png';


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
  console.log(`sum`, totalCount)
//let sum = 0;
// if (Array.isArray(orders) && orders.length > 0) {
//   orders.forEach(item => {
//     sum += item.quantity;
//   })};


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
        <Link 
          to='/cart'
          className='navbar__cart'
          >
            <img src={Cart} alt='cart' className='cart__img'/>
            {totalCount ? <span>{totalCount}</span> : null}
          
        </Link>
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

import React from 'react';
import { Link } from 'react-router-dom';
import './CartEmpty.scss';
import CartEmptyIcon from '../../assets/icon/cart-empty.svg'

const CartEmpty = () => {
  return (
    <div className='cart-empty'>
      <div className="cart-empty__image">
        <img src={CartEmptyIcon} alt="cart empty" />
      </div>
      <p className='cart-empty__txt'>
        Кошик порожній, додайте що-небудь з меню
      </p>
      <Link
        to='/'
        className='cart-empty__btn'
      >
        В меню
      </Link>
      
    </div>
  )
}

export default CartEmpty

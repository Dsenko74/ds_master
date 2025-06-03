import React from 'react';
import { Link } from 'react-router-dom';
import AddToCardButton from '../AddToCardButton/AddToCardButton';

import './CartItem.scss';

const CartItem = ({item, setOrders, orders}) => {
    const { _id, title, price, discount, description, ingredients, imageUrl, oldPrice, novelty, action, cashback, weight } = item;
    console.log(orders)
    const deleteOrderById = (idToDelete) => {
      setOrders(prevOrders => prevOrders.filter(order => order.id !== idToDelete));
    };

  return (
    <div className='cart-item'>
      <div className="cart-item__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="cart-item__content">
        <Link
          to={`/order/${_id}`}
          className='cart-item__title'
          >
          {title}
        </Link>
        <span>{`${weight} г`}</span>
      </div>
      <AddToCardButton productId={_id} setOrders={setOrders} orders={orders}/>
      <div className="cart-item__prices">
        { price ? <p className='cart-item__prices-price'>{`${price} грн`}</p> : null}
        <span 
          className={
            price ? 'cart-item__prices-old' : 'cart-item__prices-old cart-item__prices-old_new'}
            >
            {`${oldPrice} грн`}</span>
      </div>
      <button 
        className="cart-item__delete"
        onClick={() => deleteOrderById(_id)}
        ></button>
    </div>
  )
}

export default CartItem

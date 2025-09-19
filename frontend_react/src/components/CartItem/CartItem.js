import React from 'react';
import { Link } from 'react-router-dom';
import DeleteMark from  '../../assets/icon/icons8-cross-mark-78.png';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

import './CartItem.scss';

const CartItem = ({item, setOrders, orders}) => {
    const { _id, title, price, imageUrl, oldPrice, weight } = item;
    
    // тут дістаємо кількість товару
    const quantity = orders.find(item => item.id === _id)?.quantity || 0;
    
    //видаляємо товар по _id з корзини замовлень (orders)
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
      <AddToCartButton productId={_id} setOrders={setOrders} orders={orders}/>
      <div className="cart-item__prices">
        { price ? <p className='cart-item__prices-price'>{`${price}грн`}</p> : null}
        <span 
          className={
            price ? 'cart-item__prices-old' : 'cart-item__prices-old cart-item__prices-old_new'}
            >
            {`${oldPrice} грн`}</span>
      </div>
      <button 
        className="cart-item__delete"
        onClick={() => deleteOrderById(_id)}
        >
          <img src={DeleteMark} alt="DeleteMark" />
        </button>
    </div>
  )
}

export default CartItem

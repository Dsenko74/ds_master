import React from 'react';
import { Link } from 'react-router-dom';

const FinalizeOrderItem = ({item, orders, setShow, show}) => {
   const { _id, title, price, imageUrl, oldPrice, weight } = item;
  const quantity = orders.find(item => item.id === _id)?.quantity || 0;
  return (
    <div className='finalize__order-item'>
      <div className="finalize__order-item-body">
        <div className="finalize__order-image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="finalize__order-content">
          <Link
            to={`/order/${_id}`}
            className='finalize__order-title'
            >
            {title}
          </Link>
          <div className="finalize__order-wrapper">
            <span className='finalize__order-weight'>{`${weight} г`}</span>
            <span className="finalize__order-quantity">{`${quantity} шт` }</span>
            <span className="finalize__order-amount">{`${(price ?? oldPrice)} грн`}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={e => setShow(!show)}
        className='finalize__order-switch'>
        { show ? `Показати всі` : `Показати менше`}
      </button>
    </div>
  )
}

export default FinalizeOrderItem

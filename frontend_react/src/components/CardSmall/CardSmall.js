import React from 'react';
import { Link } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import './CardSmall.scss';

const CardSmall = ({item, setOrders, orders}) => {
  const { _id, title, price, discount, description, ingredients, imageUrl, oldPrice, novelty, action, cashback, weight } = item;

  return (
    <div 
      key={_id}
      className='card-small'
      >
      <div className="card-small__body">
        <div className="card-small__image">
          <img src={imageUrl} alt="set" />
        </div>
        <div className="card-small__content">
          <Link to={`/order/${_id}`} className='card-small__title'>
            {title}
          </Link>
          <p className="card-small__weight">
            {`${weight} гр`}
          </p>
        </div>


      </div>
      <div className="card-small__wrapper">
        <p className="card-small__price">
          {`${oldPrice} грн`}
        </p>
         <AddToCartButton productId={_id} setOrders={setOrders} orders={orders}/>
      </div>
    </div>
  )
}

export default CardSmall;

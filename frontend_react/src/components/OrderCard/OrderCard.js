import React from 'react';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

import './OrderCard.scss';
import Bonus from '../../assets/icon/bonus.svg';
import Cashback from '../../assets/icon/keshbek-vid.svg'
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';

const OrderCard = ({sets, id, setOrders, orders, prod}) => {  
  const { _id, title, price, discount, description, ingredients, imageUrl, oldPrice, novelty, action, cashback, weight } = sets.filter(item => item._id === id)[0];


  const navigate = useNavigate();

  let bonus = price ? Math.round(parseFloat(price) * 0.05) : Math.round(parseFloat(oldPrice) * 0.05);


  return (
    <div className='order-card'>
      <div className="order-card__back">
        <button onClick={() => navigate(-1)} >
          Назад
        </button>
      </div>
      <div className="order-card__block">
        <div className="order-card__image">
          <img src={imageUrl} alt={title} />
        </div>
        <div className="order-card__content">
          <h3 className='order-card__title'>{title}</h3>
          <p className='order-card__weight'>{`Вага ${weight} гр`}</p>
          <div className="div order-card__wrapper">
            {price ? <p className='order-card__price'>{`${price} грн`}</p>: <p className='order-card__price'>{`${oldPrice} грн`}</p>}
            {price? <p className='order-card__oldprice ' style={{ textDecoration: price ? 'line-through' : 'none' }}>{`${oldPrice} грн`} </p> : null}
            <AddToCartButton productId={_id} setOrders={setOrders} orders={orders}/>
          </div> 
          <div className="order-card__bonus">
            <img src={Bonus} alt="bonus" />
            <p className="order-card__txt">
              За покупку вам буде нараховано <span>{bonus}</span> балів
            </p>  
          </div> 
          <div className="order-card__cashback">
            <img src={Cashback} alt="cashback" />
            <p className="order-card__txt">
              Кешбек від  <span>{cashback}%</span>
            </p>
          </div>
          <p className="order-card__delivery">
            Карта доставки
          </p>
          <p className="order-card__composition">
            Склад: <span>{description}</span>
          </p>
        </div>
      </div>
      <div className="order-card__recomend">
        <h3 className="order-card__recomend-title">
          Рекомендуємо спробувати:
        </h3>
        <div className="order-card__recomend-items">
          <HorizontalScrollbar productId={_id} sets={sets} setOrders={setOrders} orders={orders} prod={prod}/>
        </div>
      </div>

    </div>
  )
}

export default OrderCard;

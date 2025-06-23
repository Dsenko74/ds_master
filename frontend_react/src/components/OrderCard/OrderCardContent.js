import React from 'react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import Bonus from '../../assets/icon/bonus.svg';
import Cashback from '../../assets/icon/keshbek-vid.svg';

const OrderCardContent = ({currentItem, orders, setOrders}) => {
  const { _id, title, price, description,oldPrice, cashback, weight } = currentItem;
  const getBonus = (price, oldPrice) => {
    const base = price || oldPrice;
    return Math.round(parseFloat(base) * 0.05)
  }
  const bonus = getBonus(price, oldPrice);
  return (
        <div className="order-card__content">
          <h3 className='order-card__title'>{title}</h3>
          <p className='order-card__weight'>{`Вага ${weight} гр`}</p>
          <div className="order-card__wrapper">
            <p className='order-card__price'>{`${price || oldPrice} грн`}</p>
            {price && <p className='order-card__oldprice ' style={{ textDecoration: price ? 'line-through' : 'none' }}>{`${oldPrice} грн`} </p>}
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
  )
}

export default OrderCardContent

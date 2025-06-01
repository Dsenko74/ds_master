import React from 'react';
import { Link } from 'react-router-dom';
import Offers from '../Offers/Offers';
import Cashback from '../../assets/icon/keshbek-vid.png';
import AddToCardButton from '../AddToCardButton/AddToCardButton';
import './Card.scss';


const Card = ({item, setOrders, orders}) => {
  const { _id, title, price, discount, description, ingredients, imageUrl, oldPrice, novelty, action, cashback, weight } = item;

  return (
    <div 
      key={_id}
      className='card'
    >
      <Link to={`/order/${_id}`} className='card__link' >
        <img src={imageUrl} alt="set" className='img'/>
        <Offers novelty={novelty} action={action} discount={discount} />
      </Link>

      <div className="card__content">
        <div className="card__params">
          <p className='card__weight'>{`${weight} гр`} </p>
          { cashback && (
            <div className="card__cashback">
              <img src={Cashback} alt="cashback" />
              <p className='card__cashback-text'>
                <span>Кешбек від</span> {cashback} %</p>
            </div>
          )}
        </div>
        <Link to={`/order/${_id}`} className='card__title'>
          {title}
        </Link>
        <p className='card__descr'>
          {description?.length > 80 ? `${description.slice(0, 80)}...` : description}
        </p>
        <div className="card__footer">
          {price ? <p className='card__price'>{`${price} грн`}</p>: null}
          <p 
            className='card__oldprice ' 
            style={{ textDecoration: price ? 'line-through' : 'none' }}>{`${oldPrice} грн`}</p>
          <AddToCardButton productId={_id} setOrders={setOrders} orders={orders}/>
        </div>
      </div>
    </div>
  )
}

export default Card

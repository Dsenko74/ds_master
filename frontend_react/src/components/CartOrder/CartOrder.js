import React from 'react';
import { Link } from 'react-router-dom';
import HalfEmptyCart from '../../assets/icon/halfEmpty-cart-96.png';
import ArrowPromo from '../../assets/icon/arrow-right-promo.svg';

const CartOrder = ({totalAmount, setInputValue, inputValue, handleSubmit}) => {
  return (
          <div className="cart-order">
            <div className="cart-order__body">
             {totalAmount < 700 &&
              <div className="cart-order__head">
                <div className="cart-order__head-icon">
                  <img src={HalfEmptyCart} alt="icon" />
                </div>
                <p className="cart-order__head-txt">
                  `Щоб оформити безкоштовну доставку додайте товарів на {700 - totalAmount} грн`
                </p>
              </div> }
              <form className="cart-order__form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="orderNote"
                  placeholder="Є промокод?"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">
                  <img src={ArrowPromo} alt="ArrowPromo" />
                </button>
              </form>
              <div className="cart-order__amount">
                <p className="cart-order__amout-type">Товари</p>
                <p className="cart-order__amout-value">{`${totalAmount} грн`}</p>
              </div>
              { totalAmount < 700 &&  
                <div className="cart-order__amount">
                  <p className="cart-order__amout-type">Доставка</p>
                  <p className="cart-order__amout-value">80 грн</p>
                </div>}
              <span className='cart-order__total'>{`${totalAmount} грн`}</span>

                <Link 
                  to='/finalize'
                  className='cart-order__btn'>
                    {`Оформити ${totalAmount} грн`}
                </Link>


            </div>
           
          </div>
  )
}

export default CartOrder;

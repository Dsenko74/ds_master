import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem/CartItem';
import CartEmpty from '../components/CartEmpty/CartEmpty';
import HalfEmptyCart from '../assets/icon/halfEmpty-cart-96.png';
import ArrowPromo from '../assets/icon/arrow-right-promo.svg';
import HorizontalScrollbar from '../components/HorizontalScrollbar/HorizontalScrollbar';
import CardSmall from '../components/CardSmall/CardSmall';
import './Cart.scss';


// цей компонент необхідно розбити ще на декілька компонентів
const Cart = ({sets, setOrders, orders, prod, requiredIds}) => {
  // цей стайт створений щоб до замовлення додати супутні продукти, окремий стейт
  const [filteredSets, setFilteredSets] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    const result = sets.filter(set =>
      orders.some(order => order.id === set._id)
    );
    setFilteredSets(result);
  }, [orders]);

//це функція виводить кількість замовлених товарів, без врахування обов'язкових
const totalCount = orders
  .filter(item => !requiredIds.includes(item.id))
  .reduce((sum, item) => sum + item.quantity, 0);
// це функція підраховує загальну суму замовлення
const totalAmount = filteredSets.reduce((sum, item) => {
  const order = orders.find(o => o.id === item._id);
  const quantity = order ? order.quantity : 0;
  return sum + ( item.price ? item.price : item.oldPrice) * quantity;
}, 0);
  //функція для онулення кошика
  const clearCart = () => {
    setOrders([]);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Обробка введених даних
    console.log("Дані форми:", inputValue);
  };
  const visibleItems = sets.filter(item => item.categories.toLowerCase() === "десерти та напої");
  console.log(visibleItems)
  return (
   totalCount ? ( 
    <div className='cart'>
      <div className="container">
        <div className="cart-body">
          <div className="cart-main">
            <div className="cart-main__head">
              <h3 className="cart-main__head-title">Моє замовлення</h3>
              <button 
                className="cart-main__head-btn"
                onClick={() => clearCart()}
                >
                  очистити кошик
              </button>
            </div>
          {filteredSets.map(item => (
            <CartItem item={item} setOrders={setOrders} orders={orders}/>
          ))}
          </div>
          <div className="cart-order">
            <div className="cart-order__body">
    {totalAmount < 700 ? <div className="cart-order__head">
                          <div className="cart-order__head-icon">
                            <img src={HalfEmptyCart} alt="icon" />
                          </div>
                          <p className="cart-order__head-txt">`Щоб оформити безкоштовну доставку додайте товарів на {700 - totalAmount} грн`</p>
                        </div> : null}
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
{ totalAmount < 700 ?  <div className="cart-order__amount">
                <p className="cart-order__amout-type">Доставка</p>
                <p className="cart-order__amout-value">80 грн</p>
              </div>: null}
              <span className='cart-order__total'>{`${totalAmount} грн`}</span>
              <button className='cart-order__btn'>{`Оформити ${totalAmount} грн`}</button>
            </div>
           
          </div>
        </div>
        <div className="cart-add">
          <h3 className="order-card__recomend-title">
          Додати до замовлення:
          </h3>
          <HorizontalScrollbar 
            visibleItems={visibleItems}
            renderItem={(item) => (
              <CardSmall item={item} setOrders={setOrders} orders={orders} />
            )}
          />
        </div>
      </div>
    </div>) : <CartEmpty clearCart={clearCart}/> 
  )
}

export default Cart

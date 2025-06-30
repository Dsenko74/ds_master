import React, { useEffect, useState } from 'react';
//import CartItem from '../components/CartItem/CartItem';
import CartEmpty from '../components/CartEmpty/CartEmpty';
import HorizontalScrollbar from '../components/HorizontalScrollbar/HorizontalScrollbar';
import CardSmall from '../components/CardSmall/CardSmall';
import './Cart.scss';
import CartMain from '../components/CartMain/CartMain';
import CartOrder from '../components/CartOrder/CartOrder';


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
     ;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Обробка введених даних
    console.log("Дані форми:", inputValue);
  };
  const visibleItems = sets.filter(item => item.categories.toLowerCase() === "десерти та напої");
  return (
   totalCount ? ( 
    <div className='cart'>
      <div className="container">
        <div className="cart-body">
          <CartMain 
            filteredSets={filteredSets}
            setOrders={setOrders}
            orders={orders}
            clearCart={clearCart}
          />
          <CartOrder 
            totalAmount={totalAmount}
            setInputValue={setInputValue}
            inputValue={inputValue}
            handleSubmit={handleSubmit}
          />
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

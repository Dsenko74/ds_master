import { useEffect, useState, useMemo } from 'react';
import CartEmpty from '../components/CartEmpty/CartEmpty';
import HorizontalScrollbar from '../components/HorizontalScrollbar/HorizontalScrollbar';
import CardSmall from '../components/CardSmall/CardSmall';
import CartMain from '../components/CartMain/CartMain';
import CartOrder from '../components/CartOrder/CartOrder';

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

const sortedFilteredSets = useMemo(() =>
  filteredSets
    .slice() // копія, щоб не мутувати оригінал
    .sort((a, b) => {
      const orderA = orders.find(order => order.id === a._id); //Знаходить обʼєкт замовлення, який відповідає товару a. 
      const orderB = orders.find(order => order.id === b._id);//В orders зберігається { id, quantity }, а в filteredSets — обʼєкт з _id.

      const quantityA = orderA ? orderA.quantity : 0;
      const quantityB = orderB ? orderB.quantity : 0;

      const priceA = a.price ?? a.oldPrice ?? 0;
      const priceB = b.price ?? b.oldPrice ?? 0;

      const totalA = priceA * quantityA;
      const totalB = priceB * quantityB;

      return totalB - totalA; // сортуємо за спаданням
    }),
  [filteredSets, orders]
);

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
  };
  const visibleItems = sets.filter(item => item.categories.toLowerCase() === "десерти та напої");
  return (
   totalCount ? ( 
    <div className='cart'>
      <div className="container">
        <div className="cart-body">
          <CartMain 
            filteredSets={sortedFilteredSets}
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

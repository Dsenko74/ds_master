import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem/CartItem';
import CartEmpty from '../components/CartEmpty/CartEmpty';
import './Cart.scss';

const Cart = ({sets, setOrders, orders, prod, requiredIds}) => {
  // цей стайт створений щоб до замовлення додати супутні продукти, окремий стейт
  const [filteredSets, setFilteredSets] = useState([]);

  useEffect(() => {
    const result = sets.filter(set =>
      orders.some(order => order.id === set._id)
    );
    setFilteredSets(result);
  }, [orders]);

//це функція виводить суму замовлених товарів, без врахування обов'язкових
const totalCount = orders
  .filter(item => !requiredIds.includes(item.id))
  .reduce((sum, item) => sum + item.quantity, 0);
  console.log(`sum`, totalCount)


  //функція для онулення кошика
  const clearCart = () => {
    setOrders([]);
   // setFilteredSets([]); // обнуляємо також і filteredSets
  };
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
          <div className="cart-order"></div>
        </div>
        <div className="cart-add"></div>
      </div>
    </div>) : <CartEmpty/> 
  )
}

export default Cart

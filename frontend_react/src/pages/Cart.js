import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem/CartItem';
import './Cart.scss';

const Cart = ({sets, setOrders, orders, prod}) => {
  // цей стайт створений щоб до замовлення додати супутні продукти, окремий стейт
  const [filteredSets, setFilteredSets] = useState([]);

  useEffect(() => {
    const result = sets.filter(set =>
      orders.some(order => order.id === set._id)
    );
    setFilteredSets(result);
  }, [orders]);




  //функція для онулення кошика
  const clearCart = () => {
    setOrders([]);
   // setFilteredSets([]); // обнуляємо також і filteredSets
  };
  return (
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
          {/* передаю в orders={fullOrder} який не зв'язаний з orders, тому є баг, треба два раза клікнути*/}
          {filteredSets.map(item => (
            <CartItem item={item} setOrders={setOrders} orders={orders}/>
          ))}
          </div>
          <div className="cart-order"></div>
        </div>
        <div className="cart-add"></div>
      </div>
    </div>
  )
}

export default Cart

import React from 'react';
import CartItem from '../components/CartItem/CartItem';


import './Cart.scss';



const Cart = ({sets, setOrders, orders, prod}) => {
  const filteredSets = sets.filter(set =>
    orders.some(order => order.id === set._id)
  );
  console.log(filteredSets)
  return (
    <div className='cart'>
      <div className="container">
        <div className="cart-body">
          <div className="cart-main">
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

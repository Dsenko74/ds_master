import React from 'react';
import CartItem from '../CartItem/CartItem';

const CartMain = ({filteredSets,clearCart, setOrders, orders}) => {
  return (
    <div className="cart-main">
      <div className="cart-main__head">
        <h3 className="cart-main__head-title">Моє замовлення</h3>
        <button 
          className="cart-main__head-btn"
          onClick={() => setOrders([])}
          >
            очистити кошик
        </button>
      </div>
      {filteredSets.map(item => (
        <CartItem item={item} setOrders={setOrders} orders={orders}/>
      ))}
    </div>
  )
}

export default CartMain;

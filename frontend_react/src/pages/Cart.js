import React, { useEffect, useState } from 'react';
import CartItem from '../components/CartItem/CartItem';
import './Cart.scss';

const Cart = ({sets, setOrders, orders, prod}) => {
  // цей стайт створений щоб до замовлення додати супутні продукти, окремий стейт
  const [filteredSets, setFilteredSets] = useState([]);
  // сукупні продукти
  const requiredProducts = [
    { id: "40888917-599d-4392-b63e-d63ea36cfa3d", quantity: 1 },
    { id: "82cb21de-517a-4c77-9bc7-cd133bef8963", quantity: 1 },
    { id: "3f940b48-f89b-4259-8da4-bb5911ff3750", quantity: 1 },
    { id: "37a41aa4-ebfd-4de8-b21a-d08239558e14", quantity: 1 },
  ];
  // fullOrder — це повне замовлення.
  const fullOrder = orders.length > 0 ? [...orders, ...requiredProducts] : [...orders];
  // робимо фільтр, що потрібно відрендерити в кошик
  useEffect(() => {
    const result = sets.filter(set =>
      fullOrder.some(order => order.id === set._id)
    );
    setFilteredSets(result);
  }, [orders]);
  //функція для онулення кошика
  const clearCart = () => {
    setOrders([]);
    setFilteredSets([]); // обнуляємо також і filteredSets
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
            <CartItem item={item} setOrders={setOrders} orders={fullOrder}/>
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

import React from 'react';
import { useParams } from 'react-router-dom';
import OrderCard from '../components/OrderCard/OrderCard';

const Order = ({sets, setOrders, orders, prod}) => {
 

  const {id} = useParams();

  return (
    <div className='container'>
      <OrderCard sets={sets} id={id} setOrders={setOrders} orders={orders} prod={prod}/>
    </div>
  )
}

export default Order

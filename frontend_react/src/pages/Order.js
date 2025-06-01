import React from 'react';
import { useParams } from 'react-router-dom';
import OrderCard from '../components/OrderCard/OrderCard';
import Recommendations from '../components/Recommendations/Recommendations';

const Order = ({sets, setOrders, orders, prod}) => {
 

  const {id} = useParams();

  return (
    <>
      <OrderCard sets={sets} id={id} setOrders={setOrders} orders={orders} prod={prod}/>
      <Recommendations />
    </>
  )
}

export default Order

import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import FinalizeOrderItem from "./FinalizeOrderItem";
import FinalizeAmount from "./FinalizeAmount";


const FinalizeOrder = ({ sets, orders}) => {

   const [filteredSets, setFilteredSets] = useState([]);
   const [show, setShow] = useState(true)
    
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
  const totalAmount = filteredSets.reduce((sum, item) => {
  const order = orders.find(o => o.id === item._id);
  const quantity = order ? order.quantity : 0;
  return sum + ( item.price ? item.price : item.oldPrice) * quantity;
}, 0);
  return (
    <div className='finalize__order'>
      <div className="finalize__order-header">
        <h3 className="finalize__order-title">Моє замовлення</h3>
        <Link
          to='/cart'
          className="finalize__order-edit"
          >
          Редагувати
        </Link>
      </div>
      <div className="finalize__order-items">
        {(show ? sortedFilteredSets.slice(0, 1) : sortedFilteredSets).map(item => (
          <FinalizeOrderItem item={item} orders={orders} show={show} setShow={setShow} />
        ))}
      </div>
      <FinalizeAmount totalAmount={totalAmount} />



    </div>
  )
}

export default FinalizeOrder;

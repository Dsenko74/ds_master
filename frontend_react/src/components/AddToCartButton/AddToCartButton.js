import React, {useEffect, useState} from 'react';

import './AddToCartButton.scss';


const AddToCartButton = ({ setOrders, productId, orders }) => {
  const item = orders.find(item => item.id === productId);
  const quantity = item ? item.quantity : 0;
  const isEditing = quantity > 0;

  const handleIncrement = () => {
    setOrders(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing) {
        return prev.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { id: productId, quantity: 1 }];
      }
    });
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setOrders(prev =>
        prev.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    } else {
      setOrders(prev => prev.filter(item => item.id !== productId));
    }
  };

  return (
    <button className={`btn ${isEditing ? 'btn-active' : ''}`} onClick={!isEditing ? handleIncrement : undefined}>
      {isEditing ? (
        <div>
          <span onClick={handleDecrement} className='btn__control'>-</span>
          <span>{quantity} шт</span>
          <span onClick={handleIncrement} className='btn__control'>+</span>
        </div>
      ) : (
        ' в кошик'
      )}
    </button>
  );
};




export default AddToCartButton

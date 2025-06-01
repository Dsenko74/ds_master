import React from 'react';
import  Card  from '../Card/Card';
import './Cards.scss'


const Cards = ({ sets, setOrders, orders, prod }) => {
    const filters = {
    'All': () => sets.slice(0, 8),
    'акціі': () => sets.filter(item => item.action === true),
    'новинки': () => sets.filter(item => item.novelty === true),
  };
  console.log(prod);
  const visibleItems =
  filters[prod]?.() ||
  sets.filter(item => item.categories?.toLowerCase() === prod.toLowerCase());
  //const visibleItems = filters[prod]?.() || sets.filter(item => item.categories === prod);
  console.log(visibleItems)
 

  return (
      <div className="cards__items">
        {visibleItems.map(item => (
          <Card key={item._id} item={item} setOrders={setOrders} orders={orders}/>
        ))}
      </div>
  );
};

export default Cards;
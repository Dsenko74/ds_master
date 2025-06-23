import React from 'react';
import HorizontalScrollbar from '../HorizontalScrollbar/HorizontalScrollbar';

const OrderCardRecommendations = ({visibleItems, renderItem }) => {
  return (
      <div className="order-card__recomend">
        <h3 className="order-card__recomend-title">
          Рекомендуємо спробувати:
        </h3>
        <div className="order-card__recomend-items">
          <HorizontalScrollbar 
            visibleItems={visibleItems}
            renderItem={renderItem}
            />
        </div>
      </div>
  )
}

export default OrderCardRecommendations;

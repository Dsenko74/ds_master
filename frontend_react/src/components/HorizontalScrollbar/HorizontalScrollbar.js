import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Card from '../Card/Card';
import RightArrowIcon from '../../assets/icon/right-arrow.png';
import LeftArrowIcon from '../../assets/icon/left-arrow.png';

import './HorizontalScrollbar.scss'

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <p onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </p>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <p onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </p>
  );
};

const HorizontalScrollbar = ({ productId, sets, setOrders, orders, prod}) => {
  // потрібно переробити логіку виводу рекомендацій
  //можливо використовувати щось біль сучасніше ніж ScrollMenu
  // ScrollMenu не підтримує gap
    const filters = {
    'All': () => sets.slice(0, 8),
    'акціі': () => sets.filter(item => item.action === true),
    'новинки': () => sets.filter(item => item.novelty === true),
  };

    const visibleItems = filters[prod]?.() || sets.filter(item => item.categories === prod);


  return (
      <ScrollMenu
        LeftArrow={LeftArrow} 
        RightArrow={RightArrow}
        scrollBy={1}
        >
          {visibleItems.map((item) => (
            <div className='horizontal__item'
              key={item._id}
              itemId={item._id}
            >
              <Card item={item} setOrders={setOrders} orders={orders} />
            </div>

          ))}
      </ScrollMenu>

  )
}




export default HorizontalScrollbar;

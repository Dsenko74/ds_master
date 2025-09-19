import React, { useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card/Card";
import OrderCardContent from "./OrderCardContent";
import OrderCardRecommendations from "./OrderCardRecommendations";

import "./OrderCard.scss";

// необхідно доробити, по кліку на картинку з картки з  меню Рекомендуємо спробувати, екран скролився вверх.
const OrderCard = ({ sets, id, setOrders, orders, prod }) => {
  //використовується щоб спрацювала кнопка Назад
  const navigate = useNavigate();
  //У HorizontalScrollbar можна було б передати і одразу. але GPT каже що так оптимально. Треба розібратись
  //renderCard це елемент, який буде рендеритись в HorizontalScrollbar
  const renderCard = useCallback(
    (item) => <Card item={item} setOrders={setOrders} orders={orders} />,
    [setOrders, orders]
  );

  //visibleItems це отфільтровані продукти, якщо All або акціі або новинки, якщо ні то фільтрує по prod
  // кешируємо значення
  const visibleItems = useMemo(() => {
    if (!sets || sets.length === 0 || !id) return [];
    if (prod === "All") return sets.slice(0, 8);
    if (prod === "акціі") return sets.filter((item) => item.action);
    if (prod === "новинки") return sets.filter((item) => item.novelty);
    return sets.filter(
      (item) => item.categories.toLowerCase() === prod.toLowerCase()
    );
  }, [sets, prod]);
  // використовуємо useMemo щоб при кожному рендері компонта не переобчислювати значення currentItem
  const currentItem = useMemo(() => {
    if (!sets || sets.length === 0 || !id) return null;
    return sets.find((item) => item._id === id);
  }, [sets, id]);
  if (!currentItem) return null;
  const { title, imageUrl } = currentItem;

  const handleBack = () => navigate(-1);

  return (
    <div className="order-card">
      <div className="order-card__back">
        <button onClick={handleBack}>Назад</button>
      </div>
      <div className="order-card__block">
        <div className="order-card__image">
          <img src={imageUrl} alt={title} />
        </div>
        <OrderCardContent
          currentItem={currentItem}
          setOrders={setOrders}
          orders={orders}
        />
      </div>
      <OrderCardRecommendations
        visibleItems={visibleItems}
        renderItem={renderCard}
      />
    </div>
  );
};

export default OrderCard;

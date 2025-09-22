import { useState } from "react";

const FinalizeAmount = ({ totalAmount }) => {
  const [promo, setPromo] = useState(true);
  // у компоненті FinalizeForm для submit має бути кнопка. в неї display: none. Кнопка всередені цього компонента по кліку робить за допомогою handleClick клік на кнопці всередені  FinalizeForm

  const handleClick = (e) => {
    const btn = document.getElementById("submit-btn");
    if (btn) btn.click();
  };

  const deliveryPrice = totalAmount < 700 ? 80 : 0;

  return (
    <div className="finalize__amount">
      <div className="cart-order__amount">
        <span className="cart-order__amout-type">Товари</span>
        <span className="cart-order__amout-value">{`${totalAmount} грн`}</span>
      </div>
      {totalAmount < 700 && (
        <div className="cart-order__amount">
          <p className="cart-order__amout-type">Доставка</p>
          <p className="cart-order__amout-value">{`${deliveryPrice} грн`} </p>
        </div>
      )}
      <div className="finalize__amount-general">
        <span className="finalize__amount-subtitle">Разом</span>
        <span className="finalize__amount-total">{`${
          totalAmount + deliveryPrice
        } грн`}</span>
      </div>
      <button
        className="finalize__amount-promo"
        onClick={(e) => setPromo(!promo)}
      >
        {promo ? `У мене є промокод` : `Не використовувати промокод`}
      </button>
      <button type="button" className="cart-order__btn" onClick={handleClick}>
        Замовити
      </button>
    </div>
  );
};

export default FinalizeAmount;

import React from "react";
import "./Offers.scss";

const Offers = ({ novelty, discount, action }) => {
  return (
    <div className="offers">
      {novelty && <button className="offers__novelty"> Новинка🔥 </button>}
      {discount && (
        <button className="offers__discount"> {`Знижка ${discount} %`} </button>
      )}
      {action && <button className="offers__discount"> Акція</button>}
    </div>
  );
};

export default Offers;

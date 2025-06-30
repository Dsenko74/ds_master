import React from 'react'

const FinalizeDelivery = ({setDelivery, delivery}) => {
  return (
          <div className="finalize__delivery">
            <h3 className="finalize__delivery-title">Тип замовлення</h3>
            <div className="finalize__delivery-btns">
              <button 
                className={`finalize__delivery-btn ${delivery ? '' : 'active'}`}
                onClick={() => setDelivery(false)}
                >Самовиніс</button>
              <button 
                className={`finalize__delivery-btn ${delivery ? 'active' : ''}`}
                onClick={() => setDelivery(true)}
              >Доставка</button>
            </div>
          </div>
  )
}

export default FinalizeDelivery

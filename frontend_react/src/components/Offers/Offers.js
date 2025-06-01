import React from 'react'
import './Offers.scss';


const  Offers = ({novelty, discount, action}) => {
  return (
    <div className='offers'>
        {novelty ? <button className='offers__novelty'> Новинка🔥 </button>: null}
        {discount ? <button className='offers__discount'> {`Знижка ${discount} %`} </button>: null}
        {action ? <button className='offers__discount'> Акція</button>: null}
    </div>
  )
}

export default Offers

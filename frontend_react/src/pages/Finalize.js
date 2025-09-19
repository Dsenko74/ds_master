import React, {useState} from 'react';
import FinalizeDelivery from '../components/Finalize/FinalizeDelivery';



import  './Finalize.scss';
import FinalizeForm from '../components/Finalize/FinalizeForm';
import FinalizeOrder from '../components/Finalize/FinalizeOrder';

const Finalize = ({ sets, orders}) => {
  const [delivery, setDelivery] = useState(true);

  return (
    <div className='finalize container'>
      <div className="finalize__body">
        <div className="finalize__left">
          <FinalizeDelivery
            delivery={delivery}
            setDelivery={setDelivery}
            />
          <FinalizeForm delivery={delivery} />
        </div>
        <div className="finalize__right">
          <FinalizeOrder sets={sets}  orders={orders}/>
        </div>
      </div>
    </div>
  )
}

export default Finalize;

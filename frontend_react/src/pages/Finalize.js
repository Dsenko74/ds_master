import React, {useState} from 'react';
import FinalizeDelivery from '../components/Finalize/FinalizeDelivery';



import  './Finalize.scss';
import FinalizeForm from '../components/Finalize/FinalizeForm';

const Finalize = () => {
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
        <div className="finalize__right"></div>
      </div>
    </div>
  )
}

export default Finalize;

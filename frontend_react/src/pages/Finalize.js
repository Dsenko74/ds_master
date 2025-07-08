import React, {useState} from 'react';
// import { Formik, Field, Form, useFormikContext } from 'formik';
// import * as Yup from 'yup';
import FinalizeDelivery from '../components/Finalize/FinalizeDelivery';
// import FinalizeTextInput from '../components/Finalize/FinalizeTextInput';
// import FinalizeCheckbox from '../components/Finalize/FinalizeCheckbox';
// import FinalizeConditionalFields from '../components/Finalize/FinalizeConditionalFields';
// import FinalizeButtons from '../components/Finalize/FinalizeButtons';
// import FinalizeRadioGroup from '../components/Finalize/FinalizeRadioGroup';
// import ImageCard from '../assets/icon/card.svg';
// import ImageGoogle from '../assets/icon/google-pay.svg';
// import ImageCash from '../assets/icon/cash.svg';


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
          <FinalizeForm />
        </div>
        <div className="finalize__right"></div>
      </div>
    </div>
  )
}

export default Finalize;

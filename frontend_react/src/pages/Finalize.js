import React, {useState} from 'react';
import { Formik, Field, Form,} from 'formik';
import * as Yup from 'yup';

import  './Finalize.scss';
import FinalizeDelivery from '../components/Finalize/FinalizeDelivery';
import FinalizeTextInput from '../components/Finalize/FinalizeTextInput';

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
          <Formik
              initialValues = {{
                  street: '',
                  house: '',
                  intercom: '',
                  terms: false
              }}
              validationSchema = {Yup.object({
                  street: Yup.string()
                          .min(2, 'Це обовязкове поле')
                          .required('Це обовязкове поле'),
                  house: Yup.number()
                          .typeError('Повинно бути числом')
                          .required('Це обовязкове поле')
                          .min(1, 'Не менше 1'),
                  intercom: Yup.number()
                          .typeError('Повинно бути числом')
                          .required('Це обовязкове поле')
                          .test('minDigits', 'Не менше 3 розрядів', value => {
                            if (!value && value !== 0) return false; // required спрацює, але так надійніше
                            return value.toString().length >= 3;
                          }),                        
                  terms: Yup.boolean()
                          .required('Необходимо согласие')
                          .oneOf([true], "Необходимо согласие")
              })}
              onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
          >
              <Form >
                <div className="finalize__adress">
                  <FinalizeTextInput
                      label="Вулиця *"
                      id="street"
                      name="street"
                      type="text"
                      placeholder=" "
                      autoComplete="off"
                  />
                  <FinalizeTextInput
                      label="Дім *"
                      id="house"
                      name="house"
                      type="number"
                      placeholder=" "
                      autoComplete="off"
                  />
                  <FinalizeTextInput
                      label="Домофон "
                      id="intercom"
                      name="intercom"
                      type="number"
                      placeholder=" "
                      autoComplete="off"
                  />                  
                </div>
                 <button type="submit">відправити</button>

              </Form>
          </Formik>


        </div>
        <div className="finalize__right"></div>
      </div>
    </div>
  )
}

export default Finalize;

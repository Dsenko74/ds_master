import React, {useState} from 'react';
import { Formik, Field, Form, useFormikContext } from 'formik';
import * as Yup from 'yup';
import FinalizeDelivery from '../components/Finalize/FinalizeDelivery';
import FinalizeTextInput from '../components/Finalize/FinalizeTextInput';
import FinalizeCheckbox from '../components/Finalize/FinalizeCheckbox';
import FinalizeConditionalFields from '../components/Finalize/FinalizeConditionalFields';
import FinalizeButtons from '../components/Finalize/FinalizeButtons';
import FinalizeRadioGroup from '../components/Finalize/FinalizeRadioGroup';
import ImageCard from '../assets/icon/card.svg';
import ImageGoogle from '../assets/icon/google-pay.svg';
import ImageCash from '../assets/icon/cash.svg';


import  './Finalize.scss';

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
                  name: '',
                  apartment: '',
                  entrance: '',
                  floor: '',
                  deliveryType: 'ASAP',
                  deliveryDate: new Date().toISOString().split('T')[0],
                  deliveryTime: "",
                  payment: 'online',
                  terms: false
              }}
              validationSchema = {Yup.object({
                  street: Yup.string()
                          .min(4, 'Не менше 4 символів')
                          .required('Це обовязкове поле'),
                  house: Yup.number()
                          .typeError('Повинно бути числом')
                          .required('Це обовязкове поле')
                          .min(1, 'Не менше 1'),
                  apartment: Yup.number()
                          .typeError('Повинно бути числом')
                          .when('terms', {
                            is: false,
                            then: (schema) =>
                              schema
                                .required('Це обовязкове поле')
                                .min(1, 'Не менше 1'),
                            otherwise: (schema) => schema.notRequired(),
                            })
                          .min(1, 'Не менше 1'),
                  entrance: Yup.number()
                          .typeError('Повинно бути числом')
                          .min(1, 'Не менше 1'),
                  floor: Yup.number()
                          .typeError('Повинно бути числом')
                          .min(1, 'Не менше 1'),
                  intercom: Yup.number()
                          .typeError('Повинно бути числом')
                          .when('terms', {
                            is: false,
                            then: (schema) =>
                              schema
                                .required('Це обовязкове поле')
                                .test(
                                  'minDigits',
                                  'Не менше 3 розрядів',
                                  (value) => {
                                    if (value === undefined || value === null) return false;
                                    return value.toString().length >= 3;
                                  }
                                ),
                            otherwise: (schema) => schema.notRequired(),
                          }), 
                  deliveryTime: Yup.string()
                    .when('deliveryType', {
                      is: 'time',
                      then: (schema) => schema.required('Оберіть час доставки'),
                      otherwise: (schema) => schema.notRequired(),
                    }),

                  // terms: Yup.boolean()
                  //         .required('Необходимо согласие')
                  //         .oneOf([true], "Необходимо согласие")
              })}
              onSubmit = {values => console.log(JSON.stringify(values, null, 2))}
          >
              <Form 
                className='finalize__form'>
                <div className="finalize__adress">
                  <div className="finalize__adress-wrapper">
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
                    <FinalizeConditionalFields/>
                  </div>
                  <div style={{marginBottom: '24px'}}>
                    <FinalizeCheckbox
                      name="terms"
                    >
                      Це приватний будинок
                    </FinalizeCheckbox>
                  </div>
                  <FinalizeTextInput
                      label="Назва"
                      id="name"
                      name="name"
                      type="text"
                      placeholder=" "
                      autoComplete="off"
                  />
                  <FinalizeButtons/>
                </div>
                <div className="finalize__conditions">
                  <FinalizeRadioGroup
                    name="deliveryType"
                      options={[
                        { label: 'Якомога швидше', value: 'ASAP' },
                        { label: 'Доставимо на певну годину', value: 'time' },
                      ]}
                    /> 
                </div>
                <div className="finalize__payment">
                  <FinalizeRadioGroup
                    name="payment"
                      options={[
                        { label: 'Онлайн-оплата карткою', value: 'online', imageUrl: ImageCard },
                        { label: 'Google pay', value: 'googlePay', imageUrl: ImageGoogle  },
                        { label: 'Карткою при отриманні', value: 'cardAtHome', imageUrl: ImageCard  },
                        { label: 'Готівкою', value: 'cash', imageUrl: ImageCash  },
                      ]}
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

import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FinalizeAddressFields from './FinalizeAddressFields';
import FinalizeDeliveryType from './FinalizeDeliveryType';
import FinalizePayment from './FinalizePayment';
import FinalizeSubmitButton from './FinalizeSubmitButton';

const FinalizeForm = () => {
  return (
    <Formik
      initialValues={{
        street: '',
        house: '',
        intercom: '',
        name: '',
        apartment: '',
        entrance: '',
        floor: '',
        deliveryType: 'ASAP',
        deliveryDate: new Date().toISOString().split('T')[0],
        deliveryTime: '',
        payment: 'online',
        terms: false,
      }}
      validationSchema={Yup.object({
        street: Yup.string().min(4, 'Не менше 4 символів').required('Це обовязкове поле'),
        house: Yup.number()
          .typeError('Повинно бути числом')
          .required('Це обовязкове поле')
          .min(1, 'Не менше 1'),
        apartment: Yup.number()
          .typeError('Повинно бути числом')
          .when('terms', {
            is: false,
            then: (schema) => schema.required('Це обовязкове поле').min(1, 'Не менше 1'),
            otherwise: (schema) => schema.notRequired(),
          })
          .min(1, 'Не менше 1'),
        entrance: Yup.number().typeError('Повинно бути числом').min(1, 'Не менше 1'),
        floor: Yup.number().typeError('Повинно бути числом').min(1, 'Не менше 1'),
        intercom: Yup.number()
          .typeError('Повинно бути числом')
          .when('terms', {
            is: false,
            then: (schema) =>
              schema
                .required('Це обовязкове поле')
                .test('minDigits', 'Не менше 3 розрядів', (value) => {
                  if (value === undefined || value === null) return false;
                  return value.toString().length >= 3;
                }),
            otherwise: (schema) => schema.notRequired(),
          }),
        deliveryTime: Yup.string().when('deliveryType', {
          is: 'time',
          then: (schema) => schema.required('Оберіть час доставки'),
          otherwise: (schema) => schema.notRequired(),
        }),
      })}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="finalize__form">
        <FinalizeAddressFields />
        <FinalizeDeliveryType />
        <FinalizePayment />
        <FinalizeSubmitButton />
      </Form>
    </Formik>
  );
};

export default FinalizeForm;

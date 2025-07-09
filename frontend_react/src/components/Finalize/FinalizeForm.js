import React, {useMemo} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FinalizeAddressFields from './FinalizeAddressFields';
import FinalizeDeliveryType from './FinalizeDeliveryType';
import FinalizePayment from './FinalizePayment';
import FinalizeSubmitButton from './FinalizeSubmitButton';
import FinalizePickup from './FinalizePickup';

const FinalizeForm = ({delivery}) => {
  console.log(delivery)
  const getValidationSchema = (delivery) => {
    if (delivery) {
      // доставка — валідуємо адресу
      return Yup.object({
        street: Yup.string().min(4, 'Не менше 4 символів').required('Це обовязкове поле'),
        house: Yup.number()
          .typeError('Повинно бути числом')
          .required('Це обовязкове поле')
          .min(1, 'Не менше 1'),
        apartment: Yup.number()
          .typeError('Повинно бути числом')
          .required('Це обовязкове поле')
          .min(1, 'Не менше 1'),
        entrance: Yup.number().typeError('Повинно бути числом').min(1, 'Не менше 1').notRequired(),
        floor: Yup.number().typeError('Повинно бути числом').min(1, 'Не менше 1').notRequired(),
        intercom: Yup.number()
          .typeError('Повинно бути числом')
          .required('Це обовязкове поле')
          .test('minDigits', 'Не менше 3 розрядів', (value) => {
            if (value === undefined || value === null) return false;
            return value.toString().length >= 3;
          }),
        deliveryTime: Yup.string().when('deliveryType', {
          is: 'time',
          then: (schema) => schema.required('Оберіть час доставки'),
          otherwise: (schema) => schema.notRequired(),
        }),
        // інші поля, що потрібні при доставці
      });
    } else {
      // самовивіз — валідуємо лише потрібні поля
      return Yup.object({
        pickupLocation: Yup.string().required('Оберіть ресторан для самовивозу'),
        // інші поля для самовивозу, якщо потрібно
      });
    }
  };

  const validationSchema = useMemo(() => getValidationSchema(delivery), [delivery]);

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
        pickupSearch: '',
        pickupLocation: '', 
        privateHome: false,
      }}
      // validationSchema={Yup.object({
      //   street: Yup.string().min(4, 'Не менше 4 символів').required('Це обовязкове поле'),
      //   house: Yup.number()
      //     .typeError('Повинно бути числом')
      //     .required('Це обовязкове поле')
      //     .min(1, 'Не менше 1'),
      //   apartment: Yup.number()
      //     .typeError('Повинно бути числом')
      //     .when('privateHome', {
      //       is: false,
      //       then: (schema) => schema.required('Це обовязкове поле').min(1, 'Не менше 1'),
      //       otherwise: (schema) => schema.notRequired(),
      //     })
      //     .min(1, 'Не менше 1'),
      //   entrance: Yup.number().typeError('Повинно бути числом').min(1, 'Не менше 1'),
      //   floor: Yup.number().typeError('Повинно бути числом').min(1, 'Не менше 1'),
      //   intercom: Yup.number()
      //     .typeError('Повинно бути числом')
      //     .when('privateHome', {
      //       is: false,
      //       then: (schema) =>
      //         schema
      //           .required('Це обовязкове поле')
      //           .test('minDigits', 'Не менше 3 розрядів', (value) => {
      //             if (value === undefined || value === null) return false;
      //             return value.toString().length >= 3;
      //           }),
      //       otherwise: (schema) => schema.notRequired(),
      //     }),
      //   deliveryTime: Yup.string().when('deliveryType', {
      //     is: 'time',
      //     then: (schema) => schema.required('Оберіть час доставки'),
      //     otherwise: (schema) => schema.notRequired(),
      //   }),
      // })}
      validationSchema={validationSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="finalize__form">
        {delivery ? <FinalizeAddressFields /> : <FinalizePickup/>}
        <FinalizeDeliveryType />
        <FinalizePayment />
        <FinalizeSubmitButton />
      </Form>
    </Formik>
  );
};

export default FinalizeForm;

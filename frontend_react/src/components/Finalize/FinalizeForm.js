import React, {useMemo} from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FinalizeAddressFields from './FinalizeAddressFields';
import FinalizeDeliveryType from './FinalizeDeliveryType';
import FinalizePayment from './FinalizePayment';
import FinalizeSubmitButton from './FinalizeSubmitButton';
import FinalizePickup from './FinalizePickup';
import FinalizePrivacy from './FinalizePrivacy';

const FinalizeForm = ({delivery}) => {
  const getValidationSchema = (delivery) => {
    if (delivery) {
      // доставка — валідуємо адресу
      return Yup.object({
                privacyPolicy: Yup.boolean()
                  .oneOf([true], 'Це обов’язкове поле'),
                street: Yup.string().min(4, 'Не менше 4 символів').required('Це обовязкове поле'),
                house: Yup.number()
                  .typeError('Повинно бути числом')
                  .required('Це обовязкове поле')
                  .min(1, 'Не менше 1'),
                apartment: Yup.number()
                  .typeError('Повинно бути числом')
                  .when('privateHome', {
                    is: false,
                    then: (schema) => schema.required('Це обовязкове поле').min(1, 'Не менше 1'),
                    otherwise: (schema) => schema.notRequired(),
                  }),
                entrance: Yup.number()
                  .typeError('Повинно бути числом')
                  .when('privateHome', {
                    is: false,
                    then: (schema) => schema.required('Це обовязкове поле').min(1, 'Не менше 1'),
                    otherwise: (schema) => schema.notRequired(),
                  }),
                floor: Yup.number()
                  .typeError('Повинно бути числом')
                  .when('privateHome', {
                    is: false,
                    then: (schema) => schema.required('Це обовязкове поле').min(1, 'Не менше 1'),
                    otherwise: (schema) => schema.notRequired(),
                  }),
                intercom: Yup.number()
                  .typeError('Повинно бути числом')
                  .when('privateHome', {
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
        // інші поля, що потрібні при доставці
      });
    } else {
      // самовивіз — валідуємо лише потрібні поля
      return Yup.object({
        pickupLocation: Yup.string().required('Оберіть ресторан для самовивозу'),
        deliveryTime: Yup.string().when('deliveryType', {
          is: 'time',
          then: (schema) => schema.required('Оберіть час доставки'),
          otherwise: (schema) => schema.notRequired(),
           }),
        privacyPolicy: Yup.boolean()
              .oneOf([true], 'Це обов’язкове поле'),           
        // інші поля для самовивозу, якщо потрібно
      });
    }
  };

  const validationSchema = useMemo(() => getValidationSchema(delivery), [delivery]);

  return (
    <Formik
      key={delivery ? 'delivery' : "pickup"}
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
        privacyPolicy: false,
      }}

      validationSchema={validationSchema}
      onSubmit={(values) => console.log(JSON.stringify(values, null, 2))}
    >
      <Form className="finalize__form">
        {delivery ? <FinalizeAddressFields /> : <FinalizePickup/>}
        <FinalizeDeliveryType />
        <FinalizePayment />
        <FinalizePrivacy />
        <FinalizeSubmitButton />
      </Form>
    </Formik>
  );
};

export default FinalizeForm;

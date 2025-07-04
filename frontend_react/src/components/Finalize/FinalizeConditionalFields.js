import React from 'react';
import { useFormikContext } from 'formik';
import FinalizeTextInput from './FinalizeTextInput';

const FinalizeConditionalFields = () => {
  const { values } = useFormikContext();

  return (
    <>
      {!values.terms && (
        <>
          <FinalizeTextInput
              label="Домофон "
              id="intercom"
              name="intercom"
              type="number"
              placeholder=" "
              autoComplete="off"
          />  
          <FinalizeTextInput
              label="Квартира "
              id="apartment"
              name="apartment"
              type="number"
              placeholder=" "
              autoComplete="off"
          /> 
          <FinalizeTextInput
              label="Під'їзд"
              id="entrance"
              name="entrance"
              type="number"
              placeholder=" "
              autoComplete="off"
          /> 
          <FinalizeTextInput
              label="Поверх "
              id="floor"
              name="floor"
              type="number"
              placeholder=" "
              autoComplete="off"
          />
        </>
      )}
    </>
  );
};

export default FinalizeConditionalFields

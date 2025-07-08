import React from 'react';
import FinalizeTextInput from './FinalizeTextInput';
import FinalizeCheckbox from './FinalizeCheckbox';
import FinalizeConditionalFields from './FinalizeConditionalFields';
import FinalizeButtons from './FinalizeButtons';

const FinalizeAddressFields = () => {
  return (
    <div className="finalize__adress">
      <div className="finalize__adress-wrapper">
        <FinalizeTextInput label="Вулиця *" id="street" name="street" type="text" placeholder=" " autoComplete="off" />
        <FinalizeTextInput label="Дім *" id="house" name="house" type="number" placeholder=" " autoComplete="off" />
        <FinalizeConditionalFields />
      </div>
      <div style={{ marginBottom: '24px' }}>
        <FinalizeCheckbox name="terms">Це приватний будинок</FinalizeCheckbox>
      </div>
      <FinalizeTextInput label="Назва" id="name" name="name" type="text" placeholder=" " autoComplete="off" />
      <FinalizeButtons />
    </div>
  );
};

export default FinalizeAddressFields;

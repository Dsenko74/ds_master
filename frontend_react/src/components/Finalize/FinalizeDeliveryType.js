import React from 'react';
import FinalizeRadioGroup from './FinalizeRadioGroup';

const FinalizeDeliveryType = () => {
  return (
    <div className="finalize__conditions">
      <FinalizeRadioGroup
        name="deliveryType"
        options={[
          { label: 'Якомога швидше', value: 'ASAP' },
          { label: 'Доставимо на певну годину', value: 'time' },
        ]}
      />
    </div>
  );
};

export default FinalizeDeliveryType;

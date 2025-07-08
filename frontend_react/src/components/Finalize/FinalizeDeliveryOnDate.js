import React from 'react';
import FinalizeTextInput from './FinalizeTextInput';
import FinalizeTimeSelect from './FinalizeTimeSelect';

function getToday() {
  const today = new Date();
  return today.toISOString().split('T')[0]; // формат YYYY-MM-DD
}

function getMonthAhead() {
  const date = new Date();
  date.setMonth(date.getMonth() + 1);
  return date.toISOString().split('T')[0]; // формат YYYY-MM-DD
}

const FinalizeDeliveryOnDate = () => {
  return (
    <div className='delivery-ondate'>
      <FinalizeTextInput
        label=''
        id="deliveryDate"
        name="deliveryDate"
        type="date"
        placeholder=" "
        autoComplete="off"
        min={getToday()}
        max={getMonthAhead()}
      />
      <FinalizeTimeSelect name="deliveryTime" />
    </div>
  )
}

export default FinalizeDeliveryOnDate;

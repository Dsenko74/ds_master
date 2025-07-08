import React from 'react';
import FinalizeRadioGroup from './FinalizeRadioGroup';
import ImageCard from '../../assets/icon/card.svg';
import ImageGoogle from '../../assets/icon/google-pay.svg';
import ImageCash from '../../assets/icon/cash.svg';

const FinalizePayment = () => {
  return (
    <div className="finalize__payment">
      <FinalizeRadioGroup
        name="payment"
        options={[
          { label: 'Онлайн-оплата карткою', value: 'online', imageUrl: ImageCard },
          { label: 'Google pay', value: 'googlePay', imageUrl: ImageGoogle },
          { label: 'Карткою при отриманні', value: 'cardAtHome', imageUrl: ImageCard },
          { label: 'Готівкою', value: 'cash', imageUrl: ImageCash },
        ]}
      />
    </div>
  );
};

export default FinalizePayment;

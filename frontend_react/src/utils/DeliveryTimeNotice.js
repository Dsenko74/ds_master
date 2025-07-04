import React from 'react';

function roundToNearestHalfHour(date) {
  const ms = 1000 * 60 * 30;
  return new Date(Math.ceil(date.getTime() / ms) * ms);
}

function formatInterval(startDate, minutes = 15) {
  const endDate = new Date(startDate.getTime() + minutes * 60 * 1000);

  const format = (date) =>
    date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    });

  return `${format(startDate)} - ${format(endDate)}`;
}

const DeliveryTimeNotice = () => {
  const now = new Date();
  const roundedStart = roundToNearestHalfHour(new Date(now.getTime() + 30 * 60000));
  const interval = formatInterval(roundedStart, 15);

  return (
    <span className="delivery-notice">
      Привеземо як нашвидше у проміжок {interval}
    </span>
  );
};

export default DeliveryTimeNotice;
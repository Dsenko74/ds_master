import { useField } from 'formik';
import DeliveryTimeNotice from '../../utils/DeliveryTimeNotice';
import FinalizeDeliveryOnDate from './FinalizeDeliveryOnDate';

const FinalizeRadioGroup = ({ name, options }) => {
  const [field] = useField(name);

  return (
    <div className="radio-group">
      {options.map((opt) => (
        <label key={opt.value} className="radio-option">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={field.value === opt.value}
            onChange={() => field.onChange({ target: { name, value: opt.value } })}
          />

          <span className="custom-radio" />
          {opt.imageUrl &&<div className="radio-icon">
            <img src={opt.imageUrl} alt="icon" />
          </div>}
          {opt.label}
          {opt.value === 'ASAP' && field.value === 'ASAP' && (
           <DeliveryTimeNotice />
          )}
        </label>
      ))}
      {field.value === 'time' && 
        <FinalizeDeliveryOnDate />
          }
    </div>
  );
};

export default FinalizeRadioGroup

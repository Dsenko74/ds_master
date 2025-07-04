import { useField } from 'formik';
import DeliveryTimeNotice from '../../utils/DeliveryTimeNotice';

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
          {opt.label}
          {opt.value === 'ASAP' && field.value === 'ASAP' && (
           <DeliveryTimeNotice />
          )}
        </label>
      ))}
    </div>
  );
};

export default FinalizeRadioGroup

import React from 'react';
import { useField } from 'formik';

const FinalizePickupLocation = ({ name, options }) => {
  const [field, meta] = useField(name);

  //якщо вибрали ресторан(selectedOptions), тоді рендереться тільки він(visibleOptions)
  const selectedOptions = options.find(opt =>opt.value === field.value);
  const visibleOptions = selectedOptions ? [selectedOptions] : options;
  //якщо немає співпадіння по пошуку тоді рендеремо це
  if (!options || options.length === 0) {
  return (
    <div className="finalize__pickup-empty">
     Не знайдено ресторанів
    </div>
    );
  }

  return (
    <div 
      className="finalize__pickup-items"   style={{
      overflowY: field.value ? 'hidden' : 'scroll',//поле field.value існує тільки коли ресторан обраний
    }}>
      {visibleOptions.map((opt) => (
        <div key={opt.value} className='finalize__pickup-item'>
          <label  className="radio-option">
            <input
              type="radio"
              name={name}
              value={opt.value}
              checked={field.value === opt.value}
              onChange={() => field.onChange({ target: { name, value: opt.value } })}
            />
           { field.value !== opt.value && <span className="custom-radio" />}
            <div className='finalize__pickup-location'>
              <h3 className="finalize__pickup-adress">
                {opt.label}
              </h3>
              <p className="finalize__pickup-schedule">
                {opt.schedule}
              </p>
            </div>
          </label>
          {meta.touched && meta.error && (
            <div className="error">{meta.error}</div>
          )}
        </div>


      ))} 
    </div>
  );
};

export default FinalizePickupLocation; 

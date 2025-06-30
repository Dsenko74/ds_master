import React from 'react';
import { useField } from 'formik';


const FinalizeTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
;
    return (
      <div className='finalize__input-wrapper'>
        <input 
          {...field} 
          {...props} 
          />
        <label htmlFor={props.name}>{label}</label>
        {meta.touched && meta.error && (
          <div className="error">{meta.error}</div>
        )}
      </div>
    );
};

export default FinalizeTextInput;

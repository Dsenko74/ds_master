import { useFormikContext } from "formik";

const FinalizeButtons = () => {
  const {setFieldValue} = useFormikContext();
  return (
    <div className="finalize__adress-btns">
      <button 
        type="button"
        className="finalize__adress-btn"
        onClick={() => setFieldValue('name', 'Дім')}
        >
          Дім
      </button>
      <button 
        type="button"
        className="finalize__adress-btn"
        onClick={() => setFieldValue('name', 'Робота')}
        >
          Робота
      </button>
      <button 
        type="button"
        className="finalize__adress-btn"
        onClick={() => setFieldValue('name', 'Друзі')}
        >
          Друзі
      </button>
    </div>
  )
}

export default FinalizeButtons

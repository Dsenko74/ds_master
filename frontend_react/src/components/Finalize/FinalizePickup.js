import React, { useState } from 'react';
import { useFormikContext } from 'formik';
import FinalizeTextInput from './FinalizeTextInput'
import FinalizePickupLocation from './FinalizePickupLocation '
import pinGreen from '../../assets/icon/pin-green.svg';

const restaurants = [
  { label: 'Київ, пр-т. Леся Курбаса, 6Г', value: 'kurbasa', schedule: '11:30 - 22:00' },
  { label: 'Київ, пр-т. Червоної Калини 17', value: 'kalyny', schedule: '10:30 - 22:30' },
  { label: 'Київ, Новосілки, вул. Васильківська, 21', value: 'novisilky', schedule: '10:30 - 22:30' },
  { label: 'Київ, пр-т. Оболонський 26', value: 'oboblon', schedule: '10:30 - 21:30' }, 
  { label: 'Київ, вул. Татарська 6', value: 'tatarka', schedule: '10:15 - 22:00' },
  { label: 'Київ, вул. Дорогожицька 2', value: 'dorogozhychy', schedule: '10:30 - 22:30' },
  { label: 'Київ, вул. Борщагівська, 154 А (Аркадія)', value: 'arkadiya', schedule: '10:30 - 22:30' },
  { label: 'Київ, пр-т. Голосіївський 15', value: 'holisiivo', schedule: '10:00 - 22:30' },  
];


const FinalizePickup = () => {
  const [search, setSearch] = useState('');
  const {setFieldValue, values} = useFormikContext();

  // фільтурємо по співпідінню в пошуку
  const filteredRestik = restaurants.filter(r => r.label.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

  const resetPickup = () => {
    setFieldValue('pickupLocation', '');
    setSearch('');
  }

  return (
    <div className='finalize__pickup'>
      <div className="finalize__pickup-wrapper">
        <div className="finalize__pickup-info">
          <h3 className="finalize__pickup-title">
            Aдреси ресторанів
          </h3>
          <button 
            style={!values.pickupLocation ? { backgroundImage: `url(${pinGreen})` } : { backgroundImage: `none` }}
            className="finalize__pickup-btn"
            onClick={resetPickup}
          >
           {!values.pickupLocation ? `На мапі` : `Змінити`}
          </button>
        </div>
        { !values.pickupLocation && <p className="finalize__pickup-tip" >
        Оберіть ресторан для самовивозу
        </p>}

      </div>
    {  !values.pickupLocation &&  <FinalizeTextInput
          label="Пошук ресторану"
          id="pickupSearch"
          name="pickupSearch"
          type="text"
          placeholder=" "
          autoComplete="off"
          value={search}
          onChange={e=> setSearch(e.target.value)}
      /> }
      <FinalizePickupLocation name="pickupLocation" options={filteredRestik} />
    </div>
  )
}

export default FinalizePickup

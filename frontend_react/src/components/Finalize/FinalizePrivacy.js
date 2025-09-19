import React from 'react'
import FinalizeCheckbox from './FinalizeCheckbox'

const FinalizePrivacy = () => {
  return (
    <div className='finalize__privacy'>
      <FinalizeCheckbox
        name='privacyPolicy'
        >
        <div className="finalize__privacy-children">
        Я погоджуюсь з <span>політикою конфіденційності, призначеною для користувача угодою</span> і даю дозвіл на обробку персональних даних.
        </div>

      </FinalizeCheckbox>
      
    </div>
  )
}

export default FinalizePrivacy

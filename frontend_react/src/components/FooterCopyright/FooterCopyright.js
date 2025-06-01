import React from 'react';
import visaIcon from '../../assets/icon/visa-mastercard.svg';
import './FooterCopyright.scss';

const FooterCopyright = () => {
  return (
    <div className='footer-copyright'>
      <span>
        © SUSHI MASTER UA. Усі права захищені
      </span>
      <div>
        <img src={visaIcon} alt="visaIcon" />
      </div>
    </div>
  )
}

export default FooterCopyright

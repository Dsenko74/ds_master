import React from 'react';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import FooterSocial from '../FooterSocial/FooterSocial';
import FooterCopyright from '../FooterCopyright/FooterCopyright';


import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container">
        <FooterNavigation />
        <FooterSocial />
        <FooterCopyright />
      </div>
    </div>
  )
}

export default Footer

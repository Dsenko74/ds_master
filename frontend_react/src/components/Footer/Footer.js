import React from 'react';
import FooterNavigation from '../FooterNavigation/FooterNavigation';
import FooterSocial from '../FooterSocial/FooterSocial';
import FooterCopyright from '../FooterCopyright/FooterCopyright';


import './Footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
      <FooterNavigation />
      <FooterSocial />
      <FooterCopyright />
    </div>
  )
}

export default Footer

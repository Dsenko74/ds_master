import React from 'react';
import FooterMenuItem from './FooterMenuItem';
import './Footer.scss';

import './FooterMenu.scss';



const FooterMenu = ({ title, items, variant }) => {
  return (
    <div className="footer-navigation__menu">
      <h5 className="footer-navigation__title">{title}</h5>
      <ul className="footer-navigation__menu-list">
        {items.map((item, index) => (
          <FooterMenuItem 
            key={index} 
            label={item.label} 
            href={item.href}
            variant={variant} />
        ))}
      </ul>
    </div>


  );
};

export default FooterMenu

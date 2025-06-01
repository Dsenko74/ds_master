import React from 'react';
import facebookIcon  from '../../assets/icon/social/facebook.svg';
import instagramIcon  from '../../assets/icon/social/instagram.svg';
import tiktokIcon  from '../../assets/icon/social/tiktok.svg';
import telegramIcon  from '../../assets/icon/social/telegram-app.svg';
import youtubeIcon  from '../../assets/icon/social/icons8-youtube-50.png';

import './FooterSocial.scss'

const socialLinks = [
  { name: 'Facebook', icon: facebookIcon, href: 'https://facebook.com' },
  { name: 'Instagram', icon: instagramIcon, href: 'https://instagram.com' },
  { name: 'TikTok', icon: tiktokIcon, href: 'https://tiktok.com' },
  { name: 'Telegram', icon: telegramIcon, href: 'https://t.me/yourchannel' },
  { name: 'YouTube', icon: youtubeIcon, href: 'https://youtube.com' },
];
const FooterSocial = () => {
  return (
    <div className='footer-social'>
      {socialLinks.map(({ name, icon, href }) => (
        <a
          key={name}
          href={href}
          className="footer-social__link"
          target="_blank"
          rel="noopener noreferrer"
          >
          <img src={icon} alt={name} />
        </a>
      ))}

    </div>
  )
}

export default FooterSocial;

import React from 'react'
import FooterMenu from './FooterMenu';
import '../Footer/Footer.scss';

const FooterNavigation = () => {
  // треба винести footerMenus в Sanity 
  const footerMenus = [
    {
      title: 'SUSHI MASTER UA',
      items: [
        { label: 'Про компанію', href: '#' },
        { label: 'Відгуки клієнтів', href: '#' },
        { label: 'Акції', href: '#' },
        { label: 'Бонуси, програма лояльності', href: '#' },
      ],
    },
    {
      title: 'Юридична iнформація',
      items: [
        { label: 'Публічна оферта', href: '#' },
        { label: 'Політика конфіденційності', href: '#' },
      ],
    },
    {
      title: 'Доставка та ресторани',
      items: [
        { label: 'Доставка та самовиніс', href: '#' },
        { label: 'Наші ресторани', href: '#' },
      ],
    },
    {
      title: 'Підтримка',
      variant: 'bold',
      items: [
        { label: '0 800 330 333', href: '#' },
        { label: 'TURBOTA@SUSHI-MASTER.UA', href: '#' },
      ],
    },
  ];
  return (
    <div className="footer-navigation">
       {footerMenus.map((menu, index) => (
        <FooterMenu 
          key={index} 
          title={menu.title} 
          items={menu.items}
          variant={menu.variant} />
      ))}
    </div>
  )
}

export default FooterNavigation

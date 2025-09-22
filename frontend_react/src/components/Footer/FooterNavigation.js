// import React from "react";
// import FooterMenu from "./FooterMenu";
// import "../Footer/Footer.scss";

// const FooterNavigation = () => {
//   // треба винести footerMenus в Sanity
//   return (
//     <div className="footer-navigation">
//       {footerMenus.map((menu, index) => (
//         <FooterMenu
//           key={index}
//           title={menu.title}
//           items={menu.items}
//           variant={menu.variant}
//           defaultExpanded={index === 0}
//         />
//       ))}
//     </div>
//   );
// };

// export default FooterNavigation;
import React, { useState } from "react";
import FooterMenu from "./FooterMenu";
import "../Footer/Footer.scss";
// const footerMenus = [
//   {
//     title: "SUSHI MASTER UA",
//     items: [
//       { label: "Про компанію", href: "https://kyiv.sushi-master.ua/" },
//       { label: "Відгуки клієнтів", href: "https://kyiv.sushi-master.ua/" },
//       { label: "Акції", href: "https://kyiv.sushi-master.ua/" },
//       { label: "Бонуси, програма лояльності", href: "https://kyiv.sushi-master.ua/" },
//     ],
//   },
//   {
//     title: "Юридична iнформація",
//     items: [
//       { label: "Публічна оферта", href: "https://kyiv.sushi-master.ua/" },
//       { label: "Політика конфіденційності", href: "https://kyiv.sushi-master.ua/" },
//     ],
//   },
//   {
//     title: "Доставка та ресторани",
//     items: [
//       { label: "Доставка та самовиніс", href: "https://kyiv.sushi-master.ua/" },
//       { label: "Наші ресторани", href: "https://kyiv.sushi-master.ua/" },
//     ],
//   },
//   {
//     title: "Підтримка",
//     variant: "bold",
//     items: [
//       { label: "0 800 330 333", href: "https://kyiv.sushi-master.ua/" },
//       { label: "TURBOTA@SUSHI-MASTER.UA", href: "https://kyiv.sushi-master.ua/" },
//     ],
//   },
// ];

const FooterNavigation = () => {
  const [expanded, setExpanded] = useState(0);

  const footerMenus = [
    {
      title: "SUSHI MASTER UA",
      items: [
        { label: "Про компанію", href: "https://kyiv.sushi-master.ua/" },
        { label: "Відгуки клієнтів", href: "https://kyiv.sushi-master.ua/" },
        { label: "Акції", href: "https://kyiv.sushi-master.ua/" },
        {
          label: "Бонуси, програма лояльності",
          href: "https://kyiv.sushi-master.ua/",
        },
      ],
    },
    {
      title: "Юридична iнформація",
      items: [
        { label: "Публічна оферта", href: "https://kyiv.sushi-master.ua/" },
        {
          label: "Політика конфіденційності",
          href: "https://kyiv.sushi-master.ua/",
        },
      ],
    },
    {
      title: "Доставка та ресторани",
      items: [
        {
          label: "Доставка та самовиніс",
          href: "https://kyiv.sushi-master.ua/",
        },
        { label: "Наші ресторани", href: "https://kyiv.sushi-master.ua/" },
      ],
    },
    {
      title: "Підтримка",
      variant: "bold",
      items: [
        { label: "0 800 330 333", href: "https://kyiv.sushi-master.ua/" },
        {
          label: "TURBOTA@SUSHI-MASTER.UA",
          href: "https://kyiv.sushi-master.ua/",
        },
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
          variant={menu.variant}
          expanded={expanded === index}
          onChange={() => setExpanded(expanded === index ? false : index)}
        />
      ))}
    </div>
  );
};

export default FooterNavigation;

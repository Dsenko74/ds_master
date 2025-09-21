// import React from "react";
// import FooterMenuItem from "./FooterMenuItem";
// import "./Footer.scss";

// import "./FooterMenu.scss";

// const FooterMenu = ({ title, items, variant }) => {
//   return (
//     <details className="footer-navigation__menu spoiler" open>
//       <summary className="footer-navigation__title">{title}</summary>
//       <ul className="footer-navigation__menu-list">
//         {items.map((item, index) => (
//           <FooterMenuItem
//             key={index}
//             label={item.label}
//             href={item.href}
//             variant={variant}
//           />
//         ))}
//       </ul>
//     </details>
//   );
// };

// export default FooterMenu;
import React from "react";
import FooterMenuItem from "./FooterMenuItem";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useMediaQuery } from "@mui/material";
import "./Footer.scss";
import "./FooterMenu.scss";

const FooterMenu = ({ title, items, variant, expanded, onChange }) => {
  const isMobile = useMediaQuery("(max-width:500px)");

  if (isMobile) {
    return (
      <Accordion expanded={expanded} onChange={onChange}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {title}
        </AccordionSummary>
        <AccordionDetails>
          {items.map((item, i) => (
            <FooterMenuItem
              key={i}
              label={item.label}
              href={item.href}
              variant={variant}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    );
  }

  return (
    <div className="footer-navigation__menu">
      <h5 className="footer-navigation__title">{title}</h5>
      <ul className="footer-navigation__menu-list">
        {items.map((item, i) => (
          <FooterMenuItem
            key={i}
            label={item.label}
            href={item.href}
            variant={variant}
          />
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;

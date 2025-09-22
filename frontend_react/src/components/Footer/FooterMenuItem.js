import React from "react";

import "../Footer/Footer.scss";

const FooterMenuItem = ({ label, href, variant }) => {
  return (
    <li className="footer-navigation__menu-item">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`footer-navigation__menu-link ${
          variant === "bold" ? "footer-navigation__menu-link_bold" : ""
        }`}
      >
        {label}
      </a>
    </li>
  );
};

export default FooterMenuItem;

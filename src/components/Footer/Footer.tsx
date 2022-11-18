import React from "react";
import "./Footer.css";

import { FooterNavLinks, CopyrightText } from "../../data/FooterLinks";

const Footer: React.FC = () => {
  return (
    <footer>
      <ul className="footer_nav">
        {FooterNavLinks.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
            </li>
          );
        })}
      </ul>
      <span>{CopyrightText}</span>
    </footer>
  );
};

export default Footer;

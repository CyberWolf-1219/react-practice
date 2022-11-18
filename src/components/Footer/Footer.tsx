import React from "react";
import "./Footer.css";

import {
  footer_logo,
  footer_paragraph,
  footer_navlinks,
  policy_links,
  contact_details,
  social_links,
} from "../../data/FooterData";

const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className="top">
          <div>
            <img src={footer_logo} alt="" />
            <p>{footer_paragraph}</p>
          </div>
          <div>
            {footer_navlinks.map((item, index) => {
              return (
                <span key={index}>
                  <a href={item.link}>{item.title}</a>
                </span>
              );
            })}
          </div>
          <div>
            {policy_links.map((item, index) => {
              return (
                <span key={index}>
                  <a href={item.link}>{item.title}</a>
                </span>
              );
            })}
          </div>
          <div>
            <h3>Contact Us</h3>
            <div>{contact_details.tel}</div>

            <div>{contact_details.email}</div>
            <div>
              {social_links.map((item, index) => {
                return (
                  <span key={index}>
                    <a href={item.link}>
                      <img src={item.image} alt="" />
                    </a>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>© Copyright 2022 the hike All rights reserved.</span>
          <span>
            <a href="#">Contact Us</a>
            <a href="#">Terms</a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";

import "./Navbar.css";
import { logo } from "../../assets";
import { NavPageLinks, NavAuthLinks } from "../../data/NavbarLinks";

const Navbar: React.FC = () => {
  const NAV_LINKS = NavPageLinks.map(
    (item: { link: string; title: string }, index) => {
      return (
        <li key={index}>
          <a href={item.link}>{item.title}</a>
        </li>
      );
    }
  );

  return (
    <>
      <nav>
        <div className="nav_item_wrapper">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <ul>{NAV_LINKS}</ul>
          <div>
            <button className="login_btn">
              <a href={NavAuthLinks[0].link}>{NavAuthLinks[0].title}</a>
            </button>
            <button className="signup_btn">
              <a href={NavAuthLinks[1].link}>{NavAuthLinks[1].title}</a>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

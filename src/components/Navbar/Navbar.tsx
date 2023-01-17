import React from "react";
import Navlinks from "../../data/NavLinks";
import "./Navbar.css";

import { logo } from "../../assets";

const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="LOGO" />
        <ul className="nav_container">
          {Navlinks.map((item: { link: string; title: string }, index) => {
            return (
              <a href={item.link} key={index}>
                <li>{item.title}</li>
              </a>
            );
          })}
        </ul>
        <button>Sign Up</button>
      </nav>
    </>
  );
};

export default Navbar;

import { logo } from "./../../assets/images";
import { navlinks } from "../../data/NavLinks";
import "./navigation.css";
import { useState } from "react";

const Navigation: React.FC = () => {
  const [isDropped, setIsDropped] = useState(false);

  function logoClickHandler() {
    setIsDropped(!isDropped);
  }

  return (
    <nav>
      <span id="logo" onClick={logoClickHandler}>
        <img src={logo} alt="" />
      </span>
      <ul id="nav_container" className={isDropped ? "drop" : ""}>
        {navlinks.map((item, index) => {
          return (
            <a href={item.link} key={index}>
              {item.title}
            </a>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;

import React from "react";
import "./Styles/navigation.css";
import logo from "./../../assets/logo.svg";
import { FaDiscord } from "react-icons/fa";
import { AiFillWallet } from "react-icons/ai";
import { MdOutlineLightMode } from "react-icons/md";
import { AiOutlineDown } from "react-icons/ai";

function Navigation() {
  return (
    <nav className="navigation">
      <div className="navigation_content_wrapper">
        <div className="logo_wrapper">
          <img src={logo} alt="" />
        </div>
        <div>
          <ul className="link_wrapper">
            <li className="link_item">
              HOME <AiOutlineDown />
            </li>
            <li className="link_item">
              ABOUT <AiOutlineDown />
            </li>
            <li className="link_item">
              ROADMAP <AiOutlineDown />
            </li>
            <li className="link_item">COLLECTION</li>
            <li className="link_item">
              FAQ <AiOutlineDown />
            </li>
          </ul>
        </div>
        <div className="button_wrapper">
          <button>
            <MdOutlineLightMode />
          </button>
          <a href="">
            <FaDiscord />
            DISCORD
          </a>
          <a href="">
            <AiFillWallet />
            CONNECT
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

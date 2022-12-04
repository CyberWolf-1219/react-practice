import React from "react";
import logo from "./../assets/logo.png";
import { FiCompass, FiBookmark, FiSettings, FiUser } from "react-icons/fi";
import { IconContext } from "react-icons";

function Navigation() {
  return (
    <IconContext.Provider value={{ color: "#cecece", size: "2rem" }}>
      <nav className="w-full h-screen flex flex-col items-center justify-center gap-8">
        <div className="w-12 h-12 rounded-full border-2 border-white">
          <img src={logo.src} alt="" className="w-full h-full" />
        </div>
        <ul className="ml-[26%] flex flex-col items-start justify-start gap-4">
          <li className="w-fit h-fit flex flex-row hover:scale-105">
            <FiCompass />
            <span className="ml-4 font-semibold text-lg">Discover</span>
          </li>
          <li className="w-fit h-fit flex flex-row hover:scale-105">
            <FiBookmark />
            <span className="ml-4 font-semibold text-lg">Bookmarked</span>
          </li>
          <li className="w-fit h-fit flex flex-row hover:scale-105">
            <FiSettings />
            <span className="ml-4 font-semibold text-lg">Settings</span>
          </li>
          <li className="w-fit h-fit flex flex-row hover:scale-105">
            <FiUser />
            <span className="ml-4 font-semibold text-lg">Profile</span>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navigation;

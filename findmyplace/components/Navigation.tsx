import React from "react";
import logo from "./../assets/logo.png";
import {
  FiCompass,
  FiBookmark,
  FiSettings,
  FiUser,
  FiMenu,
} from "react-icons/fi";
import { IconContext } from "react-icons";

function Navigation({
  visible,
  setVisibility,
}: {
  visible: Boolean;
  setVisibility: () => void;
}) {
  return (
    <IconContext.Provider value={{ color: "#cecece", size: "2rem" }}>
      <nav
        className={`absolute w-screen h-screen flex flex-col items-center justify-center gap-8 z-10 bg-white transition-transform ease-in-out  ${
          !visible ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <FiMenu
          color="#cecece"
          size={"1.5rem"}
          className="absolute top-4 right-4 shrink-0 align-middle transition-transform hover:scale-125"
          onClick={setVisibility}
        />
        <div className="w-12 h-12 rounded-full border-2 border-white">
          <img src={logo.src} alt="" className="w-full h-full" />
        </div>
        <ul className="ml-[26%] flex flex-col items-start justify-start gap-4">
          <li className="w-fit h-fit flex flex-row hover:scale-105 transition-transform">
            <FiCompass />
            <span
              className="ml-4 font-semibold text-lg 
            overflow-hidden"
            >
              Discover
            </span>
          </li>
          <li className="w-fit h-fit flex flex-row hover:scale-105 transition-transform">
            <FiBookmark />
            <span className="ml-4 font-semibold text-lg">Bookmarked</span>
          </li>
          <li className="w-fit h-fit flex flex-row hover:scale-105 transition-transform">
            <FiSettings />
            <span className="ml-4 font-semibold text-lg">Settings</span>
          </li>
          <li className="w-fit h-fit flex flex-row hover:scale-105 transition-transform">
            <FiUser />
            <span className="ml-4 font-semibold text-lg">Profile</span>
          </li>
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navigation;

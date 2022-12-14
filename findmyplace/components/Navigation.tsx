import React, { useContext } from "react";
import logo from "./../assets/logo.png";
import { IconContext } from "react-icons";
import { AuthContext } from "../contexts/AuthContext";
import {
  FiCompass,
  FiBookmark,
  FiSettings,
  FiUser,
  FiUserPlus,
  FiLogIn,
  FiLogOut,
} from "react-icons/fi";
import Link from "next/link";
import SignUpBtn from "./SignUpBtn";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";
import NavigationBtn from "./NavigationBtn";
import ProfileBtn from "./ProfileBtn";
import HomeBtn from "./HomeBtn";

function Navigation({
  visible,
  setVisibility,
  classList = "",
  linkClassList = "",
}: {
  visible: Boolean;
  setVisibility: Function;
  classList: string;
  linkClassList: string;
}) {
  const authContext = useContext(AuthContext);

  function onLinkClick() {
    setVisibility((prevState: Boolean) => !prevState);
  }

  return (
    <IconContext.Provider value={{ color: "#ffffff", size: "2rem" }}>
      <nav
        className={`absolute w-screen h-screen flex flex-col items-center justify-center gap-8 z-10 bg-white transition-transform ease-in-out md:gap-2 ${classList}  ${
          !visible ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <NavigationBtn setVisibility={setVisibility} />
        <div className="w-12 h-12 rounded-full border-2 border-white">
          <img src={logo.src} alt="" className="w-full h-full" />
        </div>

        <ul
          className={`w-fit flex flex-col items-start justify-start gap-4 md:h-full md:w-full md:justify-evenly md:items-center ${linkClassList} md:p-2 md:rounded-full md:bg-sky-500`}
        >
          <li className="w-full h-fit hover:scale-105 transition-transform md:flex items-center justify-center ">
            <HomeBtn />
          </li>
          {/* <li className="w-fit h-fit hover:scale-105 transition-transform">
            <span className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black">
              <Link href={"#"} onClick={onLinkClick}>
                <FiBookmark />
                <span className="md:hidden">Bookmarks</span>
              </Link>
            </span>
          </li> */}
          {/* <li className="w-fit h-fit hover:scale-105 transition-transform">
            <span className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black">
              <Link href={"#"} onClick={onLinkClick}>
                <FiSettings />
                <span className="md:hidden">Settings</span>
              </Link>
            </span>
          </li> */}
          {authContext.data ? (
            <li className="w-full h-fit hover:scale-105 transition-transform md:flex items-center justify-center">
              <ProfileBtn />
            </li>
          ) : null}
          {!authContext.data ? (
            <li className="w-full h-fit hover:scale-105 transition-transform  md:flex items-center justify-center">
              <SignUpBtn />
            </li>
          ) : null}
          {authContext.data ? (
            <li className="w-full h-fit hover:scale-105 transition-transform  md:flex items-center justify-center">
              <SignOutBtn />
            </li>
          ) : (
            <li className="w-fit h-fit hover:scale-105 transition-transform  md:flex items-center justify-center">
              <SignInBtn />
            </li>
          )}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navigation;

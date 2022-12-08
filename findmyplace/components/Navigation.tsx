import React, { useContext } from "react";
import logo from "./../assets/logo.png";
import { IconContext } from "react-icons";
import { AuthContext } from "../contexts/AuthContext";
import {
  FiCompass,
  FiBookmark,
  FiSettings,
  FiUser,
  FiMenu,
  FiUserPlus,
  FiLogIn,
  FiLogOut,
} from "react-icons/fi";
import Link from "next/link";
import SignUpBtn from "./SignUpBtn";
import SignInBtn from "./SignInBtn";
import SignOutBtn from "./SignOutBtn";
import NavigationBtn from "./NavigationBtn";

function Navigation({
  visible,
  setVisibility,
}: {
  visible: Boolean;
  setVisibility: Function;
}) {
  const authContext = useContext(AuthContext);

  return (
    <IconContext.Provider value={{ color: "#cecece", size: "2rem" }}>
      <nav
        className={`absolute w-screen h-screen flex flex-col items-center justify-center gap-8 z-10 bg-white transition-transform ease-in-out  ${
          !visible ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        <NavigationBtn setVisibility={setVisibility} />
        <div className="w-12 h-12 rounded-full border-2 border-white">
          <img src={logo.src} alt="" className="w-full h-full" />
        </div>

        <ul className="w-fit flex flex-col items-start justify-start gap-4">
          <li className="w-fit h-fit hover:scale-105 transition-transform">
            <span className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black">
              <FiCompass />
              <Link href={"#"}>Discover</Link>
            </span>
          </li>
          <li className="w-fit h-fit hover:scale-105 transition-transform">
            <span className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black">
              <FiBookmark />
              <Link href={"#"}>Discover</Link>
            </span>
          </li>
          <li className="w-fit h-fit hover:scale-105 transition-transform">
            <span className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black">
              <FiSettings />
              <Link href={"#"}>Discover</Link>
            </span>
          </li>
          {authContext.data ? (
            <li className="w-fit h-fit hover:scale-105 transition-transform">
              <span className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black">
                <FiUser />
                <Link href={"/user"}>Profile</Link>
              </span>
            </li>
          ) : null}
          {!authContext.data ? (
            <li className="w-fit h-fit hover:scale-105 transition-transform">
              <span className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black">
                <FiUserPlus />
                <SignUpBtn />
              </span>
            </li>
          ) : null}
          {authContext.data ? (
            <li className="w-fit h-fit hover:scale-105 transition-transform">
              <span className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black">
                <FiLogOut />
                <SignOutBtn />
              </span>
            </li>
          ) : (
            <li className="w-fit h-fit hover:scale-105 transition-transform">
              <span className="w-fit h-fit flex flex-row items-center justify-start gap-2 font-bold text-lg text-black">
                <FiLogIn />
                <SignInBtn />
              </span>
            </li>
          )}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navigation;

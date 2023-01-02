import React, { useRef } from "react";
import Container from "../Container/Container";
import { HiMenuAlt2 } from "react-icons/hi";
import { BsSun } from "react-icons/bs";

import classes from "./styles/index.module.css";

function Navigation() {
  const menu = useRef<HTMLDivElement>(null);

  function menuBtnClickHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    const currentState = menu.current?.getAttribute("data-state");
    menu.current?.setAttribute(
      "data-state",
      currentState == "" ? "visible" : ""
    );
  }

  return (
    <nav className={`relative z-50 py-4 backdrop-blur-md bg-shade-1`}>
      <Container
        classes={`p-4 flex flex-row items-center justify-between lg:rounded-full bg-white`}>
        <div
          className={`w-full lg:w-fit h-fit flex flex-row items-center justify-between gap-4`}>
          <div
            data-theme="light"
            className={`${classes.themeBtn} relative w-[4rem] lg:w-[3rem] h-[4rem] lg:h-[3rem] ml-8 lg:m-0
             border-2 border-primary rounded-full overflow-hidden`}>
            <div className={`${classes.dark_bg} rounded-full`}></div>
            <div className={`${classes.light_bg} rounded-full`}></div>
            <BsSun
              className={`${classes.icon}`}
              color={`#ffffff`}
              size={`2rem`}
            />
          </div>
          <div className={`font-black text-4xl`}>LOGO</div>
          <div
            onClick={menuBtnClickHandler}
            className={`${classes.menuBtn} lg:hidden w-fit h-fit p-4 bg-primary rounded-md mr-8`}>
            <HiMenuAlt2 size={`2rem`} color={`#ffffff`} />
          </div>
        </div>
        <div
          ref={menu}
          data-state=""
          className={`${classes.menu} fixed lg:static z-10 w-full lg:w-fit h-[100vh] lg:h-fit flex items-center lg:items-end bg-primary/100 lg:bg-transparent`}>
          <div
            onClick={menuBtnClickHandler}
            className={`${classes.menuBtn} absolute lg:hidden top-4 right-0 w-fit h-fit p-4 bg-white rounded-l-md`}>
            <HiMenuAlt2 size={`2rem`} color={`hsl(213, 100%, 56%)`} />
          </div>
          <ul
            className={`w-full h-fit mx-auto flex flex-col lg:flex-row items-center lg:items-end justify-center gap-8 font-semibold text-white text-base lg:text-black`}>
            <li
              className={`p-2 hover:bg-primary hover:text-white rounded-full transition-all`}>
              <a href="#">Home</a>
            </li>
            <li
              className={`p-2 hover:bg-primary hover:text-white rounded-full transition-all`}>
              <a href="#">Blog</a>
            </li>
            <li
              className={`p-2 hover:bg-primary hover:text-white rounded-full transition-all`}>
              <a href="#">Products</a>
            </li>
            <li
              className={`p-2 hover:bg-primary hover:text-white rounded-full transition-all`}>
              <a href="#">Plans</a>
            </li>
            <li
              className={`p-2 hover:bg-primary hover:text-white rounded-full transition-all`}>
              <a href="#">About Us</a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Navigation;

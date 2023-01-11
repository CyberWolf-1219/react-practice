import React, { ReactElement } from "react";
import classes from "./styles/index.module.css";

interface IHeader {
  children: ReactElement | ReactElement[];
  classes?: string;
}

function Header(props: IHeader) {
  return (
    <header className={`${classes.header} w-full h-fit`}>
      <div className={`w-full h-fit max-w-screen-lg mx-auto ${props.classes}`}>
        {props.children}
      </div>
    </header>
  );
}

export default Header;

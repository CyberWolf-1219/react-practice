import React from "react";
import classes from "./styles/index.module.css";

interface ILinkButtonProps {
  title: string;
  link: string;
  target?: "_blank" | "_self";
}

function LinkButton(props: ILinkButtonProps) {
  return (
    <a
      className={`${classes.btn} w-[25ch] p-4 rounded-md text-center bg-shade-1 text-primary border-[3px] border-white font-bold`}
      href={props.link}
      target={props.target ?? "_blank"}>
      {props.title}
    </a>
  );
}

export default LinkButton;

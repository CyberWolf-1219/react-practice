import React from "react";
import classes from "./styles/index.module.css";

interface ISmallButtonProps {
  text: string;
  action: (event: React.MouseEvent) => void;
  icon?: any;
}

function SmallButton(props: ISmallButtonProps) {
  function onClickHandler(event: React.MouseEvent) {
    props.action(event);
  }

  return (
    <button
      onClick={onClickHandler}
      className={`${classes.btn} w-[25ch] h-fit p-4 bg-shade-1 border-[3px] border-white rounded-md text-primary font-bold overflow-hidden`}>
      {props.text}
    </button>
  );
}

export default SmallButton;

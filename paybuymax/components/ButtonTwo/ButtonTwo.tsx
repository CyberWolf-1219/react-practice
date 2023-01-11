import React from "react";

interface IButtonTwoProps {
  text: string;
  action?: (event: React.MouseEvent) => void;
}

function ButtonTwo(props: IButtonTwoProps) {
  return (
    <button
      onClick={props.action}
      className={`w-[15ch] h-fit p-2 rounded-full font-bold text-white bg-gradient-to-r from-accent-2 to-accent`}>
      {props.text}
    </button>
  );
}

export default ButtonTwo;

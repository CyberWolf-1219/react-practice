import React from "react";

interface IButtonProps {
  text: string;
  action?: (event: React.MouseEvent) => void;
}

function ButtonOne(props: IButtonProps) {
  return (
    <button
      onClick={ props.action }
      className={ `button_one w-[15ch] h-fit p-2 rounded-full font-bold text-accent bg-white` }>
      { props.text }
    </button>
  );
}

export default ButtonOne;

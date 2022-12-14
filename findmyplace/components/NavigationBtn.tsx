import React from "react";
import { FiMenu } from "react-icons/fi";

function NavigationBtn({ setVisibility }: { setVisibility: Function }) {
  return (
    <FiMenu
      color="#cecece"
      size={"1.5rem"}
      className="absolute top-4 right-4 shrink-0 align-middle transition-transform hover:scale-125 md:hidden"
      onClick={setVisibility as React.MouseEventHandler}
    />
  );
}

export default NavigationBtn;

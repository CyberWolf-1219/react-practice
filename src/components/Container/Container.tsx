import React, { ReactElement } from "react";

interface IContainerProps {
  children: ReactElement | ReactElement[];
  classes?: string;
}

function Container(props: IContainerProps) {
  return (
    <div
      className={`w-full max-w-screen-xl h-fit mx-auto backdrop-blur-sm bg-shade-1 text-primary ${props.classes}`}>
      {props.children}
    </div>
  );
}

export default Container;

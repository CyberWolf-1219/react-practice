import React, { ReactElement } from "react";

interface IContainerProps {
  children: ReactElement | ReactElement[];
  classes?: string;
}

function Container(props: IContainerProps) {
  return (
    <section
      className={` w-full h-fit max-w-screen-lg my-8 mx-auto ${props.classes}`}>
      {props.children}
    </section>
  );
}

export default Container;

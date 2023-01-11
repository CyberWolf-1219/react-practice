import React, { ReactElement } from "react";

interface IContainerProps {
  children: ReactElement | ReactElement[];
  classes?: string;
}

function Container(props: IContainerProps) {
  return (
    <section className={ `relative w-full max-w-screen-xl my-8 ${props.classes}` }>
      { props.children }
    </section>
  );
}

export default Container;

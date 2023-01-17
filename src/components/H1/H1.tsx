import React from "react";

interface IH1 {
  text: string;
  classes?: string;
}

function H1(props: IH1) {
  const words = props.text.split("_").map((word, index) => {
    return (
      <div
        key={index}
        className={`heading_word_wrapper`}>
        <div className={`heading_word`}>{word}</div>
      </div>
    );
  });

  return <h1 className={`text-6xl ${props.classes} `}>{words}</h1>;
}

export default H1;

import React from "react";

interface IImage {
  image: string;
  alt?: string;
  containerClasses?: string;
  imageClasses?: string;
}

function Image(props: IImage) {
  return (
    <div className={`overflow-hidden ${props.containerClasses}`}>
      <img
        src={props.image}
        alt={props.alt}
        className={`w-full h-full hover:scale-105 transition-transform duration-1000 ease-in-out ${props.imageClasses}`}
      />
    </div>
  );
}

export default Image;

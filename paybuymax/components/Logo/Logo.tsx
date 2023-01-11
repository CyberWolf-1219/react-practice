import React from "react";

interface ILogoProps {
  image: string;
  link?: string;
}

function Logo(props: ILogoProps) {
  return (
    <div className={ `logo` }>
      <a href={ props.link ?? "#" }>
        <div className={ `aspect-[3/1] w-full h-auto` }>
          <img
            src={ props.image }
            alt=""
            className={ `w-full h-full object-contain` }
          />
        </div>
      </a>
    </div>
  );
}

export default Logo;

import React, { useRef, useState } from "react";
import { FeaturedDealCard } from "../index";

function CardSlider({ featuredDealArray = [] }) {
  const maxXPos = useRef(3 * 800);
  const [xpos, setXpos] = useState(0);

  console.log(maxXPos);

  function onLeftClick(e) {
    e.preventDefault();

    if (xpos >= 0) {
      setXpos(-maxXPos.current);
    } else {
      setXpos((prevPos) => prevPos + 900);
    }
  }

  function onRightClick(e) {
    e.preventDefault();

    if (xpos <= -maxXPos.current) {
      setXpos(0);
    } else {
      setXpos((prevPos) => prevPos - 900);
    }
  }

  return (
    <div className="flex flex-row items-center justify-center w-full md:w-full md:max-w-[900px] h-fit relative">
      <button
        className="w-12 h-12 rounded-full bg-white shadow-md p-3 absolute -left-8 md:-left-8 top-1/2 transform -translate-y-1/2 z-10"
        onClick={onLeftClick}
      >
        <svg
          className="w-full h-full fill-teal-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </button>

      <div className="w-[250px] md:w-full inline-block overflow-hidden">
        <div
          className="w-fit flex flex-row items-center justify-start transition-transform"
          style={{ transform: `translateX(${xpos}px)` }}
        >
          <FeaturedDealCard />
          <FeaturedDealCard title="2" />
          <FeaturedDealCard />
        </div>
      </div>

      <button
        className="w-12 h-12 rounded-full bg-white shadow-md p-3 absolute -right-8 md:-right-8 top-1/2 transform -translate-y-1/2 z-10"
        onClick={onRightClick}
      >
        <svg
          className="w-full h-full fill-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
        </svg>
      </button>
    </div>
  );
}

export default CardSlider;

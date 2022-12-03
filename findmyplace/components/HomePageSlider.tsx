import React, { useRef } from "react";
import dummyHome from "./../assets/dummy_home.jpg";
import HomePageSlide from "./HomePageSlide";

const dummyimages: { image: any; link: String }[] = [
  {
    image: dummyHome,
    link: "#",
  },
  {
    image: dummyHome,
    link: "#",
  },
  {
    image: dummyHome,
    link: "#",
  },
];

function HomePageSlider() {
  const slider = useRef<HTMLDivElement | null>(null);

  return (
    <div className="relative w-full h-full flex flex-row items-center justify-between">
      <button
        id="left"
        className="absolute z-10 left-0 hidden md:flex items-center justify-center h-full w-[150px] bg-gradient-to-r from-emerald-600 to-white/0 opacity-0 hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          className="bi bi-arrow-left w-[50px] h-[50px] fill-white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
      </button>

      <div
        ref={slider}
        className="w-screen h-full flex flex-row overflow-scroll snap-x snap-mandatory"
      >
        {dummyimages.map((Obj, index) => {
          return (
            <HomePageSlide
              key={index}
              idNo={index}
              image={Obj.image.src}
              link={Obj.link}
            />
          );
        })}
      </div>

      <button
        id="right"
        className="absolute z-10 right-0 hidden md:flex items-center justify-center h-full w-[150px] bg-gradient-to-l from-emerald-600 to-white/0 opacity-0 hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          className="bi bi-arrow-right w-[50px] h-[50px] fill-white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
          />
        </svg>
      </button>
    </div>
  );
}

export default HomePageSlider;

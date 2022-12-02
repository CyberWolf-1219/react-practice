import React from "react";
import { Navigation, CardSlider, SearchBar } from "./../";
import bgImg from "./../../assets/hero_bg.png";

function Section_01() {
  return (
    <section
      className="max-w-screen-xl w-full h-fit py-4 px-12 mx-auto flex flex-col items-center justify-between gap-12 text-center bg-clip-padding bg-cover bg-no-repeat bg-top"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <Navigation />
      <div>
        <span className="tracking-[15px] capitalize text-white not-italic block mb-4">
          THE BEST WAY TO
        </span>
        <h1 className="font-bold text-5xl text-white block">Find Your Home</h1>
      </div>
      <CardSlider />
      <SearchBar />
    </section>
  );
}

export default Section_01;

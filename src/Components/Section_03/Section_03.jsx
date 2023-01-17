import React from "react";
import { FeaturedPropertyCard } from "./../";

function Section_03() {
  return (
    <section className="max-w-screen-xl w-full h-fit py-4 px-12 mx-auto flex flex-col justify-start gap-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <h2 className="font-bold text-3xl text-gray-500">
          Recent Featured Properties
        </h2>

        <span className="flex flex-row items-center gap-4">
          <span>
            <svg
              className="w-12 h-12"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z" />
            </svg>
          </span>
          <span className="text-lg font-bold">Available Properties</span>
        </span>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
        <FeaturedPropertyCard />
      </div>
    </section>
  );
}

export default Section_03;

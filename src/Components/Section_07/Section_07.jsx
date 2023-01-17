import React from "react";
import { FeaturedPropertyRentCard } from "..";

function Section_07() {
  return (
    <section className="max-w-screen-xl w-full h-fit py-4 px-12 mx-auto flex flex-col justify-start gap-8">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <h2 className="font-bold text-3xl text-gray-500">
          Recent Properties for Rent
        </h2>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4 flex-wrap md:flex-nowrap overflow-auto">
        <FeaturedPropertyRentCard />
        <FeaturedPropertyRentCard />
        <FeaturedPropertyRentCard />
      </div>
    </section>
  );
}

export default Section_07;

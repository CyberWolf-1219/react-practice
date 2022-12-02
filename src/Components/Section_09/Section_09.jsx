import React from "react";
import { TestimonilaPanel } from "./../";

function Section_09() {
  return (
    <section className="w-full max-w-screen-lg mx-auto flex flex-col items-center justify-start gap-12">
      <div className="w-full h-fit text-center">
        <h2 className="font-bold text-3xl text-gray-500 text-center">
          What Clients Say About Us
        </h2>
        <small className="font-light text-sm text-gray-500 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis nulla ex
          harum maiores eius suscipit?
        </small>
      </div>
      <TestimonilaPanel />
    </section>
  );
}

export default Section_09;

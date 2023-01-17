import React from "react";
import sponsors from "../../data/sponsors";

function Section_10() {
  return (
    <section className="w-full max-w-screen-xl py-4 px-12 mx-auto flex flex-row items-center justify-center gap-8">
      {sponsors.map((sponsorObj, index) => {
        return (
          <span className="w-fit h-fit inline-block shadow-md p-8">
            <img
              src={sponsorObj.logo}
              alt=""
              className="w-[175px] h-[125px] object-contain "
            />
          </span>
        );
      })}
    </section>
  );
}

export default Section_10;

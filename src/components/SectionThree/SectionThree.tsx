import React from "react";
import Container from "./../Container/Container";
import HeroImage from "../../assets/2.png";

function SectionThree() {
  return (
    <Container classes={`aspect-[1/0.5] h-auto `}>
      <div
        className={`absolute z-1 bottom-0 left-0 right-0 w-full h-[300px] bg-primary`}></div>
      <div className={`absolute z-2 top-0 left-[10%] w-fit h-fit p-8 bg-fade`}>
        <span className={`w-fit h-fit p-3 bg-primary text-white`}>
          EXCLUSIVE PRODUCT
        </span>
        <h2 className={`w-[10ch]`}>Moisturize Sugar Scrub</h2>
        <p className={`w-[50ch]`}>
          Sugar scrubs brighten tired, dull-looking skin to promote healthy,
          smooth, and flawless skin. Sugar scrubs also fight skin aging in a
          natural way.
        </p>
        <p className={`w-[50ch]`}>
          <span>Ingredients: </span>
          brown sugar, coconut, jojoba, olive, almond, or grapeseed.
        </p>
        <button className={`w-fit h-fit p-3 border-2 border-primary`}>
          LEARN MORE
        </button>
      </div>
      <div className={`absolute z-3 bottom-[-7.8%] right-0`}>
        <img
          src={HeroImage}
          alt=""
          className={`h-full w-auto aspect-square object-contain`}
        />
      </div>
    </Container>
  );
}

export default SectionThree;

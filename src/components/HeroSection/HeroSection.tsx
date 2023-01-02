import React, { useLayoutEffect, useRef } from "react";
import Container from "../Container/Container";
import SmallButton from "../SmallButton/SmallButton";
import bg from "../../assets/Strip-Patterns.svg";

import {
  cubes,
  cones,
  cylinders,
  dounuts_1,
  dounuts_2,
  orbs,
  pills,
  rectangles,
} from "../../assets/props/index";
import gsap from "gsap";

function HeroSection() {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap.timeline({});

      timeline.current!.to(".prop", {
        scale: "random(0.4, 1.0)",
        duration: 5,
        repeat: -1,
        repeatRefresh: true,
      });
    }, rootElement);

    return () => {
      gsapContext.clear();
      gsapContext.revert();
      timeline.current?.clear();
    };
  }, []);

  function btnClickHandler(event: React.MouseEvent) {
    event.preventDefault();
    console.log(`Haaaa..... Clicked!`);
  }

  return (
    <section>
      <Container classes={`relative z-[0] p-8 rounded-xl text-black`}>
        <div className={`absolute z-[-1] inset-0 w-full h-full`}>
          <div className={`absolute w-full h-full`}>
            <img src={bg} alt="" className={`w-[60%] object-contain`} />
          </div>
          <div ref={rootElement} className={`absolute z-10 w-full h-full`}>
            <div
              className={`prop absolute top-[0%] right-[0%] w-[20px] h-auto blur-[3px]`}>
              <img
                src={pills[8]}
                alt=""
                className={`w-full h-full object-contain`}
              />
            </div>
            <div
              className={`prop absolute top-[10%] right-[5%] w-[30px] h-auto blur-[1.5px]`}>
              <img
                src={cylinders[5]}
                alt=""
                className={`w-full h-full object-contain`}
              />
            </div>
            <div
              className={`prop absolute top-[20%] right-[1%] w-[47px] h-auto blur-[2.6px]`}>
              <img
                src={rectangles[4]}
                alt=""
                className={`w-full h-full object-contain`}
              />
            </div>
            <div
              className={`prop absolute top-[26%] right-[5%] w-[60px] h-auto blur-[2px]`}>
              <img
                src={dounuts_1[2]}
                alt=""
                className={`w-full h-full object-contain`}
              />
            </div>
            <div
              className={`prop absolute top-[30%] right-[8%] w-[100px] h-auto blur-[2.5px]`}>
              <img
                src={dounuts_2[7]}
                alt=""
                className={`w-full h-full object-contain`}
              />
            </div>
            <div
              className={`prop absolute top-[38%] right-[2%] w-[150px] h-auto blur-[2px]`}>
              <img
                src={orbs[4]}
                alt=""
                className={`w-full h-full object-contain`}
              />
            </div>
            <div
              className={`prop absolute top-[60%] right-[7%] w-[250px] h-auto blur-[1px]`}>
              <img
                src={cubes[4]}
                alt=""
                className={`w-full h-full object-contain`}
              />
            </div>
            <div
              className={`prop absolute top-[50%] right-[17%] w-[130px] h-auto blur-[0px]`}>
              <img
                src={cones[2]}
                alt=""
                className={`w-full h-full object-contain`}
              />
            </div>
          </div>
        </div>
        <div
          className={`relative z-[2] w-full max-w-screen-sm h-fit mx-auto my-[5rem] text-center`}>
          <h1>New Colorful Adventures</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid id
            possimus soluta omnis harum nihil sunt molestias! Mollitia, minima
            doloribus?
          </p>
          <SmallButton text={`Make It Yours`} action={btnClickHandler} />
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;

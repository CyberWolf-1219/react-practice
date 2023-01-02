import HeroSection from "./components/HeroSection/HeroSection";
import Navigation from "./components/Navigation/Navigation";
import SectionEight from "./components/SectionEight/SectionEight";
import SectionFive from "./components/SectionFive/SectionFive";
import SectionFour from "./components/SectionFour/SectionFour";
import SectionSeven from "./components/SectionSeven/SectionSeven";
import SectionSix from "./components/SectionSix/SectionSix";
import SectionThree from "./components/SectionThree/SectionThree";
import SectionTwo from "./components/SectionTwo/SectionTwo";

import {
  orbs,
  cones,
  cubes,
  cylinders,
  dounuts_1,
  dounuts_2,
  pills,
  rectangles,
} from "./assets/props";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const timeline = useRef<GSAPTimeline | null>(null);
  const rootElement = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      timeline.current = gsap.timeline({
        defaults: { duration: 2 },
      });

      timeline.current!.to(".prop", {
        xPercent: "random(0, 100, 10)",
        yPercent: "random(0, 100, 10)",
        rotateX: "random(0, 50)",
        scale: "random(0.5, 1.0)",
        duration: 5,
        repeat: -1,
        repeatRefresh: true,
      });
    }, rootElement);

    return () => {
      gsapContext.clear();
      gsapContext.revert();
      timeline.current!.clear();
    };
  }, []);

  return (
    <div className={`relative z-[0] w-full h-fit overflow-x-hidden`}>
      <div
        ref={rootElement}
        className={`fixed z-[-1] inset-0 w-[100vw] h-[100vh] mx-auto`}>
        <div
          className={`prop absolute top-[5%] right-[50%] w-[50px] h-auto blur-[3px]`}>
          <img
            src={pills[8]}
            alt=""
            className={`w-full h-full object-contain`}
          />
        </div>
        <div
          className={`prop absolute top-[15%] right-[25%] w-[71px] h-auto blur-[1.5px]`}>
          <img
            src={cylinders[5]}
            alt=""
            className={`w-full h-full object-contain`}
          />
        </div>
        <div
          className={`prop absolute top-[18%] right-[15%] w-[85px] h-auto blur-[2.6px]`}>
          <img
            src={rectangles[4]}
            alt=""
            className={`w-full h-full object-contain`}
          />
        </div>
        <div
          className={`prop absolute top-[26%] right-[13%] w-[90px] h-auto blur-[2px]`}>
          <img
            src={dounuts_1[2]}
            alt=""
            className={`w-full h-full object-contain`}
          />
        </div>
        <div
          className={`prop absolute top-[28%] right-[80%] w-[100px] h-auto blur-[2.5px]`}>
          <img
            src={dounuts_2[7]}
            alt=""
            className={`w-full h-full object-contain`}
          />
        </div>
        <div
          className={`prop absolute top-[35%] right-[75%] w-[150px] h-auto blur-[2px]`}>
          <img
            src={orbs[4]}
            alt=""
            className={`w-full h-full object-contain`}
          />
        </div>
        <div
          className={`prop absolute top-[42%] right-[48%] w-[120px] h-auto blur-[1px]`}>
          <img
            src={cubes[4]}
            alt=""
            className={`w-full h-full object-contain`}
          />
        </div>
        <div
          className={`prop absolute top-[45%] right-[68%] w-[130px] h-auto blur-[0px]`}>
          <img
            src={cones[2]}
            alt=""
            className={`w-full h-full object-contain`}
          />
        </div>
      </div>
      <Navigation />
      <HeroSection />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
    </div>
  );
}

export default App;

import React, { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import Container from "../Container/Container";

import heroImg from "../../assets/section_five/section_five_hero.png";
import ButtonTwo from "../ButtonTwo/ButtonTwo";

function SectionFive() {

  const [element, isVisible] = useIntersectionObserver({ rootMargin: "-200px" });

  const timeline = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true, defaults: { ease: 'expo.out', duration: 0.3 } });

      timeline.current
        .fromTo('*', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.2 })
    }, element);

    return () => {
      gctx.clear()
      gctx.revert();
      timeline.current!.clear();
    };
  }, []);

  useEffect(() => {
    console.log(isVisible);
    if (isVisible) {
      timeline.current!.play();
    }

  }, [isVisible])

  return (
    <Container>
      <div ref={ element } className={ `w-full h-fit text-center` }>
        <h2>Start Trading Today!</h2>
        <p>
          Our dynamic platform developed specifically for easy trading and
          investments.
        </p>
        <ButtonTwo text={ `Sell Now` } />
        <div className={ `aspect-square w-[500px] h-auto mx-auto` }>
          <img
            src={ heroImg.src }
            alt=""
            className={ `w-full h-full object-contain` }
          />
        </div>
      </div>
    </Container>
  );
}

export default SectionFive;

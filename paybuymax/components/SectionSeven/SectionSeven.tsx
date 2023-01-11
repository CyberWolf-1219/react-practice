import React, { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import Container from "../Container/Container";
import ButtonTwo from "../ButtonTwo/ButtonTwo";

import heroImg from "../../assets/section_seven/section_seven_hero.png";

function SectionSeven() {

  const [element, isVisible] = useIntersectionObserver({ rootMargin: "-200px" });

  const timeline = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true, defaults: { ease: 'expo.out', duration: 0.5 } });

      timeline.current
        .fromTo('.section_image', { xPercent: 50, opacity: 0 }, { xPercent: 0, opacity: 1 })
        .fromTo('.column_1 > *', { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.3 })
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
      <div ref={ element } className={ `w-full h-fit flex flex-row items-center justify-between` }>
        <div className={ `column_1 flex-1` }>
          <p>TRAINING</p>
          <h2>Learn More About Cyptro & Blockchains</h2>
          <p>
            No matter how well-informed and educated you think you are, the
            topics of blockchain and cryptocurrency are inexhaustible. You more
            than likely won’t start trading like a pro or go all the way to the
            deep depths of blockchain tech in a month, but if you’re focused and
            consistent enough in your self-educating process you are destined to
            succeed. So the main trick is to keep the self-education process
            going.
          </p>
          <ButtonTwo
            text={ `Learn More` }
            action={ (e: React.MouseEvent) => {
              console.log(e);
            } }
          />
        </div>
        <div className={ `flex-1` }>
          <div className={ `section_image aspect-square w-full max-w-[800px] h-auto` }>
            <img
              src={ heroImg.src }
              alt=""
              className={ `w-ful h-full object-contain` }
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SectionSeven;

import React, { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import Container from "../Container/Container";
import Logo from "../Logo/Logo";

import logo_1 from "../../assets/section_four/brand_logo_1.png";
import logo_2 from "../../assets/section_four/brand_logo_2.png";
import logo_3 from "../../assets/section_four/brand_logo_3.png";
import logo_4 from "../../assets/section_four/brand_logo_4.png";
import logo_5 from "../../assets/section_four/brand_logo_5.png";
import logo_6 from "../../assets/section_four/brand_logo_6.png";
import logo_7 from "../../assets/section_four/brand_logo_7.png";
import logo_8 from "../../assets/section_four/brand_logo_8.png";
import logo_9 from "../../assets/section_four/brand_logo_9.png";
import logo_10 from "../../assets/section_four/brand_logo_10.png";
import logo_11 from "../../assets/section_four/brand_logo_11.png";
import logo_12 from "../../assets/section_four/brand_logo_12.png";

function SectionFour() {

  const [element, isVisible] = useIntersectionObserver({ rootMargin: "-200px" });

  const timeline = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true, defaults: { ease: 'expo.out', duration: 0.3 } });

      timeline.current
        .fromTo('h2', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1 })
        .fromTo('.logo', { opacity: 0 }, { opacity: 1, stagger: 0.2 })
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
    <Container classes={ `bg-accent/10` }>
      <div ref={ element } className={ `w-full h-fit text-center` }>
        <h2>Gift Cards & Electronic Assets</h2>
        <div className={ `logo_container w-full h-fit p-12 grid grid-cols-4 gap-12 content-center items-center ` }>
          <Logo image={ logo_1.src } />
          <Logo image={ logo_2.src } />
          <Logo image={ logo_3.src } />
          <Logo image={ logo_4.src } />
          <Logo image={ logo_5.src } />
          <Logo image={ logo_6.src } />
          <Logo image={ logo_7.src } />
          <Logo image={ logo_8.src } />
          <Logo image={ logo_9.src } />
          <Logo image={ logo_10.src } />
          <Logo image={ logo_11.src } />
          <Logo image={ logo_12.src } />
        </div>
      </div>
    </Container>
  );
}

export default SectionFour;

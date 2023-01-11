import React, { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import Container from "../Container/Container";

import heroImg from "../../assets/section_eight/section_eight_hero.png";
import FAQ from "../FAQ/FAQ";

function SectionEight() {

  const [element, isVisible] = useIntersectionObserver({ rootMargin: "-200px" });

  const timeline = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true, defaults: { ease: 'expo.out', duration: 0.5 } });

      timeline.current
        .fromTo('.section_image', { xPercent: -50, opacity: 0 }, { xPercent: 0, opacity: 1 })
        .fromTo('.column_2 > h2', { yPercent: 50, opacity: 0 }, { yPercent: 0, opacity: 1 })
        .fromTo('.column_2 > h2 > span', { color: '#000000' }, { color: '#F24405' })
        .fromTo('.faq_item', { scale: 0.5, opacity: 0 }, { keyframes: [{ scale: 1.2, opacity: 1 }, { scale: 1 }], stagger: 0.2, ease: 'power2.out' })
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
      <div ref={ element } className={ `w-full h-[600px] flex flex-row items-center justify-between` }>
        <div className={ `flex-1 h-full ` }>
          <div className={ `aspect-square w-full max-w-[800px] h-auto` }>
            <img src={ heroImg.src } alt="" className={ `section_image w-full h-full object-contain` } />
          </div>
        </div>
        <div className={ `column_2 flex-1 h-full flex flex-col items-center justify-start` }>
          <h2>
            Frequently <span className={ `text-accent` }>Asked Questions</span>
          </h2>
          <div>
            <FAQ />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SectionEight;

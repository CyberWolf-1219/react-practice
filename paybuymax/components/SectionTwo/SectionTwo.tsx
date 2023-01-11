import React, { useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";

import Container from "../Container/Container";

import heroImg from "../../assets/section_two/section_two_hero.png";
import ButtonTwo from "../ButtonTwo/ButtonTwo";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function SectionTwo() {
  const [element, isVisible] = useIntersectionObserver({ rootMargin: "-200px" });

  const timeline = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true, defaults: { ease: 'expo.out', duration: 0.3 } });

      timeline.current
        .fromTo('.section_image', { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1 })
        .fromTo('.column_2 > *', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.25 })

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
          <div className={ `section_image aspect-square w-full max-w-[800px]` }>
            <img
              src={ heroImg.src }
              alt=""
              className={ `w-full h-full object-contain` }
            />
          </div>
        </div>
        <div className={ `column_2 flex-1` }>
          <p className={ `text-accent` }>BEST TRADING EXPERIENCE</p>
          <h2>Trade Anywhere & Anytime</h2>
          <p>
            Welcome to PayBuyMax Tech, your number one source for trading
            cryptocurrency, gift cards and more. We're dedicated to providing
            you the very best of trading, with an emphasis on integrity, passion
            and professionalism.
          </p>
          <p>
            Paybuymax is into trading of cryptocurrency, giftcards and
            electronic assets
          </p>
          <ButtonTwo
            text={ `About Us` }
            action={ (e: React.MouseEvent) => {
              console.log(e);
            } }
          />
        </div>
      </div>
    </Container>
  );
}

export default SectionTwo;

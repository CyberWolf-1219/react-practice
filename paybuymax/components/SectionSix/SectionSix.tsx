import React, { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import Container from "../Container/Container";

import apple from "../../assets/section_six/apple_logo.png";
import playstore from "../../assets/section_six/playstore_logo.png";
import iphoneLeft from "../../assets/section_six/left.svg";
import iphoneRight from "../../assets/section_six/right.svg";

function SectionSix() {

  const [element, isVisible] = useIntersectionObserver({ rootMargin: "-200px" });

  const timeline = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true, defaults: { ease: 'expo.out', duration: 0.5 } });

      timeline.current
        .fromTo('h2', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1 })
        .fromTo('.prop_1', { yPercent: 100, rotate: 0, opacity: 0 }, { keyframes: [{ opacity: 1, yPercent: 0, ease: 'bounce.out', duration: 1 }, { rotateZ: -20, ease: 'bounce.out', duration: 0.5 }] })
        .fromTo('.prop_2', { yPercent: 100, rotate: 0, opacity: 0 }, { keyframes: [{ opacity: 1, yPercent: 0, ease: 'bounce.out', duration: 1 }, { rotateZ: 20, ease: 'bounce.out', duration: 0.5 }] }, '<')
        .fromTo('.link_button_1', { yPercent: 50, xPercent: 4, opacity: 0 }, { keyframes: [{ yPercent: 0, opacity: 1, ease: 'expo.out' }, { xPercent: 0, ease: 'expo.out' }] })
        .fromTo('.link_button_2', { yPercent: 50, xPercent: -4, opacity: 0 }, { keyframes: [{ yPercent: 0, opacity: 1, ease: 'expo.out' }, { xPercent: 0, ease: 'expo.out' }] }, '<')


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
      <div ref={ element } className={ `relative z-[0] w-full h-[600px] p-8 text-center bg-accent/10 overflow-hidden` }>
        <div className={ `absolute z-[-1] w-full h-full` }>
          <div
            className={ `prop_1 absolute top-[20%] left-[8%] -rotate-[25deg] w-[300px] h-auto` }>
            <img
              src={ iphoneLeft.src }
              alt=""
              className={ `w-full h-full object-contain` }
            />
          </div>
          <div
            className={ `prop_2 absolute top-[20%] right-[13%] rotate-[25deg] w-[300px] h-auto` }>
            <img
              src={ iphoneRight.src }
              alt=""
              className={ `w-full h-full object-contain` }
            />
          </div>
        </div>
        <div className={ `content_container text-center` }>
          <h2 className={ `w-[25ch] mx-auto` }>
            Download Our Mobile App For A Whole New Experience!
          </h2>
          <div className={ `w-fit h-fit mt-[15%] mx-auto flex flex-row items-center justify-center gap-4` }>
            <div className={ `link_button_1 w-fit h-fit p-3 rounded-md bg-white shadow-[0_0_10px_0] shadow-black/10` }>
              <a href="#">
                <div
                  className={ `w-fit h-fit flex flex-row gap-3 items-center justify-center` }>
                  <div className={ `aspect-square w-[50px] h-auto` }>
                    <img
                      src={ playstore.src }
                      alt=""
                      className={ `w-full h-full object-contain` }
                    />
                  </div>
                  <div className={ `flex flex-col items-start justify-center` }>
                    <small>Get it on</small>
                    <b>Google Play</b>
                  </div>
                </div>
              </a>
            </div>
            <div className={ `link_button_2 w-fit h-fit p-3 rounded-md bg-white shadow-[0_0_10px_0] shadow-black/10` }>
              <a href="#">
                <div
                  className={ `w-fit h-fit flex flex-row gap-3 items-center justify-center` }>
                  <div className={ `aspect-square w-[50px] h-auto` }>
                    <img
                      src={ apple.src }
                      alt=""
                      className={ `w-full h-full object-contain` }
                    />
                  </div>
                  <div className={ `flex flex-col items-start justify-center` }>
                    <small>Get it on</small>
                    <b>Google Play</b>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SectionSix;

import React, { useLayoutEffect, useRef } from "react";
import Container from "./../Container/Container";
import HeroImg from "../../assets/1.png";
import Logo from "../../assets/logo.svg";
import { BsArrowRight } from "react-icons/bs";
import CountDown from "../CountDown/CountDown";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null)

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      tl.current = gsap.timeline({ defaults: { duration: 1, ease: "power4.out" } })

      tl.current!
        .fromTo(
          ".hero_image_reveal_1",
          {
            scaleX: 1,
          },
          {
            scaleX: 0,
            delay: 6.5
          })
        .fromTo(
          ".hero_image_reveal_2",
          {
            scaleX: 1,
          },
          {
            scaleX: 0,
          },
          "<0.25")
        .fromTo(
          ".hero_image",
          {
            scale: 1.2,
          },
          {
            scale: 1,
          },
          "<0.1")
        .fromTo(
          ".hero_heading_part",
          {
            xPercent: -100
          },
          {
            xPercent: 0,
            stagger: 0.1,
          },
          "<0.25")
        .fromTo(
          ".hero_link_btn_wrapper",
          {
            scaleX: 0,
          },
          {
            scaleX: 1
          },
          "<0.25")
        .fromTo(
          ".hero_link_btn",
          {
            xPercent: -50,
            autoAlpha: 0,
          },
          {
            xPercent: 0,
            autoAlpha: 1,
            stagger: 0.1
          },
          "<0.25")
        .fromTo(
          ".countdown_panel",
          {
            yPercent: 50,
            autoAlpha: 0,
          },
          {
            yPercent: 0,
            autoAlpha: 1,
            stagger: 0.1,
          },
          "<0.25")



    }, rootElement)

    return () => {
      gctx.revert();
    };
  }, [])



  return (
    <Container classes={ `h-screen mt-0 flex flex-row items-center justify-center` }>
      <div ref={ rootElement } className={ `w-full h-full flex flex-row items-center justify-center` }>
        <div className={ ` w-[50%] h-full flex flex-col items-start justify-center gap-8` }>
          <div className={ `hero_heading_wrapper` }>
            <h1 className={ `hero_heading w-[12ch] pb-12 overflow-hidden` }>
              <div className={ `hero_heading_part` }> Never Forget</div>
              <div className={ `hero_heading_part` }>
                How <span className={ `text-primary` }>Beautiful</span>{ " " }
              </div>
              <div className={ `hero_heading_part` }>You Are</div>
            </h1>
            <div className={ `hero_link_btn_wrapper  w-fit h-fit flex flex-row items-center justify-center gap-20 border-t-2 border-black origin-left` }>
              <div className={ `hero_link_btn w-fit h-fit ` }>
                <a
                  href=""
                  className={ `flex flex-row items-center justify-start gap-4` }>
                  <span>REGISTER</span>
                  <span>
                    <BsArrowRight />
                  </span>
                </a>
              </div>
              <div className={ `hero_link_btn w-fit h-fit` }>
                <a
                  href=""
                  className={ `flex flex-row items-center justify-start gap-4` }>
                  <span>PRICING</span>
                  <span>
                    <BsArrowRight />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={ `relative w-[50%] h-full` }>
          <CountDown classes={ `absolute z-30 bottom-[15%] -left-[20%]` } hours={ 10 } mins={ 18 } secs={ 57 } />
          <div className={ `hero_image_wrapper relative w-full h-full overflow-hidden` }>
            <div className={ `hero_image_reveal_1 absolute z-[3] w-full h-full bg-primary/100 origin-left` }></div>
            <div className={ `hero_image_reveal_2 absolute z-[2] w-full h-full bg-white origin-left` }></div>
            <div className={ `hero_image absolute z-[1] w-full h-full overflow-hidden` }>
              <img src={ HeroImg } alt="" className={ `w-full h-full object-cover pointer-events-none` } />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;

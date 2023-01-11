import React, { useLayoutEffect, useRef } from "react";
import Container from "../Container/Container";
import ButtonOne from "../ButtonOne/ButtonOne";

import heroImage from "../../assets/section_hero/HeroImage.png";
import bubbleImage from "../../assets/section_hero/Bubble.png";

interface IHeroSection {
  heading: React.ReactElement;
  subheading: React.ReactElement;
  ctaText?: string;
  ctaAction?: (event: React.MouseEvent) => void;
}

import gsap from "gsap";

function HeroSection(props: IHeroSection) {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const timeline = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      timeline.current = gsap.timeline({ defaults: { duration: 0.5, ease: "expo.out" } })

      timeline.current
        .fromTo('.hero_image_part_1', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
        .fromTo('.hero_image_part_2', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
        .fromTo('.hero_image_part_3', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1 })
        .fromTo('.hero_heading', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1 })
        .fromTo('.hero_subheading', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5, delay: 1 })
        .fromTo('.button_one', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.5 })
    }, rootElement)

    return () => {
      gctx.clear();
      gctx.revert();
      timeline.current!.clear();
    };
  }, [])

  return (
    <Container>
      <div ref={ rootElement } className={ `relative w-full h-[70vh] flex flex-row items-center justify-between` }>
        <div className={ `w-[60%] flex flex-col items-center justify-start text-center` }>
          <>{ props.heading }</>
          <>{ props.subheading }</>
          {
            props.ctaText && props.ctaAction ?
              (<ButtonOne text={ props.ctaText } action={ props.ctaAction } />) : null
          }
        </div>

        <div className={ `relative z-[0] w-[40%] h-[400px]` }>
          <div className={ `hero_image_part_1 absolute z-[1] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] aspect-square w-[300px]` }>
            <img src={ heroImage.src } alt="" className={ `w-full h-full object-contain` } />
          </div>
          <div className={ `hero_image_part_2 absolute z-[2] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] aspect-square w-[320px] outline-4 outline-accent outline-dashed rounded-full` }></div>
          <div className={ `hero_image_part_3 absolute z-[3] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] aspect-square w-[320px]` }>
            <div className={ `absolute top-[0%] left-[50%] -translate-x-[50%] -translate-y-[50%] aspect-square w-[50px]` }>
              <img
                src={ bubbleImage.src }
                alt=""
                className={ `w-full h-full object-contain` }
              />
            </div>
            <div className={ `absolute top-[50%] -right-[15%] -translate-x-[50%] -translate-y-[50%] aspect-square w-[50px]` }>
              <img src={ bubbleImage.src } alt="" className={ `w-full h-full object-contain` } />
            </div>
            <div className={ `absolute -bottom-[15%] left-[50%] -translate-x-[50%] -translate-y-[50%] aspect-square w-[50px]` }>
              <img src={ bubbleImage.src } alt="" className={ `w-full h-full object-contain` } />
            </div>
            <div className={ `absolute top-[50%] left-[0%] -translate-x-[50%] -translate-y-[50%] aspect-square w-[50px]` }>
              <img
                src={ bubbleImage.src }
                alt=""
                className={ `w-full h-full object-contain` }
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default HeroSection;

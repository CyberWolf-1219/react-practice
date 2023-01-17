import React, { useLayoutEffect, useRef } from "react";

import Section from "../../Section/Section";
import Container from "../../Container/Container";
import Image from "../../Image/Image";

import bgImg from "../../../assets/bg_2.jpg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import H1 from "../../H1/H1";
gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

function SectionThree() {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: rootElement.current,
          markers: false,
          scrub: 1,
          start: "top center",
          end: "bottom+=200px bottom",
        },
        defaults: {
          stagger: 0.3,
        },
      });

      tl.current!.fromTo(
        ".heading_word",
        { yPercent: 200, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          ".section_three_text_one",
          { yPercent: 800 },
          { yPercent: 0, duration: 5 },
          1
        )
        .fromTo(
          ".section_three_image",
          { yPercent: 100 },
          { yPercent: 0, duration: 5 },
          1
        )
        .fromTo(
          ".section_three_text_two",
          { yPercent: 500 },
          { yPercent: 0, duration: 5 },
          2
        );
    }, rootElement);

    return () => {
      gctx.revert();
      tl.current!.revert();
    };
  }, []);

  return (
    <Section>
      <Container>
        <div
          ref={rootElement}
          className={`w-full min-h-screen py-8`}>
          <div
            className={`w-full h-fit flex flex-row items-start justify-between`}>
            <span className={`inline-block font-bold text-3xl`}>02</span>
            <H1
              text={`CHOOSE THE MOST_COMFORTABLE CAR FOR YOU`}
              classes={`section_three_heading`}
            />
          </div>

          <div
            className={`section_three_text_one relative z-[1] top-[100px] left-[100px] w-fit mt-8`}>
            <p className={`w-[50ch] text-left`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              consectetur beatae nisi repellendus architecto, voluptatum sint
              porro ratione assumenda, inventore non harum quam libero facere
              vitae alias corrupti quisquam sequi?
            </p>
          </div>

          <div className={`section_three_image relative w-full mx-auto`}>
            <div
              className={`absolute w-full h-full bg-black/50 mix-blend-overlay pointer-events-none`}></div>
            <Image
              image={bgImg}
              containerClasses={`aspect-[3/1.2] w-full h-auto overflow-hidden`}
              imageClasses={`object-cover`}
            />
          </div>

          <div
            className={`section_three_text_two relative top-[-100px] left-[760px] w-fit`}>
            <p className={`w-[50ch] text-left`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              consectetur beatae nisi repellendus architecto, voluptatum sint
              porro ratione assumenda, inventore non harum quam libero facere
              vitae alias corrupti quisquam sequi?
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SectionThree;

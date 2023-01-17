import React, { useLayoutEffect, useRef } from "react";

import Section from "../../Section/Section";
import Container from "../../Container/Container";

import { HiArrowCircleRight } from "react-icons/hi";
import H1 from "../../H1/H1";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

function SectionSix() {
  const rootElmnt = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: rootElmnt.current,
          markers: false,
          scrub: 1,
          start: "top center",
          end: "bottom+=200px bottom",
        },
      });
    }, rootElmnt);

    tl.current!.fromTo(
      ".heading_word",
      { yPercent: 50, opacity: 0 },
      { yPercent: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        ".section_six_text",
        { yPercent: 50, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1 },
        "<0.2"
      )
      .fromTo(
        ".section_six_row",
        { yPercent: -30, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.2 }
      );

    return () => {
      gctx.revert();
      tl.current!.revert();
    };
  }, []);

  return (
    <Section>
      <Container>
        <div
          ref={rootElmnt}
          className={`w-full min-h-screen py-8`}>
          <div
            className={`relative w-full h-fit flex flex-row items-start justify-start gap-20`}>
            <span className={`font-bold text-3xl`}>05</span>
            <H1
              text={`REQUIREMENTS_YOU NEED`}
              classes={`section_six_heading`}
            />
          </div>
          <p className="section_six_text relative left-[700px] w-[50ch] border-t-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde,
            facere. Eligendi aspernatur magnam consectetur sed, doloremque,
            atque architecto hic fugit error, id ullam molestiae! Eveniet vero
            cupiditate id ut placeat.
          </p>
          <div className={`w-[80%] h-fit ml-auto mt-[200px]`}>
            <div
              className={`section_six_row w-full h-[15ch] ml-auto flex flex-row items-center justify-start content-center p-4 border-t-2`}>
              <div className={`w-[20%] `}>
                <b className={`text-4xl`}>AGE</b>
              </div>
              <div className={`w-[20%] `}>
                <HiArrowCircleRight size={`4rem`} />
              </div>
              <div className={`w-[60%] `}>
                <p className={`w-[50ch]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates similique, sequi, cumque repellat explicabo,
                  exercitationem facere laudantium odit nesciunt ut aut?
                  Dignissimos sed libero nihil quis vitae blanditiis, quae
                  laborum.
                </p>
              </div>
            </div>
            <div
              className={`section_six_row w-full h-[15ch] ml-auto flex flex-row items-center justify-start content-center p-4 border-t-2`}>
              <div className={`w-[20%] `}>
                <b className={`text-4xl`}>
                  DRIVING <br /> LICENSE
                </b>
              </div>
              <div className={`w-[20%] `}>
                <HiArrowCircleRight size={`4rem`} />
              </div>
              <div className={`w-[60%] `}>
                <p className={`w-[50ch]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates similique, sequi, cumque repellat explicabo,
                  exercitationem facere laudantium odit nesciunt ut aut?
                  Dignissimos sed libero nihil quis vitae blanditiis, quae
                  laborum.
                </p>
              </div>
            </div>
            <div
              className={`section_six_row w-full h-[15ch] ml-auto flex flex-row items-center justify-start content-center p-4 border-t-2`}>
              <div className={`w-[20%] `}>
                <b className={`text-4xl`}>
                  CREDIT <br /> CARD
                </b>
              </div>
              <div className={`w-[20%] `}>
                <HiArrowCircleRight size={`4rem`} />
              </div>
              <div className={`w-[60%] `}>
                <p className={`w-[50ch]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates similique, sequi, cumque repellat explicabo,
                  exercitationem facere laudantium odit nesciunt ut aut?
                  Dignissimos sed libero nihil quis vitae blanditiis, quae
                  laborum.
                </p>
              </div>
            </div>
            <div
              className={`section_six_row w-full h-[15ch] ml-auto flex flex-row items-center justify-start content-center p-4 border-y-2`}>
              <div className={`w-[20%] `}>
                <b className={`text-4xl`}>PASSPORT</b>
              </div>
              <div className={`w-[20%] `}>
                <HiArrowCircleRight size={`4rem`} />
              </div>
              <div className={`w-[60%] `}>
                <p className={`w-[50ch]`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptates similique, sequi, cumque repellat explicabo,
                  exercitationem facere laudantium odit nesciunt ut aut?
                  Dignissimos sed libero nihil quis vitae blanditiis, quae
                  laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SectionSix;

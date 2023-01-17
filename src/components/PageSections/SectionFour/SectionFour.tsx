import React, { useLayoutEffect, useRef } from "react";

import Section from "../../Section/Section";
import Container from "../../Container/Container";
import Image from "../../Image/Image";

import { HiArrowRight } from "react-icons/hi";

import img_1 from "../../../assets/v_3.jpg";
import img_2 from "../../../assets/v_4.jpg";
import img_3 from "../../../assets/v_5.jpg";
import img_4 from "../../../assets/v_6.jpg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import H1 from "../../H1/H1";
gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

function SectionFour() {
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

      tl.current!.fromTo(
        ".heading_word",
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1, stagger: 0.3 }
      );
    }, rootElmnt);

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
          <div>
            <div
              className={`w-full h-fit flex flex-row items-start justify-between`}>
              <span className={`inline-block font-bold text-3xl`}>03</span>
              <H1
                text={`SELECT YOUR_FAVOURITE TYPE`}
                classes={`section_four_heading`}
              />
            </div>
            <div
              className={`w-full h-[500px] mt-12   flex flex-row items-center justify-start`}>
              <div className="relative w-[25%] h-full">
                <div
                  className={`absolute z-[2] top-0 left-0 right-0 w-full h-fit p-4 flex flex-row items-center justify-between`}>
                  <a
                    href=""
                    className={`flex flex-row items-center justify-start gap-4 font-semibold text-xl`}>
                    <span>BOOK NOW</span>
                    <span>
                      <HiArrowRight />
                    </span>
                  </a>
                  <span className={`font-semibold text-xl`}>01/</span>
                </div>
                <div className={`absolute z-[1] w-full h-full`}>
                  <Image
                    image={img_1}
                    containerClasses={`w-full h-full`}
                    imageClasses={`object-cover`}
                  />
                </div>
              </div>
              <div className="relative w-[25%] h-full">
                <div
                  className={`absolute z-[2] top-0 left-0 right-0 w-full h-fit p-4 flex flex-row items-center justify-between`}>
                  <a
                    href=""
                    className={`flex flex-row items-center justify-start gap-4 font-semibold text-xl`}>
                    <span>BOOK NOW</span>
                    <span>
                      <HiArrowRight />
                    </span>
                  </a>
                  <span className={`font-semibold text-xl`}>01/</span>
                </div>
                <div className={`absolute z-[1] w-full h-full`}>
                  <Image
                    image={img_2}
                    containerClasses={`w-full h-full`}
                    imageClasses={`object-cover`}
                  />
                </div>
              </div>
              <div className="relative w-[25%] h-full">
                <div
                  className={`absolute z-[2] top-0 left-0 right-0 w-full h-fit p-4 flex flex-row items-center justify-between`}>
                  <a
                    href=""
                    className={`flex flex-row items-center justify-start gap-4 font-semibold text-xl`}>
                    <span>BOOK NOW</span>
                    <span>
                      <HiArrowRight />
                    </span>
                  </a>
                  <span className={`font-semibold text-xl`}>01/</span>
                </div>
                <div className={`absolute z-[1] w-full h-full`}>
                  <Image
                    image={img_3}
                    containerClasses={`w-full h-full`}
                    imageClasses={`object-cover`}
                  />
                </div>
              </div>
              <div className="relative w-[25%] h-full">
                <div
                  className={`absolute z-[2] top-0 left-0 right-0 w-full h-fit p-4 flex flex-row items-center justify-between`}>
                  <a
                    href=""
                    className={`flex flex-row items-center justify-start gap-4 font-semibold text-xl`}>
                    <span>BOOK NOW</span>
                    <span>
                      <HiArrowRight />
                    </span>
                  </a>
                  <span className={`font-semibold text-xl`}>01/</span>
                </div>
                <div className={`absolute z-[1] w-full h-full`}>
                  <Image
                    image={img_4}
                    containerClasses={`w-full h-full`}
                    imageClasses={`object-cover`}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SectionFour;

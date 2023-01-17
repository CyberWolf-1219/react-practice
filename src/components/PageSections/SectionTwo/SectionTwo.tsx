import React, { useLayoutEffect, useRef } from "react";

import Section from "../../Section/Section";
import Container from "../../Container/Container";
import Image from "../../Image/Image";

import { HiArrowDown } from "react-icons/hi";

import img_1 from "../../../assets/v_1.jpg";
import img_2 from "../../../assets/v_2.jpg";
import H1 from "../../H1/H1";

import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

function SectionTwo() {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger: {
          trigger: rootElement.current,
          start: "top center",
          end: "bottom+=300px bottom",
          scrub: 1,
          markers: false,
        },
      });

      tl.current!.fromTo(
        ".heading_word",
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1 }
      )
        .fromTo(
          ".section_two_data",
          { opacity: 0, yPercent: -20 },
          { opacity: 1, yPercent: 0, duration: 0.5, stagger: 0.5 },
          0
        )
        .fromTo(
          ".section_two_image",
          { yPercent: 100 },
          { yPercent: -50, duration: 1, stagger: 1 },
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
          className={`section_two_content_container relative w-full h-[300vh] min-h-screen py-8`}>
          <div
            className={`w-full h-fit flex flex-row items-start justify-between`}>
            <span className={`inline-block font-bold text-3xl`}>01</span>
            <H1
              text={`OUR COMPANY IN_NUMBERS`}
              classes={`section_two_heading`}
            />
          </div>

          <div
            className={`absolute top-[20%] w-fit h-fit flex flex-col items-center justify-start gap-8`}>
            <div className={`section_two_data w-full`}>
              <b className={`font-bold font-f-heading text-6xl`}>6500+</b>
              <span className={`block`}>HAPPY CLIENTS</span>
            </div>
            <div className={`section_two_data w-fit`}>
              <HiArrowDown size={`3rem`} />
            </div>
            <div className={`section_two_data w-full`}>
              <b className={`font-bold font-f-heading text-6xl`}>5000+</b>
              <span className={`block`}>POSITIVE REVIEWS</span>
            </div>
            <div className={`section_two_data w-fit`}>
              <HiArrowDown size={`3rem`} />
            </div>
            <div className={`section_two_data w-full`}>
              <b className={`font-bold font-f-heading text-6xl`}>350+</b>
              <span className={`block`}>DAILY CUSTOMERS</span>
            </div>
          </div>

          <div className={`section_two_image absolute top-[40%] right-[0%]`}>
            <Image
              image={img_1}
              containerClasses={`aspect-[1/1.8] w-[400px] h-auto rounded-tl-[50px] rounded-br-[50px] overflow-hidden`}
              imageClasses={`object-cover`}
            />
          </div>

          <div className={`section_two_image absolute top-[60%]`}>
            <Image
              image={img_2}
              containerClasses={`aspect-[1/1.8] w-[400px] h-auto rounded-tr-[50px] rounded-bl-[50px] overflow-hidden`}
              imageClasses={`object-cover`}
            />
          </div>

          <div className={`section_two_image absolute top-[80%] right-[0%]`}>
            <p className={`w-[50ch] h-auto`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste cum
              incidunt officiis maiores numquam nulla illo mollitia voluptatibus
              blanditiis maxime quia ad perferendis sed nam praesentium aliquam
              laudantium a dolorem autem, enim odit molestiae. Quae reiciendis
              amet similique accusantium, magni mollitia quo in doloribus totam!
              Aliquam voluptate alias rerum tenetur?
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SectionTwo;

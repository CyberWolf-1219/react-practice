import React, { useLayoutEffect, useRef } from "react";

import Section from "../../Section/Section";
import Container from "../../Container/Container";
import Image from "../../Image/Image";

import hero_bg from "./../../../assets/hero_bg.jpeg";
import heroImg from "./../../../assets/hero_image.png";

import gsap from "gsap";
gsap.config({ force3D: true });

function SectionOne() {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const bgVid = useRef<HTMLVideoElement>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    bgVid.current!.play();

    const gctx = gsap.context(() => {
      tl.current = gsap.timeline({
        delay: 8,
        defaults: { duration: 1, stagger: 0.2, ease: "expo.out" },
      });
    }, rootElement);

    tl.current!.fromTo(
      ".hero_section_heading > span",
      { opacity: 0, yPercent: 50 },
      { opacity: 1, yPercent: 0 }
    )
      .fromTo(".hero_section_image", { scale: 0 }, { scale: 1 })
      .fromTo(
        ".hero_section_text",
        { yPercent: 50, opacity: 0 },
        { yPercent: 0, opacity: 1 }
      )
      .fromTo(
        ".hero_section_bullet",
        { xPercent: -50, opacity: 0 },
        { xPercent: 0, opacity: 1 }
      );

    return () => {
      gctx.revert();
      tl.current!.revert();
    };
  }, []);

  return (
    <Section>
      <div className={`absolute inset-0`}>
        {/* <Image
          image={hero_bg}
          containerClasses={`w-full h-screen`}
          imageClasses={`object-cover`}
        /> */}
        <video
          ref={bgVid}
          src="/vid_2.mp4"
          autoPlay={true}
          controls={false}
          loop={true}
          muted={true}
          className={`w-full h-full object-cover`}></video>
      </div>
      <div className={`absolute inset-0 bg-black/10`}></div>
      <Container>
        <div
          ref={rootElement}
          className={`relative z-10 w-full h-screen py-8`}>
          <h1
            className={`hero_section_heading absolute left-[20%] top-[30%] m-0 flex flex-col leading-[1] text-right text-9xl`}>
            <span className={`relative z-10`}>RENT A CAR</span>
            <span className={`relative `}>IN DUBAI</span>
          </h1>

          <p
            className={`hero_section_text absolute right-0 top-[70%] max-w-[50ch] text-justify`}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Exercitationem fugiat repellat doloribus sed excepturi illum
            reiciendis tempore natus odit laudantium aliquam ipsum est cum esse,
            adipisci pariatur numquam corrupti ratione?
          </p>

          <div
            className={`absolute bottom-8 right-[7%] flex flex-row items-center justify-start gap-20`}>
            <div
              className={`hero_section_bullet relative bottom-0 right-0 flex flex-col text-white`}>
              <span>PRICE</span>
              <span className={`font-bold font-f-heading text-2xl`}>
                FROM 1000 AED
              </span>
            </div>
            <div
              className={`hero_section_bullet relative bottom-0 right-0 flex flex-col text-white`}>
              <span>CLIENTS</span>
              <span className={`font-bold font-f-heading text-2xl`}>6500+</span>
            </div>
          </div>

          <div
            className={`hero_section_image absolute bottom-0 left-0 w-[700px] origin-top-left`}>
            <Image
              image={heroImg}
              imageClasses={`object-contain`}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SectionOne;

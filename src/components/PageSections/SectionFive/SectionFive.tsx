import React, { useLayoutEffect, useRef } from "react";
import styleClasses from "./styles.module.css";

import Section from "../../Section/Section";
import Container from "../../Container/Container";
import Image from "../../Image/Image";
import { HiArrowRight } from "react-icons/hi";

import img_1 from "../../../assets/v_1.jpg";
import img_2 from "../../../assets/v_2.jpg";
import img_3 from "../../../assets/v_3.jpg";
import img_4 from "../../../assets/v_4.jpg";
import img_5 from "../../../assets/v_5.jpg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import H1 from "../../H1/H1";
gsap.registerPlugin(ScrollTrigger);
gsap.config({ force3D: true });

function SectionFive() {
  const rootElmnt = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {}, rootElmnt);
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
      { yPercent: 0, opacity: 1, duration: 1 }
    )
      .fromTo(
        ".section_five_text",
        { yPercent: 300 },
        { yPercent: 0, duration: 1 }
      )
      .fromTo(
        ".section_five_card",
        { yPercent: 100 },
        { yPercent: 0, stagger: 1, duration: 1 }
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
          className={`relative w-full min-h-screen`}>
          <div className={`w-full h-fit`}>
            <div
              className={`w-full h-fit flex flex-row items-start justify-between`}>
              <span className={`inline-block w-fit h-fit font-bold text-3xl`}>
                04
              </span>
              <span
                className={`w-[80%] h-fit flex flex-row items-center justify-start gap-2`}>
                <span className={`block w-fit shrink-0`}>
                  CHOOSE THE CAR OF YOUR DREAM
                </span>
                <span className={`block w-full h-[2px] bg-white`}></span>
              </span>
            </div>
            <H1
              text={`NEW ARRIVALS`}
              classes={`section_five_heading text-right`}
            />
          </div>
          <div
            className={`section_five_text absolute top-[10%] right-[0%] w-fit `}>
            <p className={`w-[50ch]`}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic
              dolores aperiam aut aspernatur optio molestiae, quibusdam adipisci
              in quas. Ipsa aliquam assumenda veritatis. Sapiente temporibus
              suscipit dolor laboriosam. Voluptate, saepe.
            </p>
          </div>
          <div className={`${styleClasses.row_container} w-full h-fit mt-32`}>
            <div
              className={`section_four_row w-full h-fit flex flex-row items-center justify-between`}>
              <div className={`section_five_card w-[500px]`}>
                <Image
                  image={img_1}
                  containerClasses={`aspect-[1/1.5] w-full h-auto`}
                />
                <div
                  className={`w-full h-fit flex flex-row items-center justify-between`}>
                  <span>
                    <b>LAMBORGHINI</b>
                  </span>
                  <span>
                    <a
                      href=""
                      className={`w-fit h-fit flex flex-row items-center justify-start gap-2`}>
                      <span>see more</span>
                      <span>
                        <HiArrowRight />
                      </span>
                    </a>
                  </span>
                </div>
                <div>
                  <span>Prices from 2000 AED</span>
                </div>
              </div>
              <div className={`w-full`}></div>
            </div>
            <div
              className={`section_four_row w-full h-fit flex flex-row items-center justify-between`}>
              <div className={`section_five_card w-[500px]`}>
                <Image
                  image={img_2}
                  containerClasses={`aspect-[1/1.5] w-full h-auto`}
                />
                <div
                  className={`w-full h-fit flex flex-row items-center justify-between`}>
                  <span>
                    <b>LAMBORGHINI</b>
                  </span>
                  <span>
                    <a
                      href=""
                      className={`w-fit h-fit flex flex-row items-center justify-start gap-2`}>
                      <span>see more</span>
                      <span>
                        <HiArrowRight />
                      </span>
                    </a>
                  </span>
                </div>
                <div>
                  <span>Prices from 2000 AED</span>
                </div>
              </div>
              <div className={`w-full`}></div>
            </div>
            <div
              className={`section_four_row w-full h-fit flex flex-row items-center justify-between`}>
              <div className={`section_five_card w-[500px]`}>
                <Image
                  image={img_3}
                  containerClasses={`aspect-[1/1.5] w-full h-auto`}
                />
                <div
                  className={`w-full h-fit flex flex-row items-center justify-between`}>
                  <span>
                    <b>LAMBORGHINI</b>
                  </span>
                  <span>
                    <a
                      href=""
                      className={`w-fit h-fit flex flex-row items-center justify-start gap-2`}>
                      <span>see more</span>
                      <span>
                        <HiArrowRight />
                      </span>
                    </a>
                  </span>
                </div>
                <div>
                  <span>Prices from 2000 AED</span>
                </div>
              </div>
              <div className={`w-full`}></div>
            </div>
            <div
              className={`section_four_row w-full h-fit flex flex-row items-center justify-between`}>
              <div className={`section_five_card w-[500px]`}>
                <Image
                  image={img_4}
                  containerClasses={`aspect-[1/1.5] w-full h-auto`}
                />
                <div
                  className={`w-full h-fit flex flex-row items-center justify-between`}>
                  <span>
                    <b>LAMBORGHINI</b>
                  </span>
                  <span>
                    <a
                      href=""
                      className={`w-fit h-fit flex flex-row items-center justify-start gap-2`}>
                      <span>see more</span>
                      <span>
                        <HiArrowRight />
                      </span>
                    </a>
                  </span>
                </div>
                <div>
                  <span>Prices from 2000 AED</span>
                </div>
              </div>
              <div className={`w-full`}></div>
            </div>
            <div
              className={`section_four_row w-full h-fit flex flex-row items-center justify-between`}>
              <div className={`section_five_card w-[500px]`}>
                <Image
                  image={img_5}
                  containerClasses={`aspect-[1/1.5] w-full h-auto`}
                />
                <div
                  className={`w-full h-fit flex flex-row items-center justify-between`}>
                  <span>
                    <b>LAMBORGHINI</b>
                  </span>
                  <span>
                    <a
                      href=""
                      className={`w-fit h-fit flex flex-row items-center justify-start gap-2`}>
                      <span>see more</span>
                      <span>
                        <HiArrowRight />
                      </span>
                    </a>
                  </span>
                </div>
                <div>
                  <span>Prices from 2000 AED</span>
                </div>
              </div>
              <div className={`w-full`}></div>
            </div>
          </div>
          <div className={`w-full h-fit mt-8 p-4 border-y-2 `}>
            <button className={`block w-fit h-fit mx-auto text-lg`}>
              SEE MORE
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SectionFive;

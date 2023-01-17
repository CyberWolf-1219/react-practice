import React, { useEffect, useLayoutEffect, useRef } from "react";
import SectionThreeCard from "../SectionThreeCard/SectionThreeCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import gsap from "gsap";
import star from "../../assets/star.svg";

function SectionThree() {
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>();

  const [section, isVisible] = useIntersectionObserver({ threshold: 0.5 });

  useLayoutEffect(() => {
    const gContext = gsap.context(() => {
      timeline.current = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "elastic.out(1.2, 0.75)",
          stagger: 0.25,
        },
        paused: true,
      });

      timeline.current
        .fromTo(
          ".headings",
          { yPercent: 20, opacity: 0 },
          { yPercent: 0, opacity: 1 }
        )
        .fromTo(
          ".content > *",
          { yPercent: 20, opacity: 0 },
          { yPercent: 0, opacity: 1 }
        );
    }, root);

    return () => {
      gContext.clear();
      timeline.current!.clear();
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      timeline.current!.play();
    }
  });

  return (
    <section ref={section}>
      <div ref={root} className="relative w-full max-w-screen-xl h-fit mx-auto">
        <div className="prop_container absolute w-full h-full">
          <img
            src={star}
            alt=""
            className="absolute top-[20%] left-[60%] aspect-square w-[50px]"
          />
          <img
            src={star}
            alt=""
            className="absolute top-[55%] left-[24%] aspect-square w-[20px]"
          />
          <img
            src={star}
            alt=""
            className="absolute top-[77%] left-[44%] aspect-square w-[36px]"
          />
          <img
            src={star}
            alt=""
            className="absolute top-[49%] left-[80%] aspect-square w-[14px]"
          />
          <img
            src={star}
            alt=""
            className="absolute top-[30%] left-[78%] aspect-square w-[27px]"
          />
        </div>
        <div className="headings w-[40%] h-fit mx-auto text-center">
          <h2>Live Auction</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae modi nobis magni voluptatibus odio minus ullam animi
            cumque aliquam unde.
          </p>
        </div>
        <div className="content w-full h-fit mt-20 flex items-center justify-between">
          <div className="w-fit h-fit">
            <SectionThreeCard />
          </div>
          <div className="w-fit h-fit">
            <SectionThreeCard />
          </div>
          <div className="w-fit h-fit">
            <SectionThreeCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;

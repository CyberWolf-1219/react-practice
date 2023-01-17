import React, { useEffect, useLayoutEffect, useRef } from "react";
import Timeline from "../Timeline/Timeline";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import gsap from "gsap";
import star from "../../assets/star.svg";

function SectionFour() {
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>();

  const [section, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  useLayoutEffect(() => {
    const gContext = gsap.context(() => {
      timeline.current = gsap.timeline({
        paused: true,
        defaults: { duation: 1, ease: "elastic.out(1.2, 0.75", stagger: 0.25 },
      });

      timeline.current!.fromTo(
        ".headings",
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
    <section ref={section} className="">
      <div
        ref={root}
        className="relative w-full h-full max-w-screen-xl mx-auto"
      >
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
        <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-[120%] h-[120%] bg-white/10 skew-y-6"></div>
        <div className="headings w-[40%] h-fit mx-auto text-center">
          <h2>Roadmap 2022</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea
            repellendus neque itaque, inventore error.
          </p>
        </div>
        <div className="w-full h-fit mt-20 mx-auto">
          <Timeline />
        </div>
      </div>
    </section>
  );
}

export default SectionFour;

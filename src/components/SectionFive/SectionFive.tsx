import React, { useEffect, useLayoutEffect, useRef } from "react";
import SectionFiveCard from "./../SectionFiveCard/SectionFiveCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import gsap from "gsap";
import star from "../../assets/star.svg";

function SectionFive() {
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>();

  const [section, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  useLayoutEffect(() => {
    const gContext = gsap.context(() => {
      timeline.current! = gsap.timeline({
        paused: true,
        defaults: {
          duration: 1,
          ease: "elastic.out(1.2, 0.75)",
          stagger: 0.25,
        },
      });

      timeline
        .current!.fromTo(
          ".headings > *",
          { opacity: 0, yPercent: 20 },
          { opacity: 1, yPercent: 0 }
        )
        .fromTo(
          ".card_container > *",
          { xPercent: 20, opacity: 0 },
          { xPercent: 0, opacity: 1 }
        )
        .fromTo(
          ".button",
          { opacity: 0, ease: "bounce.inOut" },
          { opacity: 1 }
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
      <div ref={root} className="relative w-full h-fit max-w-screen-xl mx-auto">
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
          <h2>Top Collections</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            numquam fugit soluta asperiores amet? Cupiditate?
          </p>
        </div>
        <div className="card_container w-full h-fit mt-20 flex items-center justify-between">
          <div className="w-fit h-fit">
            <SectionFiveCard />
          </div>
          <div className="w-fit h-fit">
            <SectionFiveCard />
          </div>
          <div className="w-fit h-fit">
            <SectionFiveCard />
          </div>
        </div>
        <div className="w-fit h-fit mt-8 mx-auto">
          <button className="button w-fit h-fit  px-3 py-2 rounded-full border-2 font-semibold border-secondary text-secondary transition-all hover:bg-secondary/50 hover:text-white">
            Explore more
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionFive;

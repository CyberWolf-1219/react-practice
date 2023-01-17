import React, { useEffect, useLayoutEffect, useRef } from "react";
import CreatorCard from "../CreatorCard/CreatorCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import gsap from "gsap";
import star from "../../assets/star.svg";

function SectionSix() {
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>();

  const [section, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  useLayoutEffect(() => {
    const gContext = gsap.context(() => {
      timeline.current = gsap.timeline({
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
          { yPercent: 20, opacity: 0 },
          { yPercent: 0, opacity: 1 }
        )
        .fromTo(
          ".card_container > *",
          { yPercent: 20, opacity: 0 },
          { yPercent: 0, opacity: 1 }
        )
        .fromTo(
          ".button",
          { opacity: 0 },
          { opacity: 1, ease: "bounce.inOut" }
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

    return () => {};
  });

  return (
    <section ref={section}>
      <div ref={root} className="w-full h-fit max-w-screen-xl mx-auto">
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
          <h2>Our Creators</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            officiis sint molestias suscipit ab cupiditate?
          </p>
        </div>
        <div className="card_container w-full h-fit mt-8 grid gap-4 grid-cols-3 items-center justify-center">
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
          <CreatorCard />
        </div>
        <div className="w-fit h-fit mx-auto mt-8">
          <button className="button w-fit h-fit px-3 py-2 rounded-full border-2 border-secondary text-secondary font-semibold hover:bg-secondary hover:text-primary">
            See More
          </button>
        </div>
      </div>
    </section>
  );
}

export default SectionSix;

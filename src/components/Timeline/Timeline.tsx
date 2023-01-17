import React, { useEffect, useLayoutEffect, useRef } from "react";
import TimelineCard from "../TimelineCard/TimelineCard";
import cardClasses from "../TimelineCard/Styles/index.module.css";
import classes from "./styles/index.module.css";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import gsap from "gsap";

function Timeline() {
  const root = useRef<HTMLDivElement>(null);
  const timeline = useRef<GSAPTimeline>();

  const [rootElement, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  useLayoutEffect(() => {
    rootElement.current = root.current!;
    const gContext = gsap.context(() => {
      timeline.current = gsap.timeline({
        paused: true,
        defaults: {
          duration: 1,
          ease: "bounce.inOut",
          stagger: 1,
        },
      });

      timeline.current!.fromTo(
        ".timeline_card_container > .timeline_card",
        { opacity: 0 },
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
      console.log(`VISIBLE`);
      timeline.current!.play();
    }
  });

  return (
    <div ref={root} className="w-full h-fit py-8">
      <div className="w-full h-[120px] flex flex-row items-center">
        <div className="timeline_card_container w-[45%] flex justify-start">
          <TimelineCard _class={cardClasses.card_right} />
        </div>
        <div className="w-[10%] flex items-center justify-center">
          <div
            className={`${classes.pin} relative w-[25%] aspect-square bg-sky-500 rounded-full after:absolute after:left-[48%] after:top-[100%] after:w-[5px] after:h-[350%] after:bg-secondary/50`}
          ></div>
        </div>
        <div className="w-[45%] flex justify-end"></div>
      </div>

      <div className="w-full h-[120px] flex flex-row items-center">
        <div className="w-[45%] flex justify-start"></div>
        <div className="w-[10%] flex items-center justify-center">
          <div
            className={`${classes.pin} relative w-[25%] aspect-square bg-sky-500 rounded-full after:absolute after:left-[48%] after:top-[100%] after:w-[5px] after:h-[350%] after:bg-secondary/50`}
          ></div>
        </div>
        <div className="timeline_card_container w-[45%] flex justify-end">
          <TimelineCard _class={cardClasses.card_left} />
        </div>
      </div>

      <div className="w-full h-[120px] flex flex-row items-center">
        <div className="timeline_card_container w-[45%] flex justify-start">
          <TimelineCard _class={cardClasses.card_right} />
        </div>
        <div className="w-[10%] flex items-center justify-center">
          <div
            className={`${classes.pin} relative w-[25%] aspect-square bg-sky-500 rounded-full after:absolute after:left-[48%] after:top-[100%] after:w-[5px] after:h-[350%] after:bg-secondary/50`}
          ></div>
        </div>
        <div className="w-[45%] flex justify-end"></div>
      </div>

      <div className="w-full h-[120px] flex flex-row items-center">
        <div className="w-[45%] flex justify-start"></div>
        <div className="w-[10%] flex items-center justify-center">
          <div
            className={`${classes.pin} relative w-[25%] aspect-square bg-sky-500 rounded-full after:absolute after:left-[48%] after:top-[100%] after:w-[5px] after:h-[350%] after:bg-secondary/50`}
          ></div>
        </div>
        <div className="timeline_card_container w-[45%] flex justify-end">
          <TimelineCard _class={cardClasses.card_left} />
        </div>
      </div>

      <div className="w-full h-[120px] flex flex-row items-center">
        <div className="timeline_card_container w-[45%] flex justify-start">
          <TimelineCard _class={cardClasses.card_right} />
        </div>
        <div className="w-[10%] flex items-center justify-center">
          <div
            className={`${classes.pin} relative w-[25%] aspect-square bg-sky-500 rounded-full after:absolute after:left-[48%] after:top-[100%] after:w-[5px] after:h-[350%] after:bg-secondary/50`}
          ></div>
        </div>
        <div className="w-[45%] flex justify-end"></div>
      </div>

      <div className="w-full h-[120px] flex flex-row items-center">
        <div className="w-[45%] flex justify-start"></div>
        <div className="w-[10%] flex items-center justify-center">
          <div
            className={`${classes.pin} relative w-[25%] aspect-square bg-sky-500 rounded-full `}
          ></div>
        </div>
        <div className="timeline_card_container w-[45%] flex justify-end">
          <TimelineCard _class={cardClasses.card_left} />
        </div>
      </div>
    </div>
  );
}

export default Timeline;

import React, { useLayoutEffect, useRef } from "react";
import LinkButton from "../LinkButton/LinkButton";
import classes from "./styles/index.module.css";
import gsap from "gsap";

interface IProjectCardProps {
  image: string;
  heading: string;
  desc: string;
  link: string;
}

function ProjectCard(props: IProjectCardProps) {
  const rootElement = useRef(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gsapCtx = gsap.context(() => {
      tl.current = gsap.timeline({
        defaults: { duration: 1, stagger: 0.25, ease: "expo.out" },
      });

      tl.current.fromTo(
        rootElement.current,
        { xPercent: 50, opacity: 0.2 },
        { xPercent: 0, opacity: 1 }
      );
    }, rootElement);

    return () => {
      gsapCtx.revert();
      tl.current!.clear();
    };
  }, []);

  return (
    <div
      ref={rootElement}
      className={`${classes.card} relative z-0 w-full h-auto aspect-[1/1.5] rounded-lg bg-shade-1 shadow-md shadow-slate-800/30 border-2 border-white`}>
      <div
        className={`${classes.image} absolute w-full h-full rounded-md overflow-hidden`}>
        <img
          className={`w-full h-full object-cover`}
          src={props.image}
          alt=""
        />
      </div>
      <div className={`${classes.detail_wrapper} absolute`}>
        <h4>{props.heading}</h4>
        <p>{props.desc}</p>
        <LinkButton link={props.link} title="Details" target={"_blank"} />
      </div>
    </div>
  );
}

export default ProjectCard;

import React, { useLayoutEffect, useRef } from "react";
import element from "../../assets/element_2.svg";
import { BsArrowRight } from "react-icons/bs";
import Tag from "../Tag/Tag";
import HeroCard from "../HeroCard/HeroCard";
import classes from "./Styles/index.module.css";
import badge from "./../../assets/badge.svg";
import gsap from "gsap";
import star from "./../../assets/star.svg";

function HeroSection() {
  const section = useRef(null);
  const timeline = useRef<GSAPTimeline>();

  useLayoutEffect(() => {
    let gContext = gsap.context(() => {
      timeline.current = gsap.timeline({
        defaults: {
          duration: 1,
          ease: "elastic.out(1.2, 0.75)",
          stagger: 0.25,
        },
      });

      timeline.current
        .fromTo(
          ".prop_container > img",
          { opacity: 0, scale: 0 },
          { opacity: 1, scale: 1 }
        )
        .fromTo(
          ".heading",
          { xPercent: -50, opacity: 0 },
          { xPercent: 0, opacity: 1 },
          "<0.25"
        )
        .fromTo(
          ".ecg",
          { xPercent: -50, opacity: 0 },
          { xPercent: 0, opacity: 1 },
          "<0.25"
        )
        .fromTo(
          "small",
          { xPercent: -50, opacity: 0 },
          { xPercent: 0, opacity: 1 },
          "<0.25"
        )
        .fromTo(
          ".button_container > *",
          { scale: 0.5, opacity: 0, stagger: 0.5 },
          { scale: 1, opacity: 1 },
          "<0.25"
        )
        .fromTo(
          ".bold",
          { xPercent: -50, opacity: 0 },
          { xPercent: 0, opacity: 1 },
          "<0.25"
        )
        .fromTo(
          ".taglist > span",
          { scale: 0.2, opacity: 0, duration: 0.1 },
          { scale: 1, opacity: 1 },
          "<0.25"
        )
        .fromTo(
          ".herocard_wrapper_1",
          { yPercent: 50, rotate: 0, opacity: 0 },
          {
            keyframes: [
              { yPercent: 0, opacity: 1, ease: "elastic.out(1, 0.75)" },
            ],
          },
          "<0.25"
        )
        .fromTo(
          ".herocard_wrapper_2",
          { yPercent: 50, rotate: 0, opacity: 0 },
          {
            keyframes: [
              { yPercent: 0, opacity: 1 },
              { rotate: "30deg", ease: "elastic.out(1, 0.75)" },
            ],
          },
          "<0.25"
        )
        .fromTo(
          ".badge_wrapper",
          { scale: 0.2, opacity: 0 },
          { scale: 1, opacity: 1 },
          "<0.25 "
        );
    }, section);

    return () => {
      gContext.clear();
      timeline.current!.clear();
    };
  }, []);

  return (
    <section ref={section} className={classes.section}>
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
      <div className="w-full h-fit max-w-screen-xl mx-auto flex flex-row items-center justify-between">
        <div className="w-[50%] h-fit flex flex-col items-start justify-start gap-4">
          <h1 className="heading font-black text-7xl flex flex-col">
            <span>Super NFT</span>
            <span className="font-extralight">Marketplace</span>
          </h1>
          <img src={element} alt="" className="ecg w-fit" />
          <small>
            The largest and unique Super rare NFT marketplace For
            crypto-collectables.
          </small>
          <div className="button_container w-full h-fit flex flex-row items-center justify-start gap-8">
            <button className="w-fit h-fit p-3 border-2 border-secondary bg-secondary text-white rounded-full transition-all hover:bg-secondary/50">
              Connect Wallet
            </button>
            <a
              href=""
              className="w-fit h-fit p-3 rounded-full flex items-center justify-center gap-2 text-sky-500 transition-all hover:gap-4 hover:text-primary hover:bg-white"
            >
              Create NFTs <BsArrowRight size={"1.2rem"} />
            </a>
          </div>
          <b className="bold font-extrabold text-lg">
            Last 7 days popular search
          </b>
          <div className="taglist w-full h-fit flex flex-row items-start justify-start gap-4 flex-wrap content-start">
            <Tag>All</Tag>
            <Tag>Music</Tag>
            <Tag>3D Abstract</Tag>
            <Tag>Game</Tag>
            <Tag>Sports</Tag>
            <Tag>Cartoon</Tag>
            <Tag>Virtual World</Tag>
            <Tag>Classic</Tag>
          </div>
        </div>
        <div className="relative w-[50%] h-fit flex items-center justify-center">
          <div className="badge_wrapper absolute -top-[10%] right-[0%]">
            <img src={badge} alt="" />
          </div>

          <div className={`herocard_wrapper_1 relative w-fit h-fit`}>
            <HeroCard />
          </div>

          <div
            className={`herocard_wrapper_2 relative w-fit h-fit -translate-x-[20%] translate-y-[15%] rotate-[35deg]`}
          >
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

import React, { useEffect, useLayoutEffect, useRef } from "react";
import classes from "./Styles/index.module.css";
import gsap from "gsap";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";
import star from "../../assets/star.svg";

function SectionTwo() {
  const root = useRef(null);
  const timeline = useRef<GSAPTimeline>();

  const [section, isVisible] = useIntersectionObserver({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  useLayoutEffect(() => {
    const gCtx = gsap.context(() => {
      timeline.current = gsap.timeline({
        paused: true,
        defaults: { duration: 1, ease: "elastic.out(1, 0.5)", stagger: 0.25 },
      });

      timeline.current
        .fromTo(
          root.current,
          { yPercent: 20, opacity: 0, ease: "Power4.easeOut" },
          { yPercent: 0, opacity: 1 }
        )
        .fromTo(
          ".right > div > *",
          { xPercent: -30, opacity: 0, stagger: 0.25 },
          { xPercent: 0, opacity: 1 }
        );
    }, root);
  }, []);

  useEffect(() => {
    if (isVisible) {
      timeline.current!.play();
    }
  });

  return (
    <section ref={section}>
      <div
        ref={root}
        className={`${classes.section} relative w-full h-fit max-w-screen-xl mx-auto py-8 gap-8 flex flex-row items-center justify-center backdrop-blur-lg bg-white/10`}
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
        <div className="w-[50%]"></div>
        <div className="right w-[40%] h-fit p-8 bg-primary">
          <div className="w-full h-full transition-all hover:scale-125">
            <h2
              className={`${classes.header} w-fit h-fit font-bold transition-all hover:text-secondary cursor-default`}
            >
              Why choose us?
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur aut quisquam dolores iure modi, omnis iste rem fugiat
              earum, nisi, voluptate consectetur adipisci voluptatibus. Deserunt
              impedit totam pariatur, expedita ipsa provident eos, aspernatur et
              accusamus incidunt, debitis reprehenderit nemo minus voluptatum
              dolore esse veritatis tenetur illo vero velit magnam qui?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
              numquam veniam dicta corporis ipsa cum, temporibus vero natus iure
              laborum?
            </p>
            <button className="w-fit h-fit p-3 mt-8 border-2 border-secondary bg-white/30 rounded-full text-white font-semibold transition-all hover:bg-secondary/50 hover:scale-110">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;

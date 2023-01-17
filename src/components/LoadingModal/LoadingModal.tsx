import React, { useRef, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

import gsap from "gsap";
gsap.config({ force3D: true });

function LoadingModal() {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  const overlay_1 = useRef<HTMLDivElement | null>(null);
  const overlay_2 = useRef<HTMLDivElement | null>(null);
  const overlay_text_container = useRef<HTMLDivElement | null>(null);
  const overlay_text = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      tl.current = gsap.timeline({
        delay: 1,
        defaults: { duration: 1, ease: "expo.out" },
      });

      tl.current
        .fromTo(overlay_text_container.current, { scaleX: 0 }, { scaleX: 1 })
        .fromTo(
          overlay_text.current,
          { yPercent: 100, autoAlpha: 1 },
          { keyframes: [{ yPercent: 0 }, { autoAlpha: 0, delay: 1 }] }
        )
        .to(overlay_text_container.current, { autoAlpha: 0 })
        .to(overlay_1.current, {
          keyframes: [
            { autoAlpha: 0.9 },
            { borderColor: "white" },
            { skewX: -15 },
            { xPercent: -120 },
          ],
        })
        .to(
          overlay_2.current,
          {
            keyframes: [
              { autoAlpha: 0.9 },
              { borderColor: "white" },
              { skewX: -15 },
              { xPercent: 120 },
            ],
          },
          "<"
        );
    }, rootElement);

    return () => {
      gctx.revert();
      tl.current!.revert();
    };
  }, []);

  return (
    <div className={`fixed z-[100] w-full h-full overflow-hidden`}>
      <div
        ref={overlay_1}
        className={`absolute z-[80] w-[60%] h-full left-[-10%] bg-black border-r-[3px] border-black`}></div>
      <div
        ref={overlay_2}
        className={`absolute z-[80] w-[60%] h-full left-[50%] bg-black border-l-[3px] border-black`}></div>
      <div
        ref={overlay_text_container}
        className={`absolute z-[90] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-fit h-fit overflow-hidden origin-center border-b-2`}>
        <b
          ref={overlay_text}
          className={`block font-extrabold font-f-heading text-9xl`}>
          PHANTOM
        </b>
      </div>
    </div>
  );
}

function LoadingScreen() {
  return createPortal(<LoadingModal />, document.getElementById("Modal_Root")!);
}

export default LoadingScreen;

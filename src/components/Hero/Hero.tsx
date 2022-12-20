import React, { useEffect, useRef } from "react";
import "../../cursor.css";

function Hero() {
  const cursor = useRef<HTMLDivElement | null>(null);
  const heroSection = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionWidth = heroSection.current?.getBoundingClientRect().width;
    const sectionHeight = heroSection.current?.getBoundingClientRect().height;

    heroSection.current!.addEventListener("mouseenter", (event) => {
      cursor.current!.classList.add("appear");
      cursor.current!.classList.remove("vanish");
    });

    heroSection.current!.addEventListener("mouseleave", (event) => {
      cursor.current!.classList.add("vanish");
      cursor.current!.classList.remove("appear");
    });

    heroSection.current!.addEventListener("mousemove", (event: MouseEvent) => {
      cursor.current!.style.top = `${event.pageY}px`;
      cursor.current!.style.left = `${event.pageX}px`;
    });
  }, []);

  return (
    <section
      ref={heroSection}
      className="relative w-full h-fit cursor-crosshair"
    >
      <div
        ref={cursor}
        id="cursor"
        className="absolute flex flex-col items-center justify-center gap-4 font-semibold text-sm text-center transition-transform -translate-x-[50%] -translate-y-[30%]"
      >
        <div className="w-20 h-20 bg-primary rounded-full flex flex-col items-center justify-center">
          <span className="leading-[0.9]">
            PLAY <br />
            REEL
          </span>
        </div>
        <div>
          BASIC/DEPT <br />
          2010-22.
        </div>
      </div>

      <video
        src="https://basic-admin.basicagency.com/uploads/reel-loop.mp4"
        autoPlay={true}
        controls={false}
      ></video>
    </section>
  );
}

export default Hero;

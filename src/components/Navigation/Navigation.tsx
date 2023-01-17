import React, { useLayoutEffect, useRef } from "react";

import gsap from "gsap";
gsap.config({ force3D: true });

function Navigation() {
  const rootElement = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      tl.current = gsap.timeline({
        delay: 11,
        defaults: { duration: 1, stagger: 0.3, ease: "expo.out " },
      });

      tl.current!.fromTo(
        ".nav_link",
        { xPercent: -50, opacity: 0 },
        { xPercent: 0, opacity: 1 }
      );
    }, rootElement);

    return () => {
      gctx.revert();
      tl.current!.revert();
    };
  }, []);

  return (
    <nav
      ref={rootElement}
      className={`fixed z-50 top-0 left-0 right-0 w-full h-fit flex flex-row items-center justify-between text-white`}>
      <ul
        className={`w-full h-fit max-w-screen-xl mx-auto p-8 flex flex-row items-center justify-between font-bold font-f-body text-2xl`}>
        <li className={`nav_link`}>
          <a href="">
            <h1 className={`text-3xl`}>PHANTOM</h1>
          </a>
        </li>
        <li className={`nav_link`}>
          <a href=""> About Us </a>
        </li>
        <li className={`nav_link`}>
          <a href=""> Lease </a>
        </li>
        <li className={`nav_link`}>
          <a href=""> Rent </a>
        </li>
        <li className={`nav_link`}>
          <a href=""> Brands </a>
        </li>
        <li className={`nav_link`}>
          <a href=""> Contact Us </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

import React, { useLayoutEffect, useRef } from "react";
import logo from "../../assets/navigation/logo.svg";
import gsap from 'gsap';

function Navigation() {

  const rootElement = useRef<HTMLElement | null>(null);
  const timeline = useRef<GSAPTimeline | null>(null)

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      timeline.current = gsap.timeline({ defaults: { duration: 0.5 } });

      timeline.current
        .from('.nav_logo', { xPercent: 100, opacity: 0, delay: 3 })
        .from('.nav_link', { xPercent: 100, opacity: 0, stagger: 0.25 })

    }, rootElement)

    return () => {
      gctx.revert();
      gctx.clear();
    };
  }, [])

  return (
    <nav ref={ rootElement } className={ `w-full max-w-screen-lg h-fit p-4` }>
      <div
        className={ ` w-full h-fit flex flex-row items-center justify-between` }
      >
        <div className={ `nav_logo` }>
          <img src={ logo.src } alt="" />
        </div>
        <div className={ `mr-[10%]` }>
          <ul
            className={ `flex flex-row items-center justify-center gap-8 text-primary font-bold` }
          >
            <li className={ `nav_link` }>
              <a href="/"> Home</a>
            </li>
            <li className={ `nav_link` }>
              <a href="/"> Learn</a>
            </li>
            <li className={ `nav_link` }>
              <a href="/contact"> Contact</a>
            </li>
            <li className={ `nav_link` }>
              <a href="/about"> About</a>
            </li>
            <li className={ `nav_link` }>
              <a href="/faq"> FAQ</a>
            </li>
          </ul>
        </div>
        <div className={ `` }>
          <select name="" id="">
            <option value="">EN</option>
            <option value="">JP</option>
          </select>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

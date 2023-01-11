import React, { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

import useIntersectionObserver from "../../hooks/useIntersectionObserver";

import Container from "../Container/Container";
import BrandValueCard from "../BrandValueCard/BrandValueCard";

import image_1 from "../../assets/section_three/section_three_1.png";
import image_2 from "../../assets/section_three/section_three_2.png";
import image_3 from "../../assets/section_three/section_three_3.png";
import image_4 from "../../assets/section_three/section_three_4.png";
import image_5 from "../../assets/section_three/section_three_5.png";

function SectionThree() {
  const [element, isVisible] = useIntersectionObserver({ rootMargin: "-200px" });

  const timeline = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      timeline.current = gsap.timeline({ paused: true, defaults: { ease: 'expo.out', duration: 0.3 } });

      timeline.current
        .fromTo('p', { xPercent: -100, opacity: 0 }, { xPercent: 0, opacity: 1 })
        .fromTo('h2', { yPercent: 100, opacity: 0 }, { yPercent: 0, opacity: 1 })
        .fromTo('.brand_value_card', { scale: 0.3, opacity: 0 }, { scale: 1, opacity: 1, stagger: 0.2 })

    }, element);

    return () => {
      gctx.clear()
      gctx.revert();
      timeline.current!.clear();
    };
  }, []);

  useEffect(() => {
    console.log(isVisible);
    if (isVisible) {
      timeline.current!.play();
    }

  }, [isVisible])

  return (
    <Container>
      <div ref={ element } className={ `w-full h-fit text-center` }>
        <p className={ `text-accent` }>A BETTER WAY TO INVEST</p>
        <h2 className={ `mb-20` }>The World Leading Cyptocurrency Platform</h2>
        <div className={ `brand_value_card_container w-full h-fit grid grid-cols-3 gap-4 content-center items-center` }>
          <BrandValueCard
            image={ image_1.src }
            title={ `100% Satisfaction` }
            text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel libero, maiores dicta non tenetur molestias nostrum rem dolorem sed.` }
          />
          <BrandValueCard
            image={ image_2.src }
            title={ `100% Satisfaction` }
            text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel libero, maiores dicta non tenetur molestias nostrum rem dolorem sed.` }
          />
          <BrandValueCard
            image={ image_3.src }
            title={ `100% Satisfaction` }
            text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel libero, maiores dicta non tenetur molestias nostrum rem dolorem sed.` }
          />
          <BrandValueCard
            image={ image_4.src }
            title={ `100% Satisfaction` }
            text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel libero, maiores dicta non tenetur molestias nostrum rem dolorem sed.` }
          />
          <BrandValueCard
            image={ image_5.src }
            title={ `100% Satisfaction` }
            text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel libero, maiores dicta non tenetur molestias nostrum rem dolorem sed.` }
          />
          <BrandValueCard
            image={ image_1.src }
            title={ `100% Satisfaction` }
            text={ `Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vel libero, maiores dicta non tenetur molestias nostrum rem dolorem sed.` }
          />
        </div>
      </div>
    </Container>
  );
}

export default SectionThree;

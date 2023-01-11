import React, { useLayoutEffect, useRef } from "react";

import Container from "../Container/Container";
import ServiceCard from "../ServiceCard/ServiceCard";
import thumb_1 from "../../assets/thumb_1.png";
import thumb_2 from "../../assets/thumb_2.png";
import thumb_3 from "../../assets/thumb_3.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SectionTwo() {

  const rootElement = useRef<HTMLDivElement | null>(null);
  const tl = useRef<GSAPTimeline | null>(null);

  useLayoutEffect(() => {
    const gctx = gsap.context(() => {
      rootElement.current!.querySelectorAll(".service_card").forEach((card, index) => {
        gsap.timeline({
          scrollTrigger: {
            trigger: rootElement.current, start: "top center"
          }
        })
          .fromTo(
            card,
            {
              xPercent: 50,
              autoAlpha: 0,
            },
            {
              xPercent: 0,
              autoAlpha: 1,
              delay: 0.1 * index,
              duration: 1,
              ease: "power4.out"
            }
          )
      })

    }, rootElement);

    return () => {
      gctx.revert();
    };
  }, [])

  return (
    <Container classes={ `` }>
      <div ref={ rootElement } className={ `w-full h-fit grid grid-cols-3 gap-2` }>
        <ServiceCard
          title={ `Swedish Deep Tissue Massage` }
          price={ `550,000.00` }
          image={ thumb_2 }
          link={ `#` }
        />
        <ServiceCard
          title={ `Facial Massage with Scrubs` }
          price={ `550,000.00` }
          image={ thumb_1 }
          link={ `#` }
        />
        <ServiceCard
          title={ `Body Treatment with Scrubs` }
          price={ `550,000.00` }
          image={ thumb_3 }
          link={ `#` }
        />
      </div>
    </Container>
  );
}

export default SectionTwo;

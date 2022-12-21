import React, { useEffect, useRef } from "react";
import "./Styles/section_two.css";
import SectionTwoCard from "./../SectionTwoCard/SectionTwoCard";
import icon_2 from "./../../assets/icon_1.svg";
import icon_1 from "./../../assets/icon_2.svg";
import icon_3 from "./../../assets/icon_3.svg";
import icon_4 from "./../../assets/icon_4.svg";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function SectionTwo() {
  const [h2, isVisible] = useIntersectionObserver({});
  const [cardContainer, ccIsVisible] = useIntersectionObserver({});

  return (
    <section>
      <div className="section_two_content_wrapper">
        <h2 ref={h2} className={`${isVisible ? "visible" : ""}`}>
          HOW <span>NFTALIEN</span> WORK
        </h2>

        <div
          ref={cardContainer}
          className={`${ccIsVisible ? "visible" : ""} section_two_card_wrapper`}
        >
          <SectionTwoCard
            icon={icon_1}
            heading="STEP 1"
            desc="Connect Your Wallet"
          />
          <SectionTwoCard
            icon={icon_2}
            heading="STEP 2"
            desc="Connect Your Wallet"
          />
          <SectionTwoCard
            icon={icon_3}
            heading="STEP 3"
            desc="Connect Your Wallet"
          />
          <SectionTwoCard
            icon={icon_4}
            heading="STEP 4"
            desc="Connect Your Wallet"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;

import React from "react";
import "./Styles/section_four.css";
import SectionFourCard from "./../SectionFourCard/SectionFourCard";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function SectionFour() {
  const [contentWrapper, cwVisible] = useIntersectionObserver({});

  return (
    <section>
      <div
        ref={contentWrapper}
        className={`${cwVisible ? "visible" : ""} section_four_content_wrapper`}
      >
        <div className="column">
          <h2>THE STORY</h2>
          <p>
            Our collection's priority is to reward NFT holders by developing
            utilities they can use in their current everyday life. Not in a
            hypothetical future.
          </p>
          <div>
            <span>
              <p>TOTAL ITEMS</p>
              <b>2240+</b>
            </span>
            <span>
              <p>Profiles Whitelisted</p>
              <b>1000+</b>
            </span>
          </div>
          <button>READ MORE</button>
        </div>
        <div className="column card_wrapper">
          <SectionFourCard />
          <SectionFourCard />
          <SectionFourCard />
          <SectionFourCard />
        </div>
      </div>
    </section>
  );
}

export default SectionFour;

import React from "react";
import "./Styles/section_three.css";
import SectionThreeCard from "./../SectionThreeCard/SectionThreeCard";
import image_1 from "./../../assets/nfts/nft_1.png";
import image_2 from "./../../assets/nfts/nft_2.png";
import image_3 from "./../../assets/nfts/nft_3.png";
import image_4 from "./../../assets/nfts/nft_4.png";
import image_5 from "./../../assets/nfts/nft_5.png";
import image_6 from "./../../assets/nfts/nft_6.png";
import image_7 from "./../../assets/nfts/nft_7.png";
import image_8 from "./../../assets/nfts/nft_8.png";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

function SectionThree() {
  const [heading, headingVisible] = useIntersectionObserver({});
  const [cardWrapper, cwVisible] = useIntersectionObserver({});

  return (
    <section>
      <div className="section_three_content_wrapper">
        <h1 ref={heading} className={`${headingVisible ? "visible" : ""}`}>
          HOT COLLECTION
        </h1>
        <div
          ref={cardWrapper}
          className={`${cwVisible ? "visible" : ""} card_wrapper`}
        >
          <SectionThreeCard image={image_1} title="SKIRIS #02" />
          <SectionThreeCard image={image_2} title="SKIRIS #02" />
          <SectionThreeCard image={image_3} title="SKIRIS #02" />
          <SectionThreeCard image={image_4} title="SKIRIS #02" />
          <SectionThreeCard image={image_5} title="SKIRIS #02" />
          <SectionThreeCard image={image_6} title="SKIRIS #02" />
          <SectionThreeCard image={image_7} title="SKIRIS #02" />
          <SectionThreeCard image={image_8} title="SKIRIS #02" />
        </div>
      </div>
    </section>
  );
}

export default SectionThree;

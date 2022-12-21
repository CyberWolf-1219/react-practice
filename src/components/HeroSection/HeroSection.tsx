import React from "react";
import "./Styles/hero_section.css";

function HeroSection() {
  return (
    <section>
      <div className="hero_content_wrapper">
        <div className="light_flare"></div>

        <div className="heading_wrapper">
          <h1>EXPLORE NFT COLLECTION</h1>
          <small>
            A collection of 2525 highly-fashionable NFTs on the ETH Blockchain.
            Unique, metaverse-ready, and designed to benefit their holders.
          </small>
        </div>
        <div className="button_wrapper">
          <button>CONNECT WALLET</button>
          <button>WHITELIST NOW</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

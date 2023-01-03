import React, { useLayoutEffect, useRef } from "react";

import Container from "../Container/Container";
import ServiceCard from "../ServiceCard/ServiceCard";
import thumb_1 from "../../assets/thumb_1.png";
import thumb_2 from "../../assets/thumb_2.png";
import thumb_3 from "../../assets/thumb_3.png";

function SectionTwo() {
  return (
    <Container classes={``}>
      <div className={`w-full h-fit grid grid-cols-3 gap-0`}>
        <ServiceCard
          title={`Swedish Deep Tissue Massage`}
          price={`550,000.00`}
          image={thumb_2}
          link={`#`}
        />
        <ServiceCard
          title={`Facial Massage with Scrubs`}
          price={`550,000.00`}
          image={thumb_1}
          link={`#`}
        />
        <ServiceCard
          title={`Body Treatment with Scrubs`}
          price={`550,000.00`}
          image={thumb_3}
          link={`#`}
        />
      </div>
    </Container>
  );
}

export default SectionTwo;

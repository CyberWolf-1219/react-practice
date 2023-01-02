import React from "react";
import Container from "../Container/Container";
import PriceCard from "../PriceCard/PriceCard";

function SectionSeven() {
  return (
    <section>
      <Container classes={`p-4 rounded-lg`}>
        <div className={`w-full h-fit max-w-screen-sm p-4 mx-auto text-center`}>
          <h2>Prices</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
            cupiditate nam officiis. Optio ad, quod tempore saepe, libero natus
            et labore illo vitae atque ex distinctio repellendus, accusantium
            non neque!
          </p>
        </div>
        <div className={`w-full h-fit grid grid-cols-1 md:grid-cols-3 gap-4`}>
          <PriceCard
            title={`Personal`}
            price={`$189.88`}
            packageItems={[
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
            ]}
          />
          <PriceCard
            title={`Personal`}
            price={`$189.88`}
            packageItems={[
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
            ]}
          />
          <PriceCard
            title={`Personal`}
            price={`$189.88`}
            packageItems={[
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
              "Lorem ipsum dolor sit amet.",
            ]}
          />
        </div>
      </Container>
    </section>
  );
}

export default SectionSeven;

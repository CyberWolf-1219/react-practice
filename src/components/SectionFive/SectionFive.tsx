import React from "react";
import Container from "../Container/Container";
import TestimonialCard from "../TestimonialCard/TestimonialCard";
import dummyImage from "../../assets/user.jpg";

function SectionFive() {
  return (
    <section>
      <Container classes={`p-4 rounded-lg`}>
        <div className={`w-full h-fit max-w-screen-sm p-4 mx-auto text-center`}>
          <h2>Testimonials</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            corporis error quos libero consequuntur exercitationem nisi magni
            dolorum, vitae sit!
          </p>
        </div>
        <div
          className={`w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`}>
          <TestimonialCard
            image={dummyImage}
            name="Alexandar Sten"
            corp="Stella"
            testimoni={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis error quos libero consequuntur exercitationem nisi magni dolorum, vitae sit!"
            }
          />
          <TestimonialCard
            image={dummyImage}
            name="Alexandar Sten"
            corp="Stella"
            testimoni={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis error quos libero consequuntur exercitationem nisi magni dolorum, vitae sit!"
            }
          />
          <TestimonialCard
            image={dummyImage}
            name="Alexandar Sten"
            corp="Stella"
            testimoni={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis error quos libero consequuntur exercitationem nisi magni dolorum, vitae sit!"
            }
          />
          <TestimonialCard
            image={dummyImage}
            name="Alexandar Sten"
            corp="Stella"
            testimoni={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum corporis error quos libero consequuntur exercitationem nisi magni dolorum, vitae sit!"
            }
          />
        </div>
      </Container>
    </section>
  );
}

export default SectionFive;

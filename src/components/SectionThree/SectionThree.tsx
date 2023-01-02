import React from "react";
import Container from "../Container/Container";
import FeatureCard from "../FeatureCard/FeatureCard";
import sendIcon from "../../assets/icons/send.svg";
import starIcon from "../../assets/icons/star.svg";
import calendarIcon from "../../assets/icons/calendar.svg";
import heartIcon from "../../assets/icons/heart.svg";

function SectionThree() {
  return (
    <section>
      <Container classes={`text-center rounded-lg`}>
        <div className={`w-fit h-fit max-w-screen-sm p-4 mx-auto`}>
          <h2>Services</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis nam
            nihil aperiam soluta obcaecati quia fugit accusantium animi possimus
            ab vero ea quidem deserunt iure, unde accusamus dolore. Quos,
            cumque!
          </p>
        </div>
        <div
          className={`w-full h-fit p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4`}>
          <FeatureCard
            image={sendIcon}
            heading={`Pro Support`}
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ea tempora quibusdam labore eligendi sequi, explicabo accusantium laboriosam sed nemo!"
            link={`#`}
          />
          <FeatureCard
            image={starIcon}
            heading={`Pro Support`}
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ea tempora quibusdam labore eligendi sequi, explicabo accusantium laboriosam sed nemo!"
            link={`#`}
          />
          <FeatureCard
            image={calendarIcon}
            heading={`Pro Support`}
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ea tempora quibusdam labore eligendi sequi, explicabo accusantium laboriosam sed nemo!"
            link={`#`}
          />
          <FeatureCard
            image={heartIcon}
            heading={`Pro Support`}
            text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ea tempora quibusdam labore eligendi sequi, explicabo accusantium laboriosam sed nemo!"
            link={`#`}
          />
        </div>
      </Container>
    </section>
  );
}

export default SectionThree;

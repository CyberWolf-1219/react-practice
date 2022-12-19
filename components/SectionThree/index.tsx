import Section from "../Section";

function SectionThree() {
  return (
    <Section classList="flex-col items-center bg-black">
      <h2 className="flex items-center font-extrabold text-8xl">
        <span className="text-accent">WHO</span>
        <span className="text-white text-5xl leading-[0.8]">
          WE <br /> ARE
        </span>
      </h2>
      <p className="mt-8 text-secondary text-2xl text-justify">
        We are a full-stack marketing agency with proven experience of 7+ years.
        we take pride in our founders having experience in scaling and helping
        Pakistani and international brands to become what they have been
        thriving for years. our team is qualified in marketing, branding, and
        development we create brands that scale
      </p>
      <h2 className="relative mt-8 flex items-center">
        <span className="relative -bottom-6 w-[2rem] h-auto text-secondary font-extrabold text-4xl transform -rotate-90">
          OUR
        </span>
        <span className="text-accent font-extrabold text-8xl">MISSION</span>
      </h2>
      <p className="mt-8 text-secondary text-2xl text-justify">
        Our Mission is to help business to scale their business and to grow
        beyond their expectation.
      </p>
    </Section>
  );
}

export default SectionThree;

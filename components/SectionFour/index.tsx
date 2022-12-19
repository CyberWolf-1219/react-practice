import Graph from "../Graph";
import Section from "../Section";

function SectionFour() {
  return (
    <Section classList="bg-black flex-col items-center">
      <h2 className="text-secondary font-extrabold text-6xl">
        <div className="">
          <span>THE </span>
          <span className="text-accent">OPPORTUNITY</span>
        </div>
        <div>
          <span>YOUR ARE </span>
          <span className="text-accent">MISSING!</span>
        </div>
      </h2>
      <Graph />
    </Section>
  );
}

export default SectionFour;

import Section from "../Section";
import HeroImage from "../../assets/hero.png";

function HeroSection() {
  return (
    <Section classList="relative flex-col">
      <div className="flex flex-col gap-0 items-center justify-center">
        <h3 className="leading-[0]">let's fly</h3>
        <h1 className="leading-[full] text-white font-black">TOGETHER</h1>
      </div>
      <img
        src={HeroImage.src}
        alt=""
        className="relative top-[-80px] w-full object-contain"
      />
    </Section>
  );
}

export default HeroSection;

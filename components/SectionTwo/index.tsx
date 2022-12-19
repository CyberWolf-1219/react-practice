import Section from "../Section";
import logo_1 from "../../assets/logos/logo_3.png";
import logo_2 from "../../assets/logos/logo_10.png";
import logo_3 from "../../assets/logos/logo_11.png";

function SectionTwo() {
  return (
    <Section classList="flex-col items-center bg-black rounded-t-[50px]">
      <div className="flex flex-col gap-0 items-start justify-start">
        <span className="text-white leading-[0] text-xl font-bold">
          WE ARE A
        </span>
        <span className="text-yellow-500 font-black text-8xl">FULLSTACK</span>

        <span className="text-white leading-[0.2] font-extrabold text-5xl tracking-wide">
          MARKETING AGENCEY
        </span>
      </div>
      <div className="mt-32 font-extrabold text-5xl">
        <span className="text-white">OFFICIAL </span>
        <span className="text-yellow-500">PARTNERS</span>
      </div>
      <div className="w-full mt-8 flex items-center justify-center gap-12 bg-accent rounded-lg">
        <img
          src={logo_1.src}
          alt=""
          className="h-[100px] object-contain aspect-[3/2]"
        />
        <img
          src={logo_2.src}
          alt=""
          className="h-[100px] object-contain aspect-[3/2]"
        />
        <img
          src={logo_3.src}
          alt=""
          className="h-[100px] object-contain aspect-[3/2]"
        />
      </div>
    </Section>
  );
}

export default SectionTwo;

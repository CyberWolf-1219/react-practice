import Section from "../Section";
import logo_1 from "../../assets/logos/logo_6.png";
import logo_2 from "../../assets/logos/logo_2.png";
import logo_3 from "../../assets/logos/logo_3.png";
import logo_4 from "../../assets/logos/logo_4.png";
import logo_5 from "../../assets/logos/logo_5.png";
import logo_6 from "../../assets/logos/logo_6.png";
import logo_7 from "../../assets/logos/logo_7.png";
import logo_8 from "../../assets/logos/logo_8.png";
import logo_9 from "../../assets/logos/logo_9.png";
import logo_10 from "../../assets/logos/logo_10.png";
import logo_11 from "../../assets/logos/logo_11.png";
import logo_12 from "../../assets/logos/logo_12.png";

function SectionFive() {
  return (
    <Section classList="flex-col items-center justify-start bg-black">
      <h2 className="font-bold text-4xl text-center">
        <div className="text-white">OUR</div>
        <div className="text-accent">DELIGHTSOME</div>
        <div className="text-white">CLIENTS</div>
      </h2>
      <div className="grid grid-cols-4 auto-rows-fr items-center justify-center gap-2">
        <img src={logo_1.src} alt="" />
        <img src={logo_2.src} alt="" />
        <img src={logo_3.src} alt="" />
        <img src={logo_4.src} alt="" />
        <img src={logo_5.src} alt="" />
        <img src={logo_6.src} alt="" />
        <img src={logo_7.src} alt="" />
        <img src={logo_8.src} alt="" />
        <img src={logo_9.src} alt="" />
        <img src={logo_10.src} alt="" />
        <img src={logo_11.src} alt="" />
        <img src={logo_12.src} alt="" />
      </div>
    </Section>
  );
}

export default SectionFive;

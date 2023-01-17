import { ServiceCard, Carousel } from "./../components";
import { heroHeader, heroParagraphs, heroCTA } from "../data/HeroData";
import {
  hero_image,
  award,
  uxui_logo,
  start_blue,
  start_green,
  sprite_1,
  sprite_2,
} from "../assets/images";
import "./homepage.css";
import { section_2, section_3, section_4 } from "../data/SectionData";

const HomePage = () => {
  return (
    <>
      <section id="section_1">
        <span>
          <h1>{heroHeader}</h1>
          <p>{heroParagraphs}</p>
          <button>{heroCTA}</button>
        </span>
        <div>
          <img className="hero_img" src={hero_image} alt="" />
          <img className="star one" src={start_blue} alt="" />
          <img className="star two" src={start_blue} alt="" />
          <img className="star three" src={start_green} alt="" />
          <span className="section_1_prop">
            <img src={award} alt="" />
            <p>Best Design Award</p>
          </span>
          <span className="section_1_prop">
            <img src={uxui_logo} alt="" />
            <p> Experienced</p>
          </span>
          <span className="section_1_prop">
            <b>10</b>
            <p>Years of Experience</p>
          </span>
        </div>
      </section>

      <section id="section_2">
        <span>
          <h2>{section_2.header}</h2>
          <p>{section_2.paragraph}</p>
          <button>{section_2.cta}</button>
        </span>
        <div id="service_card_container">
          {section_2.services.map((item, index) => {
            return (
              <ServiceCard
                key={index}
                image={item.img}
                title={item.title}
                paragraph={item.paragraph}
              />
            );
          })}
        </div>
      </section>

      <section id="section_3">
        <h2>{section_3.header_1}</h2>
        <Carousel items={section_3.projects} />
      </section>

      <section id="section_4">
        <img src={sprite_1} alt="" id="section_4_prop_1" className="sprite_1" />
        <img src={sprite_1} alt="" id="section_4_prop_2" className="sprite_1" />
        <img src={sprite_2} alt="" id="section_4_prop_3" className="sprite_2" />
        <img src={sprite_2} alt="" id="section_4_prop_4" className="sprite_2" />
        <h2>{section_4.header}</h2>
        <p>{section_4.paragraph}</p>
        <Carousel items={section_4.projects} />
      </section>
    </>
  );
};

export default HomePage;

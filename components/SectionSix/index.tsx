import AvatarCard from "../AvatarCard";
import Section from "../Section";
import Avatar_1 from "../../assets/avatars/avatar_1.png";
import Avatar_2 from "../../assets/avatars/avatar_2.png";
import Avatar_3 from "../../assets/avatars/avatar_3.png";
import Avatar_4 from "../../assets/avatars/avatar_4.png";
import Avatar_5 from "../../assets/avatars/avatar_5.png";
import Avatar_6 from "../../assets/avatars/avatar_6.png";

function SectionSix() {
  return (
    <Section classList="w-[75%] h-fit p-16 mx-auto bg-black flex-col items-center justify-start">
      <h2 className="font-bold text-4xl text-white text-center">
        THE TEAM THAT MAKES <br />
        THE <span className="text-accent">MAGIC</span> HAPPEN!
      </h2>
      <div className="w-full grid grid-cols-3 auto-rows-fr gap-4 items-center justify-center">
        <AvatarCard
          avatar={Avatar_1.src}
          name="Jawad Irfan"
          role_1="cmo-marketing wizard"
          role_2="co-founder"
        />
        <AvatarCard
          avatar={Avatar_2.src}
          name="Jawad Irfan"
          role_1="cmo-marketing wizard"
          role_2="co-founder"
        />
        <AvatarCard
          avatar={Avatar_3.src}
          name="Jawad Irfan"
          role_1="cmo-marketing wizard"
          role_2="co-founder"
        />
        <AvatarCard
          avatar={Avatar_4.src}
          name="Jawad Irfan"
          role_1="cmo-marketing wizard"
          role_2="co-founder"
        />
        <AvatarCard
          avatar={Avatar_5.src}
          name="Jawad Irfan"
          role_1="cmo-marketing wizard"
          role_2="co-founder"
        />
        <AvatarCard
          avatar={Avatar_6.src}
          name="Jawad Irfan"
          role_1="cmo-marketing wizard"
          role_2="co-founder"
        />
      </div>
    </Section>
  );
}

export default SectionSix;

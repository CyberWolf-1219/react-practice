import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

interface IMemeberCardProps {
  image: string;
  name: string;
  role: string;
  bio: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
  linkedin?: string;
}

function MemberCard(props: IMemeberCardProps) {
  return (
    <div
      className={`w-full h-auto aspect-[1/1.2] p-4 flex flex-col items-center justify-center gap-4 bg-shade-1 backdrop-blur-sm rounded-lg text-primary shadow-md shadow-slate-800/20`}>
      <div
        className={`w-[150px] h-[150px] mx-auto border-4 border-white rounded-full overflow-hidden shadow-md shadow-black/30`}>
        <img src={props.image} alt="" />
      </div>
      <div className={``}>
        <h4 className={`my-4`}>{props.name}</h4>
        <h5 className={`my-4`}>{props.role}</h5>
      </div>
      <div>{props.bio}</div>
      <div
        className={`w-full h-auto mx-auto grid grid-cols-4 items-center justify-items-center`}>
        {props.facebook ? (
          <span>
            <a href={props.facebook}>
              <BsFacebook size={`1.5rem`} />
            </a>
          </span>
        ) : (
          ""
        )}
        {props.instagram ? (
          <span>
            <a href={props.instagram}>
              <BsInstagram size={`1.5rem`} />
            </a>
          </span>
        ) : (
          ""
        )}
        {props.twitter ? (
          <span>
            <a href={props.twitter}>
              <BsTwitter size={`1.5rem`} />
            </a>
          </span>
        ) : (
          ""
        )}
        {props.linkedin ? (
          <span>
            <a href={props.linkedin}>
              <BsLinkedin size={`1.5rem`} />
            </a>
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default MemberCard;

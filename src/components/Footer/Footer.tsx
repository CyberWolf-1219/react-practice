import React from "react";
import logo from "../../assets/logo.svg";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer className="w-full h-fit px-12 py-8 bg-white/20">
      <div className="w-full h-fit max-w-screen-xl mx-auto ">
        <div className="w-full h-fit mb-20 flex items-start justify-between gap-8">
          <div className="flex-1 flex flex-col items-start justify-start gap-4">
            <img src={logo} alt="" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque,
              molestiae fugit praesentium, corporis asperiores eveniet atque eum
              harum molestias veritatis debitis, nulla laborum fugiat maxime.
            </p>
            <div className="flex items-center justify-between gap-4">
              <a href="">
                <BsFacebook color="#55aaff" size={"2rem"} />
              </a>
              <a href="">
                <BsInstagram color="#55aaff" size={"2rem"} />
              </a>
              <a href="">
                <BsTwitter color="#55aaff" size={"2rem"} />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <b className="font-bold text-lg m-0 mb-20">SiteMap</b>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>NFT</li>
              <li>Roadmap</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex-1">
            <b className="font-bold text-lg m-0 mb-20">Company</b>
            <ul>
              <li>Help & Support</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex-1">
            <b className="font-bold text-lg m-0 mb-20">Resources</b>
            <ul>
              <li>Partners</li>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        <small>Copyright\u889 NFTcore2022Allrightsreserved</small>
      </div>
    </footer>
  );
}

export default Footer;

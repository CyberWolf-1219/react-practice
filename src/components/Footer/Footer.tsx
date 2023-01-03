import React from "react";
import Container from "../Container/Container";
import logo from "../../assets/logo.svg";
import { BsArrowRight, BsPhone, BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <footer className={`w-full h-fit p-12`}>
      <Container classes={`flex flex-row items-start justify-between`}>
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <b>About</b>
          <ul className={`flex flex-col gap-2`}>
            <li>Profile</li>
            <li>Services</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div>
          <b>Articles</b>
          <ul className={`flex flex-col gap-2`}>
            <li>Heathline</li>
            <li>Services</li>
            <li>Promo</li>
          </ul>
        </div>
        <div>
          <b>Contact</b>
          <ul className={`flex flex-col gap-2`}>
            <li className={`flex flex-row gap-4 items-center justify-start`}>
              <span>
                <BsPhone />
              </span>
              <span>(000) 0000 000</span>
            </li>
            <li className={`flex flex-row gap-4 items-center justify-start`}>
              <span>
                <BsWhatsapp />
              </span>
              <span>0000 0000 0000 00</span>
            </li>
          </ul>
        </div>
        <div>
          <b>Get early promos</b>
          <div
            className={`w-fit h-fit flex flex-row items-center justify-between gap-4`}>
            <input
              type="email"
              name=""
              id=""
              placeholder={`Email`}
              className={`border-b-2 border-black text-black placeholder-black`}
            />
            <span>
              <BsArrowRight />
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;

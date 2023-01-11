import React from "react";
import classes from "./styles/index.module.css";

import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsPhone,
  BsPin,
  BsTwitter,
} from "react-icons/bs";

import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
    <footer className={`${classes.footer} w-full h-fit overflow-hidden`}>
      <div className={`relative z-0 w-full h-full max-w-screen-lg mx-auto`}>
        <div
          className={`relative z-[2] w-full h-fit mt-[15%] flex flex-row items-start justify-around gap-8 text-white`}>
          <div className={`flex-1`}>
            <h4>Signup Now</h4>
            <p>Signup now to get N500 bounus.</p>
            <button
              className={`p-2 rounded-md bg-white text-accent font-semibold`}>
              REGISTER
            </button>
            <div
              className={`w-fit h-fit mt-4 flex flex-row items-center justify-between gap-4`}>
              <span
                className={`w-[2rem] h-[2rem] p-2 flex items-center justify-center rounded-full bg-white`}>
                <BsFacebook size={`1.2rem`} color={`#F24405`} />
              </span>
              <span
                className={`w-[2rem] h-[2rem] p-2 flex items-center justify-center rounded-full bg-white`}>
                <BsInstagram size={`1.2rem`} color={`#F24405`} />
              </span>
              <span
                className={`w-[2rem] h-[2rem] p-2 flex items-center justify-center rounded-full bg-white`}>
                <BsTwitter size={`1.2rem`} color={`#F24405`} />
              </span>
              <span
                className={`w-[2rem] h-[2rem] p-2 flex items-center justify-center rounded-full bg-white`}>
                <BsLinkedin size={`1.2rem`} color={`#F24405`} />
              </span>
            </div>
          </div>
          <div className={`flex-1`}>
            <h4>Useful Links</h4>
            <ul className={`${classes.list} w-full h-fit grid grid-cols-2`}>
              <li>Home</li>
              <li>AboutUs</li>
              <li>Pricing Plang</li>
              <li>FAQ</li>
              <li>Learn</li>
              <li>Contact</li>
              <li>Company</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className={`flex-1`}>
            <h4>Contacts</h4>
            <div className={`flex flex-col items-start justify-start gap-4`}>
              <div className={`flex flex-row items-center justify-start gap-4`}>
                <span>
                  <BsPin size={`1.5rem`} />
                </span>
                <span>
                  Plot 11, Ogbolu Onwuka, <br /> Amuwo Odofin GRA, Lagos
                </span>
              </div>
              <div className={`flex flex-row items-center justify-start gap-4`}>
                <span>
                  <BsPhone size={`1.5rem`} />
                </span>
                <span>
                  +234 122 9389 228 <br /> +234 092 4544 253
                </span>
              </div>
              <div className={`flex flex-row items-center justify-start gap-4`}>
                <span>
                  <HiOutlineMail size={`1.5rem`} />
                </span>
                <span>Info@paybuymax.com</span>
              </div>
            </div>
          </div>
          <div className={`flex-1`}>
            <h4>Legal</h4>
            <ul>
              <li>
                <a href="#"> Privacy Policy</a>
              </li>
              <li>
                <a href="#"> Terms & Conditions</a>
              </li>
              <li>
                <a href="#"> Anti-Money Laundering</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`relative z-[2] w-full h-fit p-4 mt-8 border-t-2 border-slate-200 text-white text-center`}>
        <small>(c) Copyright Paybuymax 2022. All right reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;

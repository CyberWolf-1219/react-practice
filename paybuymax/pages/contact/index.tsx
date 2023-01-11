import Head from "next/head";
import React from "react";
import Footer from "../../components/Footer/Footer";

import Navigation from "../../components/Navigation/Navigation";
import HeroSection from "../../components/HeroSection/HeroSection";
import SectionNine from "../../components/SectionNine/SectionNine";

import { BsPhone, BsPin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FiSend } from "react-icons/fi";

import mapImage from "../../assets/map.jpg";
import Header from "../../components/Header/Header";

function contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact Us" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header
        classes={`relative z-0 w-full h-fit max-w-screen-lg mx-auto overflow-x-hidden`}>
        <Navigation />
        <HeroSection
          heading={<h1 className={`text-white`}>Contact Us</h1>}
          subheading={
            <p className={`text-white`}>
              We trade cryptocurrency, gift cards and electronic assets.
            </p>
          }
        />
      </Header>

      <main
        className={`max-w-screen-lg min-h-screen my-12 mx-auto flex flex-col gap-8 items-center justify-between `}>
        <div
          className={`w-full h-fit flex flex-row items-start justify-between gap-16`}>
          <div className={`w-[70%]`}>
            <form
              action=""
              className={`w-full h-fit flex flex-col items-center justify-start gap-8`}>
              <div
                className={`w-full h-fit flex flex-row gap-8 items-center justify-between`}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder={`Name...`}
                  className={`w-full h-fit p-2 rounded-md outline-none border-2 border-slate-400 font-semibold`}
                />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder={`Email...`}
                  className={`w-full h-fit p-2 rounded-md outline-none border-2 border-slate-400 font-semibold`}
                />
              </div>
              <div
                className={`w-full h-fit flex flex-row gap-8 items-center justify-between`}>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder={`Mobile Number...`}
                  className={`w-full h-fit p-2 rounded-md outline-none border-2 border-slate-400 font-semibold`}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder={`Subject`}
                  className={`w-full h-fit p-2 rounded-md outline-none border-2 border-slate-400 font-semibold`}
                />
              </div>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className={`w-full p-2 border-2 border-slate-400 rounded-md`}></textarea>
              <button
                className={`w-[20ch] h-fit p-3 flex flex-row items-center justify-center gap-4 bg-gradient-to-r from-accent-2 to-accent rounded-full text-white font-bold`}>
                <span>
                  <FiSend />
                </span>
                <span>Send Mail</span>
              </button>
            </form>
          </div>
          <div
            className={`w-[30%] h-fit p-4 flex flex-col items-center justify-start gap-4 bg-accent-2/30`}>
            <h3>More About Us</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
              ratione id, praesentium unde velit voluptatum, optio, officia odio
              numquam exercitationem reiciendis animi amet voluptatem fugit! Et
              inventore similique minima animi.
            </p>
            <div
              className={`w-full h-fit p-3 bg-white rounded-sm flex flex-row items-center justify-start gap-4 font-bold`}>
              <span>
                <BsPhone size={`1.5rem`} />
              </span>
              <span>
                <p>+234 802 2345 123</p>
              </span>
            </div>
            <div
              className={`w-full h-fit p-3 bg-white rounded-sm flex flex-row items-center justify-start gap-4 font-bold`}>
              <span>
                <BsPhone size={`1.5rem`} />
              </span>
              <span>
                <p>+802 2345 123</p>
              </span>
            </div>
            <div
              className={`w-full h-fit p-3 bg-white rounded-sm flex flex-row items-center justify-start gap-4 font-bold`}>
              <span>
                <HiOutlineMail size={`1.5rem`} />
              </span>
              <span>
                <p>Info@paybuymax.com</p>
              </span>
            </div>
            <div
              className={`w-full h-fit p-3 bg-white rounded-sm flex flex-row items-center justify-start gap-4 font-bold`}>
              <span>
                <BsPin size={`1.5rem`} />
              </span>
              <span>
                <p>Plot 11, Ogbolu Onwuka, Amuwo Odofin GRA, Lagos</p>
              </span>
            </div>
          </div>
        </div>
        <div className={`w-full h-fit`}>
          <div className={`w-[600px] h-auto mx-auto`}>
            <img
              src={mapImage.src}
              alt=""
              className={`w-full h-full object-contain`}
            />
          </div>
        </div>
        <SectionNine />
      </main>
      <Footer />
    </>
  );
}

export default contact;

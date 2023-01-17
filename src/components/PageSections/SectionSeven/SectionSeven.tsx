import React from "react";

import Section from "../../Section/Section";
import Container from "../../Container/Container";

function SectionSeven() {
  return (
    <Section>
      <Container>
        <div className={`w-full min-h-screen py-8 pt-0 bg-fade/20`}>
          <div className={`w-full h-[500px]`}>
            <video
              className={`w-full h-full object-cover`}
              controls={false}
              muted={true}
              autoPlay={true}>
              <source
                src={`/bg.mp4`}
                type="video/mp4"
              />
            </video>
          </div>
          <div className={`w-full h-fit`}>
            <form
              action=""
              className={`w-full h-fit p-28`}>
              <b className={`block font-f-heading text-5xl`}>
                INFO@PHANTOMRENTCARD.COM
              </b>
              <b className={`block mt-8 font-f-heading text-4xl`}>
                +000 1 2345 555
              </b>
              <b className={`block mt-8 font-f-body text-3xl`}>
                Building No:279, SHH, Zayed Bin <br /> St. (Al Salam St.), Abu
                Dhabi, ADE
              </b>
              <div
                className={`w-full h-fit mt-8 flex flex-row items-center justify-between gap-8`}>
                <input
                  type="text"
                  name=""
                  id=""
                  className={`flex-1 font-semibold text-xl p-3 border-4 border-fade`}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className={`flex-1 font-semibold text-xl p-3 border-4 border-fade`}
                />
              </div>
              <div
                className={`w-full h-fit mt-8 flex flex-row items-center justify-between gap-8`}>
                <input
                  type="text"
                  name=""
                  id=""
                  className={`flex-1 font-semibold text-xl p-3 border-4 border-fade`}
                />
                <input
                  type="text"
                  name=""
                  id=""
                  className={`flex-1 font-semibold text-xl p-3 border-4 border-fade`}
                />
              </div>
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className={`w-full mt-8 p-3 border-4 border-fade`}></textarea>
              <input
                type="submit"
                value="SEND"
                className={`w-full h-fit p-3 text-white bg-black font-bold font-f-heading border-4 border-fade`}
              />
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default SectionSeven;

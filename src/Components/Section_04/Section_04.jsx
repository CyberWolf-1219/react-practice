import React from "react";

function Section_04() {
  return (
    <section className="max-w-screen-lg w-full h-fit mx-auto flex flex-col gap-8 py-4 px-12">
      <div className="w-fill text-center">
        <h2 className="font-bold text-3xl text-gray-500">Why Choose Us</h2>
        <small className="font-light text-sm text-gray-500">
          Project Selection is a process to assess each project idea and select
          the project with the highest priority
        </small>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 overflow-visible">
        <div className="md:min-w-[400px] h-[180px] flex flex-row items-center gap-4 shadow-md p-4">
          <span className="w-fit inline-block p-4 bg-teal-500 rounded-full">
            <svg
              className="w-[76px] h-[76px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zm48 0c0 141.4-114.6 256-256 256S0 397.4 0 256S114.6 0 256 0S512 114.6 512 256z" />
            </svg>
          </span>
          <span className="w-3/4 inline-block">
            <h4 className="font-semibold text-base text-gray-500">
              Wide Range of Properties
            </h4>
            <p className="font-light text-sm text-gray-500">
              Our in-house marketing team is committed to operating at full
              capacity.
            </p>
            <a href="#" className="flex items-center">
              <span>Find a home</span>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </span>
        </div>
        <div className="md:min-w-[400px] h-[180px] flex flex-row items-center gap-4 shadow-md p-4">
          <span className="w-fit inline-block p-4 bg-teal-500 rounded-full">
            <svg
              className="w-[76px] h-[76px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path d="M160 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h50.7L9.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L256 109.3V160c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H160zM576 80c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM448 208c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM400 384c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm48 80c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm128 0c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM272 384c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zm48 80c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zM144 512c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48zM576 336c0-26.5-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48s48-21.5 48-48zm-48-80c26.5 0 48-21.5 48-48s-21.5-48-48-48s-48 21.5-48 48s21.5 48 48 48z" />
            </svg>
          </span>
          <span className="w-3/4 inline-block">
            <h4 className="font-semibold text-base text-gray-500">
              Finance Made Easy
            </h4>
            <p className="font-light text-sm text-gray-500">
              Our in-house marketing team is committed to operating at full
              capacity.
            </p>
            <a href="#" className="flex items-center">
              <span>Find a home</span>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </span>
        </div>
        <div className="md:min-w-[400px] h-[180px] flex flex-row items-center gap-4 shadow-md p-4">
          <span className="w-fit inline-block p-4 bg-teal-500 rounded-full">
            <svg
              className="w-[76px] h-[76px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4c0 17-13.8 30.7-30.7 30.7H265.1 182.9 30.7C13.8 512 0 498.2 0 481.3c0-80.6 59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z" />
            </svg>
          </span>
          <span className="w-3/4 inline-block">
            <h4 className="font-semibold text-base text-gray-500">
              Thousonds of Users
            </h4>
            <p className="font-light text-sm text-gray-500">
              Our in-house marketing team is committed to operating at full
              capacity.
            </p>
            <a href="#" className="flex items-center">
              <span>Find a home</span>
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Section_04;

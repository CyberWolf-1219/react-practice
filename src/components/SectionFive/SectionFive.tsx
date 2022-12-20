import React from "react";

function SectionFive() {
  return (
    <section className="p-[8rem]">
      <div className="w-full h-fit flex flex-row items-start justify-between">
        <div className="flex-1 w-min">
          <q className="font-black text-5xl text-black flex flex-col">
            BASIC/DEPT® HELPS BRANDS
            <span> ●CONNECT</span>
            <span>W/ CULTURE</span>
          </q>
          <p className="mt-1 font-light">
            ADWEEK <span className="font-semibold">(AGENCY SPOTLIGH)</span>
          </p>
          <div className="mt-16">
            <a
              href="#"
              className="px-3 py-2 border-2 border-secondary rounded-full"
            >
              About Us
            </a>
          </div>
        </div>
        <div className="flex-1">
          <video
            src="https://basic-admin.basicagency.com/uploads/Culture-Loop_v1.mp4"
            autoPlay={true}
          />
        </div>
      </div>
    </section>
  );
}

export default SectionFive;

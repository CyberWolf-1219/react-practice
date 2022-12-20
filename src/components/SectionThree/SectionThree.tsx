import React from "react";

function SectionThree() {
  return (
    <section className="p-[6.25vw]">
      <div className="w-full h-full flex flex-row items-center justify-center gap-4">
        <div className="flex-1 flex flex-col gap-1 flex-wrap group cursor-pointer">
          <div className="flex-1  overflow-hidden">
            <img
              src="https://basic-admin.basicagency.com/uploads/Work/Patagonia/Images/_720xAUTO_crop_center-center_65_none/Patagonia-Case-Study-Thumbnail.jpg"
              alt=""
              className="group-hover:scale-110 transition-transform"
            />
          </div>
          <div>
            <h4 className="m-4 group-hover:underline">PATAGONIA</h4>
            <p className="m-4 w-[50%] uppercase text-sm">
              An eCommerce experience driven by Patagonia’s brand mission
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 flex-wrap group cursor-pointer">
          <div className="flex-1  overflow-hidden">
            <img
              src="https://basic-admin.basicagency.com/uploads/Work/Wilson/Images/_720xAUTO_crop_center-center_65_none/WIlson-Case-Study-Thumbnail.jpg"
              alt=""
              className="group-hover:scale-110 transition-transform"
            />
          </div>
          <div>
            <h4 className="m-4 group-hover:underline">PATAGONIA</h4>
            <p className="m-4 w-[50%] uppercase text-sm">
              An eCommerce experience driven by Patagonia’s brand mission
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-4 flex-wrap group cursor-pointer">
          <div className="flex-1  overflow-hidden">
            <video
              src="https://basic-admin.basicagency.com/uploads/Work/Google-Store/Video/Google-Store-Web-Design-Case-Study-Thumbnail-02.mp4"
              autoPlay
              className="w-full h-full group-hover:scale-110 transition-transform"
            ></video>
          </div>
          <div>
            <h4 className="m-4 group-hover:underline">PATAGONIA</h4>
            <p className="m-4 w-[50%] uppercase text-sm">
              An eCommerce experience driven by Patagonia’s brand mission
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionThree;

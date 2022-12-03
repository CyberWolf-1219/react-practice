import React from "react";

function HomePageSlide({
  idNo,
  image,
  link,
}: {
  idNo: number;
  image: string;
  link: String;
}) {
  return (
    <div
      id={idNo.toString()}
      className="shrink-0 relative min-w-screen w-screen h-full max-w-[1280px] max-h-[1080px] snap-center lg:min-w-full"
    >
      <img src={image} alt="" className="w-full h-full object-cover" />
      <button className="absolute top-1/2 left-1/2 md:top-auto md:left-auto md:bottom-0 md:-right-16 -translate-x-1/2 -translate-y-1/2 w-fit h-fit p-4 bg-emerald-600/80 rounded-lg text-2xl font-bold">
        View Property
      </button>
    </div>
  );
}

export default HomePageSlide;

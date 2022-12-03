import React from "react";
import dummyHouse from "./../assets/dummy_home.jpg";

function ResultCard() {
  return (
    <div className="relative w-full h-[70vh] snap-x snap-center lg:h-fit lg:bg-white lg:shadow-md">
      <img
        src={dummyHouse.src}
        alt=""
        className="w-full h-auto object-cover md:hidden"
      />

      <div className="w-screen min-w-screen h-fit overflow-auto flex items-center justify-start gap-1 md:w-full">
        <div className="min-w-[150px] min-h-[150px] md:min-w-[250px] md:h-[250px] bg-slate-600"></div>
        <div className="min-w-[150px] min-h-[150px] md:min-w-[250px] md:h-[250px] bg-slate-600"></div>
        <div className="min-w-[150px] min-h-[150px] md:min-w-[250px] md:h-[250px] bg-slate-600"></div>
        <div className="min-w-[150px] min-h-[150px] md:min-w-[250px] md:h-[250px] bg-slate-600"></div>
        <div className="min-w-[150px] min-h-[150px] md:min-w-[250px] md:h-[250px] bg-slate-600"></div>
      </div>

      <div className="flex flex-col items-start justify-start p-2">
        <label htmlFor="" className="font-semibold text-xl text-slate-700">
          BedRooms: <span>4</span>
        </label>
        <label htmlFor="" className="font-semibold text-xl text-slate-700">
          BathRooms: <span>4</span>
        </label>
        <label htmlFor="" className="font-semibold text-xl text-slate-700">
          KitchenArea: <span>80sqrft</span>
        </label>
        <label htmlFor="" className="font-semibold text-xl text-slate-700">
          GarageSize: <span>120sqrft</span>
        </label>
      </div>

      <div className="absolute bottom-0 left-0 right-0 md:static md:w-full">
        <button className="w-full p-4 flex items-center justify-center gap-4 bg-emerald-500 text-white font-bold hover:bg-emerald-400">
          <span>Make A Call</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-telephone-fill fill-white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ResultCard;

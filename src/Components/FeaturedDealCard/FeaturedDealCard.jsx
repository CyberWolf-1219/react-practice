import React from "react";

function FeaturedDealCard({
  title = "Awesome Deal",
  address = "1234 12st Someplace, AnotherPlace",
  bedRooms = 1,
  bathRooms = 1,
  area = 1,
  type = "Rent",
  price = "38,000",
}) {
  return (
    <div className="w-[250px] h-fit md:w-[900px] flex flex-col md:flex-row items-center justify-center gap-4 p-8 bg-white shadow-md rounded-xl">
      <div className="text-center w-full md:w-2/6 md:text-left">
        <b className="mb-4 text-teal-500 font-bold text-lg block">{title}</b>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <span className="inline">
            <svg
              className="w-4 h-4 fill-teal-500"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
            </svg>
          </span>
          <span className="inline text-sm">{address}</span>
        </div>
      </div>

      <div className="w-full md:w-4/6 flex flex-col md:flex-row gap-4 items-center justify-center">
        <span className="flex-1 w-full flex flex-row gap-2 items-center">
          <span>
            <svg
              className="w-8 h-8 p-1 bg-teal-500 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zM176 288c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80z" />
            </svg>
          </span>
          <span className="text-left">
            <div className="font-xs text-gray-400">Bedrooms</div>
            <div>{bedRooms}</div>
          </span>
        </span>
        <span className="flex-1 w-full flex flex-row gap-2 items-center">
          <span>
            <svg
              className="w-8 h-8 p-1 bg-teal-500 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
            </svg>
          </span>
          <span className="text-left">
            <div className="font-xs text-gray-400">Bathrooms</div>
            <div>{bathRooms}</div>
          </span>
        </span>
        <span className="flex-1 w-full flex flex-row gap-2 items-center">
          <span>
            <svg
              className="w-8 h-8 p-1 bg-teal-500 fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z" />
            </svg>
          </span>
          <span className="text-left">
            <div className="font-xs text-gray-400">Area</div>
            <div>{`${area} sq ft`}</div>
          </span>
        </span>
        <span className="flex-1 flex flex-col items-center text-left">
          <span className="block text-gray-400">{`For ${type}`}</span>
          <b className="block text-teal-500 font-semibold">{` $${price}`}</b>
        </span>
      </div>
    </div>
  );
}

export default FeaturedDealCard;

import React from "react";
import dummyImg from "./../../assets/featuredProperty.png";

function FeaturedPropertySaleCard({
  address = "Unnamed Road, Las Vegas, NV\
89103, USA",
  bedRooms = 4,
  bathRooms = 4,
  houseArea = 1500,
  listingYear = 2022,
  image = { dummyImg },
}) {
  return (
    <div className="w-fit h-fit md:min-w-[30%] md:h-[150px] flex flex-col md:flex-row items-center justify-start  overflow-hidden">
      <div className="w-full h-1/2 md:h-full">
        <img
          className="w-full h-full md:w-[300px] md:h-[200px] object-cover"
          src={dummyImg}
          alt=""
        />
      </div>

      <div className="w-full md:w-full h-1/2 md:h-full p-8 md:p-0 md:pl-2 flex flex-col justify-start md:items-start gap-2 text-gray-500">
        <b>{address}</b>
        <div className="w-full md:w-max h-max grid grid-cols-2 grid-rows-2 gap-4">
          <div className="flex md:items-center gap-2">
            <span>
              <svg
                className="w-6 h-6 fill-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c.2 35.5-28.5 64.3-64 64.3H128.1c-35.3 0-64-28.7-64-64V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24zM352 224c0-35.3-28.7-64-64-64s-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64zm-96 96c-44.2 0-80 35.8-80 80c0 8.8 7.2 16 16 16H384c8.8 0 16-7.2 16-16c0-44.2-35.8-80-80-80H256z" />
              </svg>
            </span>
            <span>{`${bedRooms} Bedrooms`}</span>
          </div>
          <div className="flex md:items-center gap-2">
            <span>
              <svg
                className="w-6 h-6 fill-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M368 80h32v32H368V80zM352 32c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64v64c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32V160c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H352zM96 160c17.7 0 32-14.3 32-32H320c0 17.7 14.3 32 32 32V352c-17.7 0-32 14.3-32 32H128c0-17.7-14.3-32-32-32V160zM48 400H80v32H48V400zm320 32V400h32v32H368zM48 112V80H80v32H48z" />
              </svg>
            </span>
            <span>{`${bathRooms} Bathrooms`}</span>
          </div>
          <div className="flex md:items-center gap-2">
            <span>
              <svg
                className="w-6 h-6 fill-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z" />
              </svg>
            </span>
            <span>{`${houseArea} SqFt`}</span>
          </div>
          <div className="flex md:items-center gap-2">
            <span>
              <svg
                className="w-6 h-6 fill-teal-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
              </svg>
            </span>
            <span>{`${listingYear}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedPropertySaleCard;

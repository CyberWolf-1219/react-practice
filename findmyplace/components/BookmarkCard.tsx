import React from "react";
import DetailTag from "./DetailTag";
import { PropertyData } from "./../types/types";
import { MdDeleteOutline } from "react-icons/md";

function BookmarkCard({ propertyDetails }: { propertyDetails: PropertyData }) {
  return (
    <div className="w-full h-fit min-h-[200px] p-2 flex flex-col gap-2 items-center justify-start rounded-md shadow-md shadow-slate-500">
      {/* DELETE BTN */}
      <div className="w-full h-[30px] p-2 flex items-center justify-between bg-red-400/30 border-[2px] rounded-md hover:cursor-pointer hover:scale-105 transition-transform">
        <span className="text-red-500">Delet From Bookmarks</span>
        <MdDeleteOutline size={"20px"} color={"#f04848"} />
      </div>
      {/* DETAILS */}
      <div className="w-full h-[170px] flex flex-row gap-2">
        <img
          src={propertyDetails.propertyImage}
          alt=""
          className="w-[40%] h-full border-[2px]  rounded-md object-cover"
        />
        <span className="w-[60%] h-full p-1 flex flex-col gap-2 border-[2px] rounded-md">
          {/* HEADER */}
          <div className="w-full h-fit flex flex-row items-center justify-between border-b-[2px]">
            <span>
              {propertyDetails.country}, {propertyDetails.city}
            </span>
            <span>${propertyDetails.pricePerMonth}</span>
          </div>
          {/* TAG CONTAINER */}
          <div className="w-full h-fit flex flex-row gap-1 flex-wrap">
            <DetailTag>
              <span>Bedrooms: {propertyDetails.bedrooms}</span>
            </DetailTag>
            <DetailTag>
              <span>Bathrooms: {propertyDetails.bathrooms}</span>
            </DetailTag>
            <DetailTag>
              <span>ContactNo: {propertyDetails.providerContact}</span>
            </DetailTag>
          </div>
        </span>
      </div>
    </div>
  );
}

export default BookmarkCard;

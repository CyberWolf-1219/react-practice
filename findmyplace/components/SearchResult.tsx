import React, { useState, useContext } from "react";
import dummyImage from "./../assets/dummy_home.jpg";
import DetailTag from "./DetailTag";
import {
  BsBookmarkPlus,
  BsStarFill,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import { IoMdLocate } from "react-icons/io";
import { AppMapContext } from "../contexts/MapContext";

interface IDetails {
  property: {
    rating: number;
    beds: number;
    baths: number;
    sqrFt: number;
  };
  location: [number, number];
}

function SearchResult({ details }: { details: IDetails }) {
  const mapContext = useContext(AppMapContext);
  const [bookMarkerd, setBookMarkerd] = useState<Boolean>(false);

  function bookmarkBtnHandler(event: React.MouseEvent) {
    event.preventDefault();
    setBookMarkerd((prevState) => !prevState);
  }

  const bookmarkIconToRender = bookMarkerd ? (
    <BsFillBookmarkCheckFill color="blue" size={"1.5rem"} />
  ) : (
    <BsBookmarkPlus color="#cecece" size={"1.5rem"} />
  );

  function invokeFly() {
    mapContext.flyToLocation(details.location);
  }

  return (
    <div className="shrink-0 w-screen h-full flex flex-row snap-start rounded-lg overflow-hidden bg-white">
      <img
        src={dummyImage.src}
        alt=""
        className="min-w-[40%] h-full object-cover"
      />
      <div className="relative min-w-[60%] h-full p-2 flex flex-col gap-2 flex-wrap items-start justify-start">
        <div className="w-full h-fit pb-2 flex items-center justify-between border-b-2">
          <h3 className="font-semibold text-lg">Heaven Aprtments</h3>
          <span onClick={bookmarkBtnHandler}>{bookmarkIconToRender}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <DetailTag>
            <span>{details.property.rating}</span>
            <BsStarFill />
          </DetailTag>
          <DetailTag>
            <span>{details.property.beds}Bedrooms</span>
          </DetailTag>
          <DetailTag>
            <span>{details.property.baths} Baths</span>
          </DetailTag>
          <DetailTag>
            <span>{details.property.sqrFt} Baths</span>
          </DetailTag>
        </div>

        <div className="absolute bottom-2 w-full pr-4 flex items-center justify-between">
          <b className="text-blue-600 font-bold text-lg">$4500/Month</b>
          <span
            className="w-fit h-fit p-1 bg-blue-600 rounded-full"
            onClick={invokeFly}
          >
            <IoMdLocate size={"1.5rem"} color={"white"} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;

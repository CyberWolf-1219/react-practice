import React, { useState } from "react";
import Map from "./Map";
import dummyImage from "./../assets/dummy_home.jpg";
import DetailTag from "./DetailTag";
import {
  BsBookmarkPlus,
  BsStarFill,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";

interface IDetails {
  rating: number;
  beds: number;
  baths: number;
  sqrFt: number;
}

function SearchResult({ details }: { details: IDetails }) {
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

  return (
    <div className="shrink-0 w-screen h-full flex flex-row snap-start">
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
            <span>{details.rating}</span>
            <BsStarFill />
          </DetailTag>
          <DetailTag>
            <span>{details.beds}Bedrooms</span>
          </DetailTag>
          <DetailTag>
            <span>{details.baths} Baths</span>
          </DetailTag>
          <DetailTag>
            <span>{details.sqrFt} Baths</span>
          </DetailTag>
        </div>

        <div className="absolute bottom-2">
          <b className="text-blue-600 font-bold text-lg">$4500/Month</b>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;

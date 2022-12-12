import React, { useState, useContext, useEffect } from "react";
import DetailTag from "./DetailTag";
import {
  BsBookmarkPlus,
  BsStarFill,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import { IoMdLocate } from "react-icons/io";
import { AppMapContext } from "../contexts/MapContext";
import { IDetails } from "../interfaces/all";
import useFetch from "../hooks/useFetch";
import { AuthContext } from "../contexts/AuthContext";

function SearchResult({ details }: { details: IDetails }) {
  const mapContext = useContext(AppMapContext);
  const authContext = useContext(AuthContext);

  const [bookmarked, setBookmarked] = useState<Boolean>(false);
  const [checkBookmarked] = useFetch("/api/listings/bookmarks", {
    "Content-Type": "application/json",
  });
  const [addToBookmarks] = useFetch("/api/listings/bookmarks", {
    "Content-Type": "application/json",
  });

  useEffect(() => {
    isBookmarked();
    mapContext.addMarker(details.location[0], details.location[1]);
  }, []);

  async function isBookmarked() {
    const bookmarkedCheckResult = await checkBookmarked({
      action: "check",
      userID: authContext.data?.user!.id,
      propertyID: details.id,
    });
    console.log(
      `SEARCH RESULT IS BOOKMARKED: `,
      bookmarkedCheckResult.bookmarked!
    );
    if (bookmarkedCheckResult.bookmarked) {
      setBookmarked(true);
    }
  }

  async function bookmarkBtnHandler(event: React.MouseEvent) {
    event.preventDefault();
    setBookmarked((prevState) => !prevState);
    const bookmarkAddResult = await addToBookmarks({
      action: "add",
      userID: authContext.data?.user!.id,
      propertyID: details.id,
    });
    console.log(`Bookmark Add Result: `, bookmarkAddResult);
  }

  const bookmarkIconToRender = bookmarked ? (
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
        src={details.propertyImage}
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
            <span>{details.bedrooms}Bedrooms</span>
          </DetailTag>
          <DetailTag>
            <span>{details.bathrooms} Baths</span>
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

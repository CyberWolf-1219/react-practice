import React, { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import ListingCard from "./ListingCard";
import { v4 } from "uuid";

function ListingViewer({ userID }: { userID: string }) {
  const [fetchListings] = useFetch("/api/listings/listings-provider", {
    "Content-Type": "application/json",
  });

  const [listings, setListings] = useState([]);

  useEffect(() => {
    getListings();
  }, []);

  async function getListings() {
    const listingReqResult = await fetchListings({ userID: userID });
    console.log(`LISTINGS VIEWER: `, listingReqResult);
    setListings(listingReqResult.listings);
  }

  if (listings.length > 0) {
    return (
      <div className="mt-14 w-full h-[200px] p-1 overflow-x-scroll overflow-y-hidden flex flex-row gap-1 items-center justify-start bg-slate-200 shadow-md shadow-slate-500 lg:mt-24">
        {listings.map((propertyData, index) => {
          return (
            <ListingCard
              key={`${index}_${v4()}`}
              listingDetails={propertyData}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="mt-14 w-full h-[200px] p-1 overflow-y-auto flex flex-col gap-1 items-center justify-center bg-slate-300 shadow-md shadow-slate-500 lg:mt-24 ">
        <img src="/folder.png" alt="" className="w-[50px] h-[50px]" />
        <b>Wow... Empty!</b>
      </div>
    );
  }
}

export default ListingViewer;

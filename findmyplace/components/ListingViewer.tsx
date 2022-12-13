import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import ListingCard from "./ListingCard";

function ListingViewer({ userID }: { userID: string }) {
  const [fetchListings] = useFetch("/api/listings/listings-provider", {
    "Content-Type": "application/json",
  });

  useEffect(() => {
    getListings();
  }, []);

  async function getListings() {
    const listings = await fetchListings({ userID: userID });
    console.log(`LISTINGS VIEWER: `, listings);
  }

  return (
    <div className="mt-14 w-full h-[200px] p-1 overflow-y-auto flex flex-row gap-1 items-center justify-start bg-slate-200">
      <ListingCard />
    </div>
  );
}

export default ListingViewer;

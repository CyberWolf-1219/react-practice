import React from "react";
import Map from "./Map";
import SearchResult from "./SearchResult";

const dummyDetails = {
  rating: 3.5,
  beds: 3,
  baths: 2,
  sqrFt: 4,
};

function SearchResultPanel({ classList }: { classList: string }) {
  return (
    <div className={`${classList}`}>
      <SearchResult details={dummyDetails} />
      <SearchResult details={dummyDetails} />
      <SearchResult details={dummyDetails} />
      <SearchResult details={dummyDetails} />
    </div>
  );
}

export default SearchResultPanel;

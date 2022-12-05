import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import SearchResult from "./SearchResult";
import { IDummyDetails } from "../interfaces/all";

function SearchResultPanel({ classList }: { classList: string }) {
  const [data, setData] = useState<{
    status: string;
    propertyArray: Array<any>;
  }>();
  const searchContext = useContext(SearchContext);
  searchContext.setSearchResultUpdateFunction(setData!);
  useEffect(() => {
    console.log(`SearchResultPanel:`, data);
  });

  const content = data
    ? data.propertyArray.map((Obj: IDummyDetails, index: number) => {
        return <SearchResult key={index} details={Obj} />;
      })
    : "OOOPSY!";

  return <div className={`${classList}`}>{content}</div>;
}

export default SearchResultPanel;

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
  searchContext.setResultUpdateFunc(setData!);
  useEffect(() => {
    console.log(`SearchResultPanel:`, data);
  });

  const content = data ? (
    data.propertyArray.map((Obj: IDummyDetails, index: number) => {
      return <SearchResult key={index} details={Obj} />;
    })
  ) : (
    <span className="w-full h-full flex flex-col justify-center text-white text-center font-bold text-2xl bg-blue-600 rounded-md">
      Nothing Yet!
    </span>
  );

  return <div className={`${classList}`}>{content}</div>;
}

export default SearchResultPanel;

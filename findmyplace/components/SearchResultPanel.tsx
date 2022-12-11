import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import SearchResult from "./SearchResult";
import { IDetails } from "../interfaces/all";

function SearchResultPanel({ classList }: { classList: string }) {
  const [data, setData] = useState<Array<any>>();

  const searchContext = useContext(SearchContext);
  searchContext.setResultUpdateFunc(setData!);

  const content = data ? (
    data.map((Obj: IDetails, index: number) => {
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

import React, { useContext, useState } from "react";
import { SearchContext } from "../contexts/SearchContext";
import SearchResult from "./SearchResult";
import { IDetails } from "../interfaces/all";

function SearchResultPanel({ classList }: { classList: string }) {
  const [data, setData] = useState<Array<any>>([]);

  const searchContext = useContext(SearchContext);
  searchContext.setResultUpdateFunc(setData!);

  const content =
    data?.length! > 0 ? (
      data!.map((Obj: IDetails, index: number) => {
        return <SearchResult key={index} details={Obj} />;
      })
    ) : (
      <span
        className={`relative z-[1] w-full h-full flex flex-col items-center justify-center text-black text-center font-bold text-2xl `}
      >
        <img src="/shared.gif" alt="nothing yet" className="w-[150px]" />
        Nothing Yet!
      </span>
    );

  return <div className={`${classList}`}>{content}</div>;
}

export default SearchResultPanel;

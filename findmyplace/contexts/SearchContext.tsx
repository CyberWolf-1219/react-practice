import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";

const SearchContext = React.createContext({
  setSearchResultUpdateFunction: (setState: React.Dispatch<any>) => {},
  search: (data: string) => {},
});

function SearchContextProvider({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const searchResultSetter = useRef<React.Dispatch<any>>();

  const [search] = useFetch(
    "api/listings",
    { "Content-Type": "application/json" },
    searchResultSetter.current!
  );

  function setSearchResultUpdateFunction(
    setDataState: React.SetStateAction<any>
  ) {
    console.log(`SearchContext: SETTING DATA STATE UPDATE FUNCTION`);
    searchResultSetter.current = setDataState;
  }

  return (
    <SearchContext.Provider
      value={{
        setSearchResultUpdateFunction: setSearchResultUpdateFunction,
        search: search as (data: string) => {},
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
export { SearchContext };

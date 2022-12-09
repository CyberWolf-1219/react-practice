import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";
import { SearchData } from "../types/types";

const SearchContext = React.createContext({
  search: (data: SearchData) => {},
  setResultUpdateFunc: (setStateFunc: React.SetStateAction<any>) => {},
});

function SearchContextProvider({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const [execute] = useFetch("api/listings/listings", {
    "Content-Type": "application/json",
  });
  const resultUpdateFunc = useRef<React.SetStateAction<any> | null>(null);

  async function search(DATA: any) {
    const searchResult = await execute(DATA);
    resultUpdateFunc.current(searchResult);
  }

  function setResultUpdateFunc(setStateFunc: React.SetStateAction<any>) {
    resultUpdateFunc.current = setStateFunc;
  }

  return (
    <SearchContext.Provider value={{ search, setResultUpdateFunc }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
export { SearchContext };

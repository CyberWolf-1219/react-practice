import React, { useRef } from "react";
import useFetch from "../hooks/useFetch";
import { SearchData } from "../types/types";

const SearchContext = React.createContext({
  search: (data: SearchData) => {},
  setResultUpdateFunc: (setStateFunc: React.SetStateAction<any>) => {},
  getSuggestions: (DATA: { country: string }): any => {},
});

function SearchContextProvider({
  children,
}: {
  children: React.ReactElement | React.ReactElement[];
}) {
  const [Search] = useFetch("api/listings/listings", {
    "Content-Type": "application/json",
  });

  const [GetSuggestions] = useFetch("api/input-suggestions", {
    "Content-Type": "application/json",
  });

  const resultUpdateFunc = useRef<React.SetStateAction<any> | null>(null);

  async function search(DATA: any) {
    const searchResult = await Search(DATA);
    resultUpdateFunc.current(searchResult);
  }

  function setResultUpdateFunc(setStateFunc: React.SetStateAction<any>) {
    resultUpdateFunc.current = setStateFunc;
  }

  async function getSuggestions(DATA: { country: string }) {
    const suggestions = await GetSuggestions(DATA, true);
    return suggestions;
  }

  return (
    <SearchContext.Provider
      value={{ search, setResultUpdateFunc, getSuggestions }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContextProvider;
export { SearchContext };

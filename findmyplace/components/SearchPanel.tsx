import React, { useContext, useRef } from "react";

import { FiMenu } from "react-icons/fi";
import { SearchContext } from "../contexts/SearchContext";

function SearchPanel({ setNavVisibility }: { setNavVisibility: () => void }) {
  const searchContext = useContext(SearchContext);
  const timeOut = useRef<NodeJS.Timeout | undefined>();
  const countryInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);
  const propertyTypeInput = useRef<HTMLSelectElement>(null);
  const priceRangeInput = useRef<HTMLSelectElement>(null);

  function search(event: React.ChangeEvent<HTMLInputElement>) {
    const country = countryInput.current!.value;
    const city = cityInput.current!.value;
    const type = propertyTypeInput.current!.value;
    const price = priceRangeInput.current!.value;

    console.log(`SearchPanel: ${country} ${city} ${type} ${price}`);

    if (timeOut.current) {
      clearTimeout(timeOut.current);
      timeOut.current = setTimeout(() => {
        searchContext.search({ country, city, type, price });
      }, 1000);
    } else {
      timeOut.current = setTimeout(() => {
        searchContext.search({ country, city, type, price });
      }, 1000);
    }
  }

  return (
    <form className="absolute top-4 left-4 right-4 max-w-[80vw] h-fit mx-auto flex flex-col gap-2 bg-none z-[2]">
      <div className="w-full h-fit p-2 flex flex-row items-center gap-3 shadow-md rounded-md bg-white">
        <FiMenu
          color="#cecece"
          size={"1.5rem"}
          className="shrink-0 align-middle transition-transform hover:scale-125"
          onClick={setNavVisibility}
        />

        <input
          ref={countryInput}
          type="text"
          name="country"
          id="country_input"
          placeholder="Country"
          autoComplete=""
          onChange={search}
          className="w-full peer"
        />
        <input
          ref={cityInput}
          type="text"
          name="cityInput"
          id="cityInput_input"
          placeholder="CityInput"
          autoComplete=""
          onChange={search}
          className="w-full peer"
        />
      </div>

      <div className="w-full h-fit p-1 flex flex-col gap-2 overflow-hidden">
        <select
          ref={propertyTypeInput}
          name="type"
          id="type_select"
          className="w-full h-fit p-2 shadow-md"
          defaultValue={""}
        >
          <option value="">Select A Property Type</option>
          <option value="1">Rental</option>
          <option value="2">Sale</option>
        </select>
        <select
          ref={priceRangeInput}
          name="price_range"
          id="price_range_select"
          className="w-full h-fit p-2 shadow-md"
          defaultValue={""}
        >
          <option value="">Select A Price Range</option>
          <option value="1">$1000 - $2000</option>
          <option value="2">$2500 - $3000</option>
          <option value="3">$3500 - $4000</option>
          <option value="4">$4500 - $5000</option>
        </select>
      </div>
    </form>
  );
}

export default SearchPanel;

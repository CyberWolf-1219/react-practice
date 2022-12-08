import React, { useContext, useRef } from "react";

import { FiMenu } from "react-icons/fi";
import { SearchContext } from "../contexts/SearchContext";

function SearchPanel({ setNavVisibility }: { setNavVisibility: () => void }) {
  const searchContext = useContext(SearchContext);
  const timeOut = useRef<NodeJS.Timeout | undefined>();
  const propertyType = useRef<HTMLSelectElement>(null);
  const priceRange = useRef<HTMLSelectElement>(null);

  function search(event: React.ChangeEvent<HTMLInputElement>) {
    const city = event.target.value;
    const type = propertyType.current!.value;
    const price = priceRange.current!.value;

    console.log(`SearchPanel: ${city} ${type} ${price}`);

    if (timeOut.current) {
      clearTimeout(timeOut.current);
      timeOut.current = setTimeout(() => {
        searchContext.search({ city, type, price });
      }, 1000);
    } else {
      timeOut.current = setTimeout(() => {
        searchContext.search({ city, type, price });
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
          type="text"
          name="address"
          id="address_input"
          placeholder="City"
          autoComplete="address-level1"
          onChange={search}
          className="w-full peer"
        />
      </div>

      <div className="w-full h-fit p-1 flex flex-col gap-2 overflow-hidden">
        <select
          name="type"
          id="type_select"
          className="w-full h-fit p-2 shadow-md"
          ref={propertyType}
        >
          <option value="1">Rental</option>
          <option value="2">Sale</option>
        </select>
        <select
          name="price_range"
          id="price_range_select"
          className="w-full h-fit p-2 shadow-md"
          ref={priceRange}
        >
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

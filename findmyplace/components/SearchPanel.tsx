import React, { useContext, useRef, useState } from "react";
import { v4 } from "uuid";

import { FiMenu } from "react-icons/fi";
import { SearchContext } from "../contexts/SearchContext";
import { AppMapContext } from "../contexts/MapContext";
import { countries } from "../data/countries";

function SearchPanel({
  setNavVisibility,
  classList,
}: {
  setNavVisibility: () => void;
  classList: string;
}) {
  //=====================================================================
  const searchContext = useContext(SearchContext);
  const mapContext = useContext(AppMapContext);

  const timeout_1 = useRef<NodeJS.Timeout | undefined>();
  const timeout_2 = useRef<NodeJS.Timeout | undefined>();
  const timeout_3 = useRef<NodeJS.Timeout | undefined>();

  const countryInput = useRef<HTMLInputElement>(null);
  const cityInput = useRef<HTMLInputElement>(null);
  // const propertyTypeInput = useRef<HTMLSelectElement>(null);
  const priceRangeInput = useRef<HTMLSelectElement>(null);
  const [cities, setCities] = useState<Array<any>>([]);
  //=====================================================================

  function search() {
    console.log(`SEARCHING FOR PROPERTIES...`);
    const country = countryInput.current!.value;
    const city = cityInput.current!.value;
    // const type = propertyTypeInput.current!.value;
    const price = parseInt(priceRangeInput.current!.value);

    console.log(`SearchPanel: ${country} ${city} ${price}`);

    if (timeout_1.current) {
      clearTimeout(timeout_1.current);
    }

    timeout_1.current = setTimeout(() => {
      searchContext.search({ country, city, price });
    }, 1000);
  }

  function getSuggestions(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(`PULLING SUGGESTION...`);
    // ONLY TO TRIGGER ON CITY INPUT CHANGE
    if (event.target.name == "country") {
      const countryName = event.target.value;

      // ELIMINATE REDUNDENT FETCHS
      if (timeout_2.current) {
        clearTimeout(timeout_2.current);
      }

      timeout_2.current = setTimeout(async () => {
        const citySuggestions: {
          status: string;
          suggestions: [
            { id: string; cityName: string; lng: number; lat: number }
          ];
        } = await searchContext.getSuggestions({
          country: countryName,
        });
        console.log(`CITIES: `, citySuggestions);
        setCities(citySuggestions.suggestions);
      }, 1000);
    }
  }

  function grabCoordsAndFly(event: React.ChangeEvent<HTMLInputElement>) {
    priceRangeInput.current!.value = "";
    const cityName = event.target.value;
    if (timeout_3.current) {
      clearTimeout(timeout_3.current);
    }
    timeout_3.current = setTimeout(() => {
      cities.forEach((cityObj, index) => {
        if (cityObj.cityName == cityName) {
          console.log(cityObj.lat, cityObj.lng);
          mapContext.flyToLocation([cityObj.lat, cityObj.lng]);
        }
      });
    }, 1000);
  }

  function onChangeHandler(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    mapContext.removeAllMarkers();
    const country = countryInput.current!.value;
    const city = cityInput.current!.value;
    // const type = propertyTypeInput.current!.value;
    const price = priceRangeInput.current!.value;
    if (country !== "" && city !== "" && price !== "") {
      search();
    } else {
      getSuggestions(event as React.ChangeEvent<HTMLInputElement>);
    }
  }

  return (
    <form
      className={`absolute top-4 left-4 right-4 max-w-[80vw] h-fit mx-auto flex flex-col gap-2 bg-none z-[2] ${classList}`}
    >
      <datalist id="countries">
        {countries.map((countryName, index) => {
          return (
            <option key={`${index}_${v4()}`} value={countryName}>
              {countryName}
            </option>
          );
        })}
      </datalist>
      <datalist id="cities">
        {cities.map((cityObj, index) => {
          return (
            <option
              id={index.toString()}
              key={`${cityObj.id}}`}
              value={cityObj.cityName}
            >
              {cityObj.cityName}
            </option>
          );
        })}
      </datalist>

      <div className="w-full h-fit p-2 flex flex-row items-center gap-3 shadow-md rounded-md bg-white">
        <FiMenu
          color="#cecece"
          size={"1.5rem"}
          className="shrink-0 align-middle transition-transform hover:scale-125 md:hidden"
          onClick={setNavVisibility}
        />

        <input
          ref={countryInput}
          type="text"
          name="country"
          id="country_input"
          placeholder="Country"
          list="countries"
          className="w-full peer"
          onChange={onChangeHandler}
        />
        <input
          ref={cityInput}
          type="text"
          name="city"
          id="city_input"
          placeholder="City"
          className="w-full peer"
          list="cities"
          onChange={grabCoordsAndFly}
        />
      </div>

      <div className="w-full h-fit p-1 flex flex-col gap-2 overflow-hidden">
        {/* <select
          ref={propertyTypeInput}
          name="type"
          id="type_select"
          className="w-full h-fit p-2 shadow-md"
          defaultValue={""}
          onChange={onChangeHandler}
        >
          <option value="">Select A Property Type</option>
          <option value="1">Rental</option>
          <option value="2">Sale</option>
        </select> */}
        <select
          ref={priceRangeInput}
          name="price_range"
          id="price_range_select"
          className="w-full h-fit p-2 shadow-md"
          defaultValue={""}
          onChange={onChangeHandler}
        >
          <option value="">Select A Price Range</option>
          <option value="1000">$1000</option>
          <option value="2000">$2000</option>
          <option value="3000">$3000</option>
          <option value="4000">$4000</option>
          <option value="5000">$5000</option>
        </select>
      </div>
    </form>
  );
}

export default SearchPanel;

import React from "react";
import { FiMenu } from "react-icons/fi";

function SearchPanel() {
  return (
    <div className="absolute top-4 left-4 right-4 max-w-[80vw] h-fit mx-auto flex flex-col gap-2 bg-none z-[2]">
      <div className="w-full h-fit p-2 flex flex-row items-center gap-3 shadow-md rounded-md bg-white">
        <FiMenu
          color="#cecece"
          size={"1.5rem"}
          className="shrink-0 align-middle"
        />
        <input
          type="text"
          name="address"
          id="address_input"
          placeholder="State, City"
          className="w-full peer"
        />
      </div>

      <div className="w-full h-fit p-1 flex flex-col gap-2 overflow-hidden">
        <select
          name="type"
          id="type_select"
          className="w-full h-fit p-2 shadow-md"
        >
          <option value="rent">Rental</option>
          <option value="sale">Sale</option>
        </select>
        <select
          name="price_range"
          id="price_range_select"
          className="w-full h-fit p-2 shadow-md"
        >
          <option value="1000-2000">$1000 - $2000</option>
          <option value="1000-2000">$2500 - $3000</option>
          <option value="1000-2000">$3500 - $4000</option>
          <option value="1000-2000">$4500 - $5000</option>
        </select>
      </div>
    </div>
  );
}

export default SearchPanel;

import React, { useState } from "react";

function SearchPanel() {
  const [filterPanelState, setFilterPanelState] = useState<Boolean>(false);

  function filterPanelBtnHandler(event: React.MouseEvent) {
    event.preventDefault();
    setFilterPanelState((prevState) => !prevState);
  }

  return (
    <div className="relative w-full min-h-[30vh] h-[30vh] text-white">
      <div className="h-fit relative z-20 text-base flex flex-col bg-white">
        <input
          type="text"
          name="country_name"
          id="country_name"
          placeholder="Country..."
          className="w-full text-base p-2 focus:scale-105"
        />
        <input
          type="text"
          name="state_name"
          id="state_name"
          placeholder="State..."
          className="w-full text-base p-2 focus:scale-105"
        />
        <input
          type="text"
          name="city_name"
          id="city_name"
          placeholder="City..."
          className="w-full text-base p-2 focus:scale-105"
        />
        <button className="w-full p-4 flex items-center justify-center bg-emerald-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-search w-[25px] h-[25px]"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>

      <div
        className={`${filterPanelState ? "translate-y-[90%] " : ""} 
        absolute -top-[5%] w-full h-fit transition-transform z-10`}
      >
        <div className="bg-white p-2">
          <div className="w-full flex flex-col">
            <label htmlFor="bed_rooms" className="font-bold text-base">
              BedRooms:
            </label>
            <input
              type="number"
              name="bed_rooms"
              id="bed_rooms"
              className="font-bold text-base text-white focus:scale-105"
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="bed_rooms" className="font-bold text-base">
              BedRooms:
            </label>
            <input
              type="number"
              name="bed_rooms"
              id="bed_rooms"
              className="font-bold text-base text-white focus:scale-105"
            />
          </div>
          <div>
            <div className="w-full flex flex-row items-center justify-start gap-2">
              <label
                htmlFor="min_price"
                className="w-[50%] font-bold text-base"
              >
                MinPrice:
              </label>
              <label
                htmlFor="max_price"
                className="w-[50%] font-bold text-base"
              >
                MaxPrice:
              </label>
            </div>
            <div className="w-full flex flex-row items-center justify-start gap-2">
              <input
                type="number"
                name="min_price"
                id="min_price"
                className="w-[50%] font-bold text-base text-white focus:scale-105"
              />
              <input
                type="number"
                name="max_price"
                id="max_price"
                className="w-[50%] font-bold text-base text-white focus:scale-105"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <span
            onClick={filterPanelBtnHandler}
            className="hover:cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="bi bi-caret-down-fill fill-emerald-500 w-[50px] h-[50px]"
              viewBox="0 0 16 16"
            >
              <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;

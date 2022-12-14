import React, { useRef, useState } from "react";
import { PropertyData } from "../types/types";
import { SlLocationPin } from "react-icons/sl";
import useFetch from "../hooks/useFetch";
import { useRouter } from "next/router";

function ListingCard({ listingDetails }: { listingDetails: PropertyData }) {
  const router = useRouter();

  const priceInput = useRef<HTMLInputElement>(null);
  const [available, setAvailable] = useState(listingDetails.available);

  const [deleteListing] = useFetch("/api/listings/delete-listing", {
    "Content-Type": "application/json",
  });
  const [updateListing] = useFetch("/api/listings/update-listing", {
    "Content-type": "application/json",
  });

  async function onDelete() {
    const confirmed = confirm("Are You Sure About This?");
    console.log(confirmed);
    if (confirmed) {
      const delData = { listingID: listingDetails.id };
      const deleteResult = await deleteListing(delData);
      console.log(deleteResult);
      router.reload();
    }
  }

  async function onSave() {
    const updateData = {
      listingID: listingDetails.id,
      pricePerMonth: priceInput.current!.value,
      available: available,
    };
    console.log(`LISTING UPDATE DATE: `, updateData);
    const updateResult = await updateListing(updateData);
    console.log(`LISTING UPDATE RESULT: `, updateResult);
    router.reload();
  }

  return (
    <div className="min-w-[500px]  h-full p-2 flex flex-row gap-2 items-center justify-center rounded-md shadow-md shadow-slate-300/30 bg-white">
      <span className="w-[30%] h-full border-2 rounded-md">
        <img
          src={listingDetails.propertyImage}
          alt="property image"
          className="w-full h-full object-cover"
        />
      </span>
      <span className="relative w-[70%] h-full max-h-full p-2 border-2 rounded-md">
        <div className="w-full h-fit pb-1 flex items-center justify-between border-b-2">
          <span className="flex  items-center gap-1">
            <SlLocationPin /> {listingDetails.country}, {listingDetails.city}
          </span>
          <span className="flex items-center ">
            $
            <input
              ref={priceInput}
              type="number"
              name="price"
              id="price_input"
              defaultValue={listingDetails.pricePerMonth}
              className="w-20 p-0"
            />
          </span>
        </div>
        <div className="w-full flex flex-col flex-wrap gap-2">
          <span>Bedrooms: {listingDetails.bedrooms}</span>
          <span>Bathrooms: {listingDetails.bathrooms}</span>
          <span>
            Available:{" "}
            <input
              type="checkbox"
              name="available"
              id="available_input"
              defaultChecked={listingDetails.available}
              onChange={() => {
                setAvailable((prevState) => !prevState);
              }}
              className="w-[16px] h-[16px]"
            />
          </span>
        </div>
        <div className="absolute bottom-2 w-[95%] h-fit px-2 flex items-center justify-between border-2 rounded-md">
          <button
            onClick={onDelete}
            className="font-semibold text-red-600 transition-transform hover:scale-110 hover:cursor-pointer"
          >
            Delete
          </button>
          <button
            onClick={onSave}
            className="font-semibold text-green-600 transition-transform hover:scale-110 hover:cursor-pointer"
          >
            Save
          </button>
        </div>
      </span>
    </div>
  );
}

export default ListingCard;

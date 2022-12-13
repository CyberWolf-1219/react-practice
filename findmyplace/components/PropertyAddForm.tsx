import React, { useState, useContext, useRef } from "react";
import useFetch from "../hooks/useFetch";
import { v4 } from "uuid";
import { PropertyData } from "../types/types";
import { countries } from "../data/countries";
import { SearchContext } from "../contexts/SearchContext";
import Map from "./Map";
import { AppMapContext } from "../contexts/MapContext";

function PropertyAddForm({
  userID,
  userSubType,
}: {
  userID: string;
  userSubType: number;
}) {
  const timeout_1 = useRef<NodeJS.Timeout | undefined>();
  const timeout_2 = useRef<NodeJS.Timeout | undefined>();

  const searchContext = useContext(SearchContext);
  const mapContext = useContext(AppMapContext);

  const [cities, setCities] = useState<Array<any>>([]);
  const [cityCoords, setCityCoords] = useState<Array<number> | null>(null);
  const [image, setImage] = useState<any>();
  const [uploading, setUploading] = useState(false);

  const [sendData] = useFetch("/api/listings/add-property", {
    "Content-Type": "application/json",
  });
  const [uploadImage] = useFetch("/api/listings/upload-file", {});

  async function onFileSelect(event: React.ChangeEvent<any>) {
    event.preventDefault();
    setUploading(true);
    const selectedImage = event.target.files[0];
    const fileName = v4() + "." + selectedImage.name.split(".")[1];

    // METHOD 1
    // const formData = new FormData();
    // formData.append("image", selectedImage, fileName);
    // const result = await uploadImage(formData, false);
    // console.log(result);

    // METHOD 2
    const fileReader = new FileReader();
    fileReader.readAsDataURL(selectedImage);
    fileReader.addEventListener("loadend", async (LoadEvent) => {
      const dataUrl = LoadEvent.target?.result;
      const uploadData = { fileName: fileName, file: dataUrl };
      const result = await uploadImage(JSON.stringify(uploadData), false);
      console.log(result);
      setImage(result.filePath);
      setUploading(false);
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const propertyLocation = mapContext.getPickerCoords();
    const propertyData: PropertyData = {
      providerID: userID,
      providerContact: event.currentTarget.elements.contact_number.value,
      country: event.currentTarget.elements.country.value,
      city: event.currentTarget.elements.city.value,
      location: propertyLocation,
      bedrooms: parseInt(event.currentTarget.elements.bedroom_count.value),
      bathrooms: parseInt(event.currentTarget.elements.bathroom_count.value),
      // propertyType: event.currentTarget.elements.property_type.value,
      pricePerMonth: parseInt(event.currentTarget.elements.price.value),
      propertyImage: image,
      available: event.currentTarget.elements.available.value,
    };
    const dataSendResult = await sendData(propertyData, true);
    console.log(dataSendResult);

    setImage("");
    setCityCoords(null);
    event.target.reset();
  }

  function getSuggestions(event: React.ChangeEvent<HTMLInputElement>) {
    // ONLY TO TRIGGER ON CITY INPUT CHANGE
    if (event.target.name == "country") {
      const countryName = event.target.value;

      // ELIMINATE REDUNDENT FETCHS
      if (timeout_1.current) {
        clearTimeout(timeout_1.current);
      }

      timeout_1.current = setTimeout(async () => {
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

  function grabCityCoords(event: React.ChangeEvent<HTMLInputElement>) {
    const cityName = event.target.value;

    if (timeout_2.current) {
      clearTimeout(timeout_2.current);
    }
    timeout_2.current = setTimeout(() => {
      cities.map((cityObj) => {
        if (cityObj.cityName == cityName) {
          console.log(`MATCH FOUND: `, cityObj);
          setCityCoords([cityObj.lat, cityObj.lng]);
        }
      });
    }, 1000);
  }

  return (
    <div className="w-full h-auto p-4 flex flex-col items-center justify-center">
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
      <form
        action=""
        onSubmit={onSubmit}
        className="w-fit max-w-[400px] h-fit  flex flex-col gap-4"
      >
        {/* PROVIDER DATA */}
        <div className="w-full h-fit p-4 flex flex-col items-start justify-start bg-white/70 backdrop-blur-md border-2 border-slate-400 shadow-md shadow-gray-600 rounded-md">
          <label htmlFor="user_id_input">User Id:</label>
          <input
            type="text"
            name="user_id"
            id="user_id_input"
            disabled
            value={userID}
            className="w-full text-slate-500"
          />
          <label htmlFor="user_type_input">User Type:</label>
          <input
            type="text"
            name="user_type"
            id="user_type_input"
            disabled
            value={userSubType}
            className="w-full text-slate-500"
          />
          <label htmlFor="provider_contact_number_input">Contact Number:</label>
          <input
            type="text"
            name="contact_number"
            id="provider_contact_number_input"
            className="w-full"
            placeholder="Enter Contact Number..."
            required
          />
        </div>
        {/* PROPERTY DETAILS */}
        <div className="w-full h-fit p-4 flex flex-col gap-2 items-start justify-start bg-white/70 backdrop-blur-md border-2 border-slate-400 shadow-md shadow-gray-600 rounded-md">
          {/* PROPERTY DETAILS */}
          <div className="w-full h-fit flex flex-col gap-2 items-start justify-center">
            {/* COUNTRY */}
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="country_input">Country :</label>
              <input
                type="text"
                name="country"
                id="country_input"
                list="countries"
                onChange={getSuggestions}
                required
              />
            </span>
            {/* CITY */}
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="city_input">City :</label>
              <input
                type="text"
                name="city"
                id="city_input"
                list="cities"
                onChange={grabCityCoords}
                required
              />
            </span>
            {/* MAP LOCATION */}
            <span className="w-full h-[350px] flex flex-col ">
              <label htmlFor="">Location(Drag Pin to Location): </label>
              <span className="relative w-full h-[300px] flex flex-col border-2 rounded-md overflow-hidden">
                {cityCoords ? (
                  <Map
                    settings={[...cityCoords, 8]}
                    classList="z-[5] w-full h-full"
                    addPicker={true}
                  />
                ) : (
                  <h3 className="z-[1] relative w-full  top-[50%] -translate-y-[50%] text-center text-slate-500">
                    PICK A CITY
                  </h3>
                )}
              </span>
              <p>You Can Zoom the Map!</p>
            </span>
            {/* PROPERTY TYPE */}
            {/* <span className="w-full h-fit flex flex-col">
              <label htmlFor="property_type_select">Property Type:</label>
              <select
                name="property_type"
                id="property_type_select"
                defaultValue={""}
              >
                <option value="">Select Property Type</option>
                <option value="1">Rental</option>
                <option value="2">Sale</option>
              </select>
            </span> */}
            {/* BEDROOMS */}
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="bedroom_count_input">Bedroom Count:</label>
              <input
                type="number"
                name="bedroom_count"
                id="bedroom_count_input"
                required
              />
            </span>
            {/* BATHROOMS */}
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="bathroom_count_input">Bathroom Count:</label>
              <input
                type="number"
                name="bathroom_count"
                id="bathroom_count_input"
                required
              />
            </span>
            {/* PRICE */}
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="price_input">Price Per Month:</label>
              <span className="w-full flex flex-row gap-2 items-center">
                $
                <input
                  type="number"
                  name="price"
                  id="price_input"
                  className="w-full"
                  required
                />
              </span>
            </span>
          </div>
          {/* IMAGE UPLOAD */}
          <div className="w-full h-fit flex flex-col gap-2 items-start justify-start">
            <label htmlFor="image_input">Image of the Property:</label>
            <div className="w-full min-w-[350px] max-w-[350px] h-[350px] max-h-[350px] flex flex-col items-center justify-center border-2 border-slate-300 rounded-md overflow-hidden">
              {uploading ? (
                <>
                  <img
                    src="/upload.gif"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                  <a
                    href="https://www.flaticon.com/free-animated-icons/upload"
                    title="upload animated icons"
                    className="font-thin text-sm"
                  >
                    Upload animated icons created by Freepik - Flaticon
                  </a>
                </>
              ) : (
                <img
                  src={image}
                  alt="uploaded property image"
                  className="w-full h-full object-contain"
                />
              )}
            </div>
            <input
              type="file"
              name="image"
              id="image_input"
              onChange={onFileSelect}
              className="w-full h-fit"
              accept="image/*"
              required={true}
            />
          </div>
          <div className="w-full h-fit flex flex-col gap-2 items-start justify-start">
            <label htmlFor="availability_input">Availability: </label>
            <select name="available" id="availability_input" className="w-full">
              <option value="1">Yes</option>
              <option value="0">No</option>
            </select>
            <input
              type="submit"
              value="PUBLISH"
              className="w-full bg-blue-500 font-bold text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default PropertyAddForm;

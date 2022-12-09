import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import { v4 } from "uuid";
import { read } from "fs";
import { PropertyData } from "../types/types";

function PropertyAddForm() {
  const authContext = useContext(AuthContext);

  const [sendData] = useFetch("/api/listings/add-property", {
    "Content-Type": "application/json",
  });
  const [uploadImage] = useFetch("/api/listings/upload-file", {});

  const [image, setImage] = useState<any>();

  async function onFileSelect(event: React.ChangeEvent<any>) {
    event.preventDefault();
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
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const propertyData: PropertyData = {
      providerId: authContext.data?.user!.id,
      country: event.currentTarget.elements.country.value,
      city: event.currentTarget.elements.city.value,
      bedrooms: parseInt(event.currentTarget.elements.bedroom_count.value),
      bathrooms: parseInt(event.currentTarget.elements.bathroom_count.value),
      propertyType: event.currentTarget.elements.property_type.value,
      pricePerMonth: parseInt(event.currentTarget.elements.price.value),
      propertyImage: image,
    };
    const dataSendResult = await sendData(propertyData, true);
    console.log(dataSendResult);
  }

  return (
    <div className="w-full h-auto p-4 flex flex-col items-center justify-center">
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
            value={authContext.data!.user!.id}
            className="w-full text-slate-500"
          />
          <label htmlFor="user_type_input">User Type:</label>
          <input
            type="text"
            name="user_type"
            id="user_type_input"
            disabled
            value={authContext.data!.user!.subType}
            className="w-full text-slate-500"
          />
        </div>
        {/* PROPERTY DETAILS */}
        <div className="w-full h-fit p-4 flex flex-col gap-2 items-start justify-start bg-white/70 backdrop-blur-md border-2 border-slate-400 shadow-md shadow-gray-600 rounded-md">
          {/* PROPERTY DETAILS */}
          <div className="w-full h-fit flex flex-col gap-2 items-start justify-center">
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="country_input">Country :</label>
              <input type="text" name="country" id="country_input" />
            </span>
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="city_input">City :</label>
              <input type="text" name="city" id="city_input" />
            </span>
            <span className="w-full h-fit flex flex-col">
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
            </span>
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="bedroom_count_input">Bedroom Count:</label>
              <input
                type="number"
                name="bedroom_count"
                id="bedroom_count_input"
              />
            </span>
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="bathroom_count_input">Bathroom Count:</label>
              <input
                type="number"
                name="bathroom_count"
                id="bathroom_count_input"
              />
            </span>
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="price_input">Price Per Month:</label>
              <span className="w-full flex flex-row gap-2 items-center">
                $
                <input
                  type="number"
                  name="price"
                  id="price_input"
                  className="w-full"
                />
              </span>
            </span>
          </div>
          {/* IMAGE UPLOAD */}
          <div className="w-full h-fit flex flex-col gap-2 items-start justify-start">
            <label htmlFor="image_input">Image of the Property:</label>
            <img
              src={image}
              alt="uploaded property image"
              className="w-full min-w-[350px] max-w-[350px] h-fit min-h-[350px] max-h-[350px] object-contain flex items-center justify-center border-2 border-slate-300 rounded-md"
            />
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
          <input
            type="submit"
            value="PUBLISH"
            className="w-full bg-blue-500 font-bold text-white"
          />
        </div>
      </form>
    </div>
  );
}

export default PropertyAddForm;

import { useRouter } from "next/router";
import React, { useRef, useState } from "react";

function PropertyAddForm() {
  const router = useRouter();

  const [image, setImage] = useState<string>();
  const imageReader = useRef<FileReader>();
  if (global.Window) {
    imageReader.current = new FileReader();
  }

  function onFileSelect(event: React.ChangeEvent<any>) {
    event.preventDefault();
    imageReader.current!.readAsDataURL(event.target.files![0]);
    imageReader.current!.addEventListener("loadend", (loadedEvent) => {
      setImage(loadedEvent.target?.result as string);
    });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <div className="w-full h-auto p-4 flex flex-col items-center justify-center">
      <form
        action=""
        onSubmit={onSubmit}
        className="w-fit max-w-[400px] h-fit  flex flex-col gap-4"
      >
        <div className="w-full h-fit p-4 flex flex-col items-start justify-start bg-white/70 backdrop-blur-md border-2 border-slate-400 shadow-md shadow-gray-600 rounded-md">
          <label htmlFor="user_id_input">User Id:</label>
          <input
            type="text"
            name="user_id"
            id="user_id_input"
            disabled
            value={router.query.userID}
            className="w-full text-slate-500"
          />
          <label htmlFor="user_type_input">User Type:</label>
          <input
            type="text"
            name="user_type"
            id="user_type_input"
            disabled
            value="Organization"
            className="w-full text-slate-500"
          />
        </div>
        <div className="w-full h-fit p-4 flex flex-col gap-2 items-start justify-start bg-white/70 backdrop-blur-md border-2 border-slate-400 shadow-md shadow-gray-600 rounded-md">
          <div className="w-full h-fit flex flex-col gap-2 items-start justify-center">
            <span className="w-full h-fit flex flex-col">
              <label htmlFor="property_type_select">Property Type:</label>
              <select name="property_type" id="property_type_select">
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
                $<input type="number" name="" id="" className="w-full" />
              </span>
            </span>
          </div>
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

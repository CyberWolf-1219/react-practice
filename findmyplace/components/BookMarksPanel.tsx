import React from "react";
import NavigationBtn from "./NavigationBtn";

function BookMarksPanel() {
  return (
    <div className="p-8 flex flex-col gap-8 items-center justify-start">
      <h2 className="w-full h-fit text-center font-bold text-2xl">
        Your Bookmarks!
      </h2>
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden bg-white rounded-lg border-2 border-slate-300"></div>
    </div>
  );
}

export default BookMarksPanel;

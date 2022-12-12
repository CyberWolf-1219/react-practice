import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import useFetch from "../hooks/useFetch";
import BookmarkCard from "./BookmarkCard";
import NavigationBtn from "./NavigationBtn";

function BookmarksPanel({ userID }: { userID: string }) {
  const [getBookmarks] = useFetch("/api/listings/bookmarks", {
    "Content-Type": "application/json",
  });

  const authContext = useContext(AuthContext);

  const [bookmarks, setBookmarks] = useState<Array<any>>([]);

  async function presentBookmarks() {
    const result = await getBookmarks({
      action: "get",
      userID: userID,
    });
    setBookmarks(result.bookmarks);
  }

  useEffect(() => {
    presentBookmarks();
  }, []);

  return (
    <div className="p-8 flex flex-col gap-8 items-center justify-start">
      {/* HEADER */}
      <h2 className="w-full h-fit text-center font-bold text-2xl">
        Your Bookmarks!
      </h2>
      {/* PANEL */}
      <div className="w-full h-screen p-2 overflow-y-auto overflow-x-hidden bg-white rounded-lg border-2 border-slate-300 ">
        {bookmarks.map((bookmarkObj, index) => {
          console.log(`BookmarkPanel: `, bookmarkObj);
          return <BookmarkCard propertyDetails={bookmarkObj} />;
        })}
      </div>
    </div>
  );
}

export default BookmarksPanel;

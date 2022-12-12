import { NextApiRequest, NextApiResponse } from "next";
import {
  addBookmark,
  checkBookmarked,
  getBookmarkedListingIds,
  getBookmarkedListings,
  removeBookmark,
} from "../../../lib/firebase";

async function BookmarkReqHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`Bookmark Handler: `, req.body);
  const data = req.body;

  if (data.action == "get") {
    const listingIDList: Array<string> = await getBookmarkedListingIds(
      data.userID
    );
    const listings = await getBookmarkedListings(listingIDList);
    console.log(`Bookmark Handler: `, listings);
    res.status(200).json({ bookmarks: listings });
  } else if (data.action == "add") {
    console.log(`ADD TO BOOKMARKS: `, data);
    const result = await addBookmark(data.userID, data.propertyID);
    res.status(200).json({ msg: "OK" });
  } else if (data.action == "check") {
    const bookmarked = await checkBookmarked(data.userID, data.propertyID);
    console.log(`BOOKMARK HANLDER CHECK:`, bookmarked);
    res.status(200).json({ bookmarked: bookmarked });
  } else if (data.action == "remove") {
    const result = await removeBookmark(data.userID, data.propertyID);
    res.status(200).json({ msg: "OK" });
  } else {
    res.status(200).json({ msg: "OK" });
  }
}

export default BookmarkReqHandler;

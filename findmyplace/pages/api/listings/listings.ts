import { NextApiRequest, NextApiResponse } from "next";
import { getListings } from "../../../lib/firebase";
import { PropertyData, SearchData } from "../../../types/types";

async function ListingReqHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`LISTING HANDLER: `, req.body);
  const searchData = req.body as SearchData;

  const matchedListings = await getListings(searchData);

  res.status(200).json({ status: "OK", propertyArray: matchedListings });
}

export default ListingReqHandler;

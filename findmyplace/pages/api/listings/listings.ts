import { NextApiRequest, NextApiResponse } from "next";
import { getListings } from "../../../lib/firebase";
import { PropertyData } from "../../../types/types";

function ListingReqHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  const propertyArray: Array<PropertyData> = [];

  // getListings();

  res.status(200).json({ status: "OK", propertyArray });
}

export default ListingReqHandler;

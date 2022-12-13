import { NextApiRequest, NextApiResponse } from "next";
import { updateListing } from "../../../lib/firebase";

async function ListingUpdateHandler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  console.log(data);
  const result = await updateListing(data);
  res.status(200).json({ msg: "OK" });
}

export default ListingUpdateHandler;

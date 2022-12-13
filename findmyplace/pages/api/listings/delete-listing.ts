import { NextApiRequest, NextApiResponse } from "next";
import { deleteProperty } from "../../../lib/firebase";

async function ListingDeleteHandler(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  console.log(`LISTING DELETE HANDLER: `, data);
  const result = await deleteProperty(data.listingID);
  res.status(200).json({ msg: "OK" });
}

export default ListingDeleteHandler;

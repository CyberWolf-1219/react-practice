import { NextApiRequest, NextApiResponse } from "next";
import { addProperty } from "../../../lib/firebase";

function AddPropertyHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log(`PropertyData: `, req.body);
  const propertyAddResult = addProperty(req.body);
  res.status(200).json({ status: "OK", result: propertyAddResult });
}

export default AddPropertyHandler;

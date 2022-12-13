import { NextApiRequest, NextApiResponse } from "next";
import { getProvidersListings } from "../../../lib/firebase";

async function ProviderListingsHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  console.log(`ProviderListingsHandler: `, data);
  const listings = await getProvidersListings(data.userID);
  res.status(200).json({ listings: listings });
}

export default ProviderListingsHandler;

import { NextApiRequest, NextApiResponse } from "next";

function ListingReqHandler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  const propertyArray = [];

  for (let i = 0; i < 10; i++) {
    propertyArray.push({
      property: {
        rating: Math.floor(Math.random() * 10),
        beds: Math.floor(Math.random() * 10),
        baths: Math.floor(Math.random() * 10),
        sqrFt: Math.floor(Math.random() * 100),
      },
      location: [Math.random() * 100, Math.random() * 100],
    });
  }

  res.status(200).json({ status: "OK", propertyArray });
}

export default ListingReqHandler;

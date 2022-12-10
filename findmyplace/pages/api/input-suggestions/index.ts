import { NextApiRequest, NextApiResponse } from "next";
import { getCities } from "../../../lib/firebase";

async function InputSuggestionResolver(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(`REQ: `, req.body);

  const suggestions = await getCities(req.body.country);

  res.status(200).json({ status: "OK", suggestions });
}

export default InputSuggestionResolver;

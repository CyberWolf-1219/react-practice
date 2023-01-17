import { NextApiRequest, NextApiResponse } from "next";
import { getCities, getCountries } from "../../../lib/firebase";

async function InputSuggestionResolver(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log(`REQ: `, req.body);

  const data: { type: "country" | "city"; countryName?: string } = req.body;

  if (data.type == "country") {
    const suggestions = await getCountries();
    res.status(200).json({ countries: suggestions });
  } else if (data.type == "city") {
    const suggestions = await getCities(req.body.countryName);
    res.status(200).json({ status: "OK", cities: suggestions });
  } else {
    res.status(201).json({ msg: "BAD REQUEST!" });
  }
}

export default InputSuggestionResolver;

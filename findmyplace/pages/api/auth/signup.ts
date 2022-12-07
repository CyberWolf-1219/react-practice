import { NextApiRequest, NextApiResponse } from "next";
import { addUser, checkUserExistence } from "../../../lib/firebase";

async function signUpHandler(req: NextApiRequest, res: NextApiResponse) {
  const userSignUpData = req.body;

  const userExist = await checkUserExistence(userSignUpData.email);

  if (userExist) {
    res.json({ status: 1, msg: "This email is registered!" });
  } else {
    const signUpResult = await addUser(userSignUpData);
    console.log(signUpResult);
    res.json({ status: 0, msg: "Registration Successful" });
  }
}

export default signUpHandler;

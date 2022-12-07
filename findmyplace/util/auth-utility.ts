import { IUserValidityResult } from "../interfaces/all";
import { getUser } from "../lib/firebase";

export async function checkUserValidity(
  userEmail: string,
  userPassword: string
): Promise<IUserValidityResult> {
  const userObj = await getUser(userEmail);
  if (!userObj) {
    return { valid: false, id: "", email: "" };
  }

  if (userObj.data.password !== userPassword) {
    return { valid: false, id: "", email: "" };
  }

  return { valid: true, id: userObj.id, email: userObj.data.email };
}

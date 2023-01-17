import { IUserValidityResult } from "../interfaces/all";
import { getUser } from "../lib/firebase";

export async function checkUserValidity(
  userEmail: string,
  userPassword: string
): Promise<IUserValidityResult> {
  const userObj = await getUser(userEmail);
  if (!userObj) {
    return { valid: false, id: "", email: "", userType: "", userSubType: "" };
  }

  if (userObj.data.password !== userPassword) {
    return { valid: false, id: "", email: "", userType: "", userSubType: "" };
  }

  return {
    valid: true,
    id: userObj.id,
    email: userObj.data.email,
    userType: userObj.data.userType,
    userSubType: userObj.data.userSubType,
  };
}

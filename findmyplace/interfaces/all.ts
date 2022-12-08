import { Session } from "next-auth";

export interface IDummyDetails {
  property: {
    rating: number;
    beds: number;
    baths: number;
    sqrFt: number;
  };
  location: [number, number];
}

export interface IAuthContext {
  data: Session | null;
  status: string;
  signup: Function;
  signin: Function;
  signout: Function;
}

export interface IPopupModal {
  title: string;
  msg: string;
}

export interface IUserValidityResult {
  valid: Boolean;
  id: string;
  email: string;
  userType: string;
  userSubType: string;
}

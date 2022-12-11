import { Session } from "next-auth";

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

export interface IDetails {
  id: string;
  providerId: string;
  country: string;
  city: string;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  rating: number;
  pricePerMonth: number;
  propertyImage: string;
  location: [number, number];
}

import { Session } from "next-auth";

export type userObj = {
  email: string;
  password: string;
  userType: string | null;
  userSubType: string | null;
};

export type authObj = {
  email: string;
  password: string;
};

export type SearchData = {
  country: string;
  city: string;
  // type: string;
  price: number;
};

export type PropertyData = {
  id?: string;
  providerID: string;
  providerContact: number;
  country: string;
  city: string;
  location: Array<number>;
  // propertyType: string;
  bedrooms: number;
  bathrooms: number;
  pricePerMonth: number;
  propertyImage: string;
  available: string;
};

export type AuthData = { email: string; password: string };

export type SignUpData = {
  email: string;
  password: string;
  userType: string;
  userSubType: string;
};

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
  type: string;
  price: string;
};

export type PropertyData = {
  providerId: string;
  country: string;
  city: string;
  location: Array<number>;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  pricePerMonth: number;
  propertyImage?: string | null;
};

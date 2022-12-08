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
  city: string;
  type: string;
  price: string;
};

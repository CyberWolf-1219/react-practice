import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkUserValidity } from "../../../util/auth-utility";

export const authOptions = {
  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },
  providers: [
    CredentialsProvider({
      name: "",
      credentials: {},
      async authorize(credentials, req) {
        console.log(credentials);

        const userValidityResult = await checkUserValidity(
          credentials!.email,
          credentials!.password
        );

        console.log(userValidityResult);

        if (!userValidityResult.valid) {
          return null;
        } else {
          return { id: userValidityResult.id, email: userValidityResult.email };
        }
      },
    }),
  ],
};

export default NextAuth(authOptions);

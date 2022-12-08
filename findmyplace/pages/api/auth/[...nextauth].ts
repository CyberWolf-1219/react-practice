import NextAuth, { Session, TokenSet, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { checkUserValidity } from "../../../util/auth-utility";

export const authOptions = {
  jwt: {
    maxAge: 60 * 60 * 24 * 7,
  },
  session: {},
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

        if (!userValidityResult.valid) {
          return null;
        } else {
          return {
            id: userValidityResult.id,
            email: userValidityResult.email,
            userType: userValidityResult.userType,
            userSubType: userValidityResult.userSubType,
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: JWT; user: User }) {
      console.log(token, user);
      return { ...token, ...user };
    },
    async session({ session, token }: { session: Session; token: JWT }) {
      session.user!.id = token.id;
      session.user!.type = token.userType;
      session.user!.subType = token.userSubType;
      return session;
    },
  },
};

export default NextAuth(authOptions);

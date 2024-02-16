import CredentialsProvider from "next-auth/providers/credentials";
import jwt from "jsonwebtoken";
import { baseUrl } from "./api";
export const authOptions = {
  session: {
    strategy: "jwt",
  },

  pages: {
    signOut: "/",
    signIn: "/aut/signin",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const authLogin = await fetch(`${baseUrl}/signIn`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ credentials }),
        });
        if(authLogin.status === 404){
          throw new Error("E-mail não cadastrado no sistema")
        }
        if(authLogin.status === 401){
          throw new Error("E-mail ou senha invalidos!")
        }
        if (authLogin.status === 200) {
          const data = await authLogin.json();
          return {
            ...data
          }
        }
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.user = user;
      }
      return token;
    },
    session: async ({ session, token }) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
};

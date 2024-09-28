import { compare } from "bcrypt";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient as PostgresClient } from "../../generated/client";

const PrismaPostgres = new PostgresClient();

export const AuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ? process.env.GOOGLE_CLIENT_ID : "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ? process.env.GOOGLE_CLIENT_SECRET :"",
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = await PrismaPostgres.users.findUnique({
          where: {
            username: credentials!.username
          }
        });
        if (user) {
          const comparedPasswords = await compare(credentials!.password, user.password);
          if (comparedPasswords) {
            return {
              id: user.pk.toString(),
              name: user.username,
              username: user.username,
            };
          }
        } return null;
        // const value = await PrismaPostgres.users.findUnique({
        //   where: { 
        //     password: hashedPassword,
        //     username: credentials!.username        
        //   }
        // });
        // if (value) {
        //   return {
        //     id: value.pk.toString(),
        //     name: value.username,
        //     email: value.email,
        //   };
        // } return null
      }
    })
  ],
}
export default AuthOptions;

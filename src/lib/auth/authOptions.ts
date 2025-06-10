import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { PrismaClient as PostgresClient } from '../../generated/client';

const PrismaPostgres = new PostgresClient();

export const AuthOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 1800, // 30 minutes in seconds
    updateAge: 1800 // force session update every 30min
  },
  pages: {
    signIn: '/login'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID
        ? process.env.GOOGLE_CLIENT_ID
        : '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
        ? process.env.GOOGLE_CLIENT_SECRET
        : ''
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials, req) {
        let user = null;
        user = await PrismaPostgres.sandbox_users.findFirst({
          where: { username: credentials!.username }
        });
        if (!user) {
          user = await PrismaPostgres.users.findUnique({
            where: { username: credentials!.username }
          });
        }
        if (user) {
          const bcrypt = require('bcryptjs');
          const comparedPasswords = await bcrypt.compare(
            credentials!.password,
            user.password
          );
          if (comparedPasswords) {
            return {
              id: user.pk?.toString() ?? user.username,
              name: user.username,
              username: user.username
            };
          }
        }
        return null;
      }
    })
  ]
};
export default AuthOptions;

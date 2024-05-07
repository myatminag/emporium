import { AxiosError } from 'axios';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { signInService } from '@app/services/auth/signIn';

export const options: NextAuthOptions = {
  pages: {
    signIn: '/',
  },
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const res = await signInService({
            email: credentials?.email || '',
            password: credentials?.password || '',
          });

          const user = {
            ...res,
            id: res.userId,
          };

          return user;
        } catch (error) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const axiosError = error as any as AxiosError;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const errData = axiosError.response?.data as any;
          throw new Error(errData.message);
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
        session.user.accessToken = token.user.accessToken;
        session.user.refreshToken = token.user.refreshToken;
        session.user.email = token.user.email;
        session.user.userId = token.user.userId;
        session.user.exp = token.user.exp;
      }

      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

import { AxiosError } from 'axios';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { signInService } from '@app/services/auth/sign-in';

export const nextAuthOptions: NextAuthOptions = {
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
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },
    async session({ session, token }) {
      session.user = token.user;

      return session;
    },
  },
};

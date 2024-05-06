import { DefaultSession, DefaultUser } from 'next-auth';
import { DefaultJWT } from 'next-auth/jwt';

interface User extends DefaultUser {
  accessToken?: string;
  refreshToken?: string;
  userId?: string;
  exp?: number;
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    user: User;
  }
}

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user: User;
  }
}

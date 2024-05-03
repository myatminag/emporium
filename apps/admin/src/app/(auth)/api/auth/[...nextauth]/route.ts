import NextAuth from 'next-auth';

import { nextAuthOptions } from './auth-option';

const authHandler = NextAuth(nextAuthOptions);

export { authHandler as GET, authHandler as POST };

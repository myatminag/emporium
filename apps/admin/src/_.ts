import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const token = await getToken({ req });

    const isAuthorized = !!token;
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith('/')) {
      return;
    }
  },
  {
    callbacks: {
      async authorized() {
        return true;
      },
    },
  },
);

export const config = {
  matcher: ['/'],
};

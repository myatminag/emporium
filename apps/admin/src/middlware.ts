import { getToken } from 'next-auth/jwt';
import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  async function middleware(req: NextRequestWithAuth) {
    const token = await getToken({ req });

    const isAuthorized = !!token;
    const pathname = req.nextUrl.pathname;

    if (pathname.startsWith('/')) {
      if (isAuthorized) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }

      return null;
    }

    if (!isAuthorized) {
      return NextResponse.redirect(new URL('/', req.url));
    }
  },
  {
    callbacks: {
      async authorized() {
        /**
         * This is work-around for handling redirect on auth pages.
         * We return true here so that the middleware function above is always called.
         */
        return true;
      },
    },
  },
);

export const config = {
  matcher: ['/', '/dashboard/:path*'],
};

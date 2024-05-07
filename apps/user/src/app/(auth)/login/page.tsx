'use client';

import Link from 'next/link';

import { MainLogo, Button } from 'packages/ui/src';

const Login = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-8 lg:px-8">
      <div className="flex w-full max-w-sm flex-col items-center gap-y-5 lg:mx-auto">
        <MainLogo />
        <h2 className="text-center text-2xl font-semibold leading-9 text-gray-900">
          Login to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="email"
              className="text-md block font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                className="block w-full rounded border px-3 py-2 text-base text-gray-700 shadow-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-md block font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <Link
                href="/reset-password"
                className="text-primary text-base font-medium underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="block w-full rounded border px-3 py-2 text-base text-gray-700 shadow-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <Button
              color="primary"
              className="flex w-full justify-center rounded"
            >
              Login
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-base text-gray-500">
          Don&apos;t have an account?{' '}
          <Link
            href="/register"
            className="text-primary font-medium leading-6 underline"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

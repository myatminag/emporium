'use client';

import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { MainLogo } from '@ecommerce/ui';

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-8 lg:px-8">
      <div className="flex w-full max-w-sm flex-col items-center gap-y-5 lg:mx-auto">
        <MainLogo />
        <h2 className="text-center text-2xl font-semibold leading-9 text-gray-900">
          Create a new account
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
            <label
              htmlFor="password"
              className="text-md block font-medium leading-6 text-gray-900"
            >
              Phone Number
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your phone number"
                className="block w-full rounded border px-3 py-2 text-base text-gray-700 shadow-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-md block font-medium leading-6 text-gray-900"
            >
              Password
            </label>
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
            <label
              htmlFor="confirm-password"
              className="text-md block font-medium leading-6 text-gray-900"
            >
              Confirm Passowrd
            </label>
            <div className="mt-2">
              <input
                id="confirm-password"
                name="confirm-password"
                type="confirm-password"
                placeholder="Enter your confirm password"
                className="block w-full rounded border px-3 py-2 text-base text-gray-700 shadow-sm focus:outline-none"
              />
            </div>
          </div>

          <div>
            <Button
              color="primary"
              className="flex w-full justify-center rounded"
            >
              Register
            </Button>
          </div>
        </form>

        <p className="mt-10 text-center text-base text-gray-500">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-primary font-medium leading-6 underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

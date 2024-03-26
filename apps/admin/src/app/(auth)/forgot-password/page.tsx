import { Metadata } from 'next';
import Link from 'next/link';

import ForgotPasswordForm from './components/forgot-pw-form';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

const ForgotPasswordPage = () => {
  return (
    <main className="flex min-h-screen flex-col justify-center px-4 py-12 lg:px-8">
      <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:mx-auto lg:w-full lg:max-w-md lg:p-8">
        <div className="space-y-2.5">
          <h1 className="block text-center text-2xl font-semibold text-neutral-700">
            Forgot password
          </h1>
          <p className="text-center text-base text-neutral-400">
            Enter the email address that associated with your account.
          </p>
        </div>
        <div>
          <ForgotPasswordForm />
          <div className="mt-4 flex justify-center gap-x-1">
            <p className="text-base text-neutral-700">
              Remember your password?
            </p>
            <Link
              href="/"
              className="text-primary text-base font-medium decoration-2 hover:underline"
            >
              Sign in here
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;

import { Metadata } from 'next';
import Link from 'next/link';

import ForgotPasswordForm from './components/forgot-pw-form';
import ForgotPwIcon from '../../../components/icons/forgot-pw-icon';

export const metadata: Metadata = {
  title: 'Forgot Password',
};

const ForgotPasswordPage = () => {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="bg-primary flex flex-col items-center justify-center px-4 py-8">
        <p className="text-heading text-center font-medium text-white lg:text-lg">
          Let&apos;s make your <br /> online business thrive together!
        </p>
        <ForgotPwIcon className="size-56 lg:size-96" />
      </div>
      <div className="flex min-h-[calc(100vh-342px)] flex-col items-center justify-center space-y-5 p-4 lg:mx-auto lg:w-full lg:max-w-md lg:rounded-xl">
        <div className="space-y-2.5">
          <h1 className="block text-center text-2xl font-semibold text-neutral-700">
            Forgot password
          </h1>
          <p className="text-center text-base text-neutral-400">
            Enter the email address that associated with your account.
          </p>
        </div>
        <ForgotPasswordForm />
        <div className="mt-4 flex justify-center gap-x-1">
          <p className="text-base text-neutral-700">Remember your password?</p>
          <Link
            href="/"
            className="text-primary text-base font-medium decoration-2 hover:underline"
          >
            Sign in here
          </Link>
        </div>
      </div>
    </main>
  );
};

export default ForgotPasswordPage;

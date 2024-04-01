import { Metadata } from 'next';

import PasswordForm from './components/password-form';
import ResetPwIcon from '../../../components/icons/reset-pw-icon';

export const metadata: Metadata = {
  title: 'Reset Password',
};

const ResetPasswordPage = () => {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="bg-primary flex flex-col items-center justify-center px-4 py-8">
        <p className="text-heading text-center font-medium text-white lg:text-lg">
          Let&apos;s make your <br /> online business thrive together!
        </p>
        <ResetPwIcon className="size-56 lg:size-96" />
      </div>
      <div className="flex min-h-[calc(100vh-342px)] flex-col items-center justify-center space-y-5 p-4 lg:mx-auto lg:w-full lg:max-w-md lg:rounded-xl">
        <div className="space-y-2.5">
          <h1 className="block text-center text-2xl font-semibold text-neutral-700">
            Reset password
          </h1>
          <p className="text-center text-base text-neutral-400">
            Your new password must be different from previously used passwords.
          </p>
        </div>
        <PasswordForm />
      </div>
    </main>
  );
};

export default ResetPasswordPage;

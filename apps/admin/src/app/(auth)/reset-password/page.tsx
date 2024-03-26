import { Metadata } from 'next';

import PasswordForm from './components/password-form';

export const metadata: Metadata = {
  title: 'Reset Password',
};

const ResetPasswordPage = () => {
  return (
    <main className="flex min-h-screen flex-col justify-center px-4 py-12 lg:px-8">
      <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:mx-auto lg:w-full lg:max-w-md lg:p-8">
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

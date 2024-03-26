import { Metadata } from 'next';

import { MainLogo } from 'packages/ui/src';
import LoginForm from '../../components/auth/login-form';

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage = () => {
  return (
    <main className="flex min-h-screen flex-col justify-center px-4 py-12 lg:px-8">
      <div className="space-y-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm lg:mx-auto lg:w-full lg:max-w-md lg:p-8">
        <div className="space-y-5 lg:mx-auto lg:w-full lg:max-w-sm">
          <MainLogo className="mx-auto size-10" />
          <h2 className="text-center text-2xl font-semibold leading-9 tracking-tight text-neutral-700">
            Sign in to your account
          </h2>
        </div>
        <div className="mt-10 lg:mx-auto lg:w-full lg:max-w-sm">
          <LoginForm />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;

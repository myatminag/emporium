import { Metadata } from 'next';

import SignInIcon from '../../components/icons/login-icon';
import LoginForm from '../../components/auth/login-form';

export const metadata: Metadata = {
  title: 'Login',
};

const LoginPage = () => {
  return (
    <main className="min-h-screen lg:grid lg:grid-cols-2">
      <div className="bg-primary flex flex-col items-center justify-center px-4 py-8">
        <p className="text-heading text-center font-medium text-white lg:text-lg">
          Let&apos;s make your <br /> online business thrive together!
        </p>
        <SignInIcon className="size-56 lg:size-96" />
      </div>
      <div className="flex min-h-[calc(100vh-342px)] flex-col items-center justify-center space-y-5 p-4 lg:mx-auto lg:w-full lg:max-w-md lg:rounded-xl">
        <h2 className="text-center text-xl font-semibold leading-9 tracking-tight text-neutral-700">
          Sign in to your account
        </h2>
        <LoginForm />
      </div>
    </main>
  );
};

export default LoginPage;

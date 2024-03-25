import { MainLogo } from 'packages/ui/src';
import LoginForm from '../components/login/LoginForm';

export default async function Index() {
  return (
    <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <MainLogo className="mx-auto size-10" />
        <h2 className="mt-10 text-center text-2xl font-semibold leading-9 tracking-tight text-neutral-700">
          Sign in to your account
        </h2>
      </div>
      <div className="mt-10 lg:mx-auto lg:w-full lg:max-w-sm">
        <LoginForm />
      </div>
    </div>
  );
}

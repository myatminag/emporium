import Image from 'next/image';
import { MainLogo } from 'packages/ui/src';
import LoginForm from '../components/login/LoginForm';

export default async function Index() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center">
      <Image
        src={'/left-circle.png'}
        alt="left-circle"
        width={200}
        height={200}
        className="absolute left-0 top-1/2 -translate-y-1/2"
      />
      <Image
        src={'/top-right.png'}
        alt="left-circle"
        width={300}
        height={300}
        className="absolute right-0 top-0"
      />
      <Image
        src={'/bottom-right.png'}
        alt="left-circle"
        width={300}
        height={300}
        className="absolute bottom-0 right-0"
      />
      <div className="flex min-w-[500px] flex-col">
        <div className="mb-4 flex items-center justify-center gap-4">
          <MainLogo />
          <h3 className="text-primary text-xl font-semibold">Emporium</h3>
        </div>
        <div className="bg-secondary-100 flex h-auto w-full flex-col gap-y-5 rounded-xl px-8 py-4">
          <h1 className="text-center text-xl font-medium">Sign In</h1>
          <LoginForm />
        </div>
         deserunt ab ad sequi tempore repellendus ex sed dicta eos aut excepturi animi sint. Ex, architecto?
      </div>
    </div>
  );
}


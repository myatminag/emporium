import { Metadata } from 'next';

import OtpForm from './components/otp-form';

export const metadata: Metadata = {
  title: 'Email Verification',
};

const EmailVerificationPage = () => {
  return (
    <main className="flex min-h-screen flex-col justify-center px-4 py-12 lg:px-8">
      <div className="space-y-5 rounded-lg border border-gray-200 bg-white p-4 shadow-sm lg:mx-auto lg:w-full lg:max-w-md lg:p-8">
        <div className="space-y-2.5">
          <h1 className="block text-center text-2xl font-semibold text-neutral-700">
            Email Verification
          </h1>
          <p className="text-center text-base text-neutral-400">
            Please enter the 6 digit code that send to your email address.
          </p>
        </div>
        <OtpForm />
      </div>
    </main>
  );
};

export default EmailVerificationPage;

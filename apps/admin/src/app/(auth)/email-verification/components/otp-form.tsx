'use client';

import { Button } from 'packages/ui/src';

const OtpForm = () => {
  return (
    <form className="w-full space-y-6">
      <div className="flex justify-center space-x-3" data-hs-pin-input="">
        <input
          type="text"
          autoFocus
          className="focus:border-primary focus:ring-primary block w-[38px] rounded-sm border-gray-300 text-center text-base disabled:pointer-events-none disabled:opacity-50"
          data-hs-pin-input-item=""
        />
        <input
          type="text"
          className="focus:border-primary focus:ring-primary block w-[38px] rounded-sm border-gray-300 text-center text-base disabled:pointer-events-none disabled:opacity-50"
          data-hs-pin-input-item=""
        />
        <input
          type="text"
          className="focus:border-primary focus:ring-primary block w-[38px] rounded-sm border-gray-300 text-center text-base disabled:pointer-events-none disabled:opacity-50"
          data-hs-pin-input-item=""
        />
        <input
          type="text"
          className="focus:border-primary focus:ring-primary block w-[38px] rounded-sm border-gray-300 text-center text-base disabled:pointer-events-none disabled:opacity-50"
          data-hs-pin-input-item=""
        />
        <input
          type="text"
          className="focus:border-primary focus:ring-primary block w-[38px] rounded-sm border-gray-300 text-center text-base disabled:pointer-events-none disabled:opacity-50"
          data-hs-pin-input-item=""
        />
        <input
          type="text"
          className="focus:border-primary block w-[38px] rounded-sm border-gray-300 text-center text-base focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
          data-hs-pin-input-item=""
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="sm"
        className="w-full text-base"
      >
        Verify
      </Button>
      <div className="mt-4 flex justify-center gap-x-1">
        <p className="text-base text-neutral-700">
          If you don&apos;t receive code!
        </p>
        <button className="text-primary text-base font-medium decoration-2 hover:underline">
          Resend
        </button>
      </div>
    </form>
  );
};

export default OtpForm;

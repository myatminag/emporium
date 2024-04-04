'use client';

import Image from 'next/image';

import { SuccessIcon } from '@ecommerce/ui';
import WaveMoney from '../../../../../../assets/images/aya_pay.png';
import PaymentOne from '../../../../../../assets/temp/payment_one.png';

const PaymentRecord = () => {
  return (
    <div className="w-full rounded-sm border bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Payment Record
      </p>
      <div className="space-y-2 p-4">
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-700">Platform:</p>
          <div className="flex items-center gap-x-1">
            <Image
              src={WaveMoney}
              alt="payment-platform"
              width={100}
              height={100}
              className="h-7 w-14 rounded"
            />
            <p className="text-base font-medium text-neutral-700">AYAPay</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-700">Date:</p>
          <p className="text-base font-medium text-neutral-700">
            1st Mar 2023 at 06:00 PM
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-base text-neutral-700">Status:</p>
          <span className="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1 text-base font-medium text-[#1EB564]">
            <SuccessIcon className="size-4" />
            Success
          </span>
        </div>
        <div className="space-y-1">
          <p className="text-base text-neutral-400">Screenshots</p>
          <div className="grid grid-cols-8 gap-2">
            {[...Array(3)].map((_, i) => (
              <Image
                key={i}
                src={PaymentOne}
                alt="payment-screenshots"
                width={100}
                height={100}
                className="size-20"
              />
            ))}
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-end gap-x-2">
          <button className="bg-primary-100 text-primary rounded-sm px-4 py-1 text-sm">
            Reject
          </button>
          <button className="bg-primary rounded-sm px-4 py-1 text-sm text-white">
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentRecord;

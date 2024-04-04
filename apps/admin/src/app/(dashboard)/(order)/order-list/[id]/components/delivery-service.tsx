'use client';

import Image from 'next/image';

const DeliverySerivce = () => {
  return (
    <div className="w-full rounded-sm border bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Delivery Service
      </p>
      <div className="flex items-start gap-x-2 p-4">
        <Image
          className="size-[48px] flex-shrink-0 rounded-sm"
          src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
          alt="Image Description"
          width={150}
          height={150}
        />
        <div>
          <p className="text-base font-medium text-neutral-700">
            Lorem ipsum dolor,
          </p>
          <p className="text-base text-neutral-700">09123456789</p>
          <p className="text-base text-neutral-700">
            Est Delivery Day (2 - 4 Days)
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeliverySerivce;

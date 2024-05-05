'use client';

import {
  OrderedIcon,
  PackedIcon,
  DeliveredIcon,
  DeliveringIcon,
} from 'packages/ui/src';

const OrderStatus = () => {
  return (
    <ol className="flex items-center justify-center pt-6">
      <li className="relative flex flex-col items-start">
        <div className="flex items-center">
          <div className="bg-primary z-10 flex size-12 shrink-0 items-center justify-center rounded-full">
            <OrderedIcon className="size-6 text-white" />
          </div>
          <div className="h-0.5 w-10 bg-gray-200 sm:flex lg:w-24 dark:bg-gray-700" />
        </div>
        <h3 className="-ml-1.5 mt-3 text-center text-base font-medium text-neutral-700">
          Ordered
        </h3>
      </li>
      <li className="relative flex flex-col items-start">
        <div className="flex items-center">
          <div className="bg-primary z-10 flex size-12 shrink-0 items-center justify-center rounded-full">
            <PackedIcon className="size-6 text-white" />
          </div>
          <div className="h-0.5 w-10 bg-gray-200 sm:flex lg:w-24 dark:bg-gray-700" />
        </div>
        <h3 className="-ml-1 mt-3 text-center text-base font-medium text-neutral-700">
          Packed
        </h3>
      </li>
      <li className="relative flex flex-col items-start">
        <div className="flex items-center">
          <div className="bg-primary z-10 flex size-12 shrink-0 items-center justify-center rounded-full">
            <DeliveringIcon className="size-6 text-white" />
          </div>
          <div className="h-0.5 w-10 bg-gray-200 sm:flex lg:w-24" />
        </div>
        <h3 className="-ml-2 mt-3 text-center text-base font-medium text-neutral-700">
          Delivering
        </h3>
      </li>
      <li className="relative flex flex-col items-start">
        <div className="flex items-center">
          <div className="bg-primary z-10 flex size-12 shrink-0 items-center justify-center rounded-full">
            <DeliveredIcon className="size-6 text-white" />
          </div>
        </div>
        <h3 className="-ml-2 mt-3 text-center text-base font-medium text-neutral-700">
          Delivered
        </h3>
      </li>
    </ol>
  );
};

export default OrderStatus;

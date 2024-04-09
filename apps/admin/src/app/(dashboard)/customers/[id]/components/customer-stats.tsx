'use client';

import { ProductStatIcon, OrderStatIcon } from '@ecommerce/ui';

const CustomerStats = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <div className="flex flex-col rounded-sm border bg-white shadow-sm">
        <div className="flex justify-between gap-x-3 p-4 md:p-5">
          <div>
            <p className="text-base uppercase tracking-wide text-neutral-700">
              Total Orders
            </p>
            <h3 className="mt-1 text-xl font-medium text-gray-800 sm:text-2xl dark:text-gray-200">
              57
            </h3>
          </div>
          <ProductStatIcon className="size-12 flex-shrink-0" />
        </div>
      </div>
      <div className="flex flex-col rounded-sm border bg-white shadow-sm">
        <div className="flex justify-between gap-x-3 p-4 md:p-5">
          <div>
            <p className="text-base uppercase tracking-wide text-neutral-700">
              Wish Lists
            </p>
            <h3 className="mt-1 text-xl font-medium text-gray-800 sm:text-2xl dark:text-gray-200">
              13
            </h3>
          </div>
          <ProductStatIcon className="size-12 flex-shrink-0" />
        </div>
      </div>
      <div className="flex flex-col rounded-sm border bg-white shadow-sm">
        <div className="flex justify-between gap-x-3 p-4 md:p-5">
          <div>
            <p className="text-base uppercase tracking-wide text-neutral-700">
              Member Level
            </p>
            <h3 className="mt-1 text-xl font-medium text-gray-800 sm:text-2xl dark:text-gray-200">
              Gold
            </h3>
          </div>
          <OrderStatIcon className="size-12 flex-shrink-0" />
        </div>
      </div>
    </div>
  );
};

export default CustomerStats;

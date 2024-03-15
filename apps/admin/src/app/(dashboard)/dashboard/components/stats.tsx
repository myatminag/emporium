import Link from 'next/link';

import {
  ChevronIcon,
  RevenueStatIcon,
  OrderStatIcon,
  UserStatIcon,
  ProductStatIcon,
} from '@ecommerce/ui';

const Stats = () => {
  return (
    <div className="mx-auto max-w-[85rem] lg:max-w-full">
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="flex flex-col rounded-sm border bg-white shadow-sm">
          <div className="flex justify-between gap-x-3 p-4 md:p-5">
            <div>
              <p className="text-base uppercase tracking-wide text-neutral-700">
                Total Revenue
              </p>
              <h3 className="mt-1 text-xl font-medium text-gray-800 sm:text-2xl dark:text-gray-200">
                92,913
              </h3>
            </div>
            <RevenueStatIcon className="size-12 flex-shrink-0" />
          </div>
          <Link
            className="inline-flex items-center justify-between rounded-b-xl border-t border-gray-200 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 md:px-5 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            View reports
            <ChevronIcon direction="right" />
          </Link>
        </div>
        <div className="flex flex-col rounded-sm border bg-white shadow-sm">
          <div className="flex justify-between gap-x-3 p-4 md:p-5">
            <div>
              <p className="text-base uppercase tracking-wide text-neutral-700">
                Total Products
              </p>
              <h3 className="mt-1 text-xl font-medium text-gray-800 sm:text-2xl dark:text-gray-200">
                72,5
              </h3>
            </div>
            <ProductStatIcon className="size-12 flex-shrink-0" />
          </div>
          <Link
            className="inline-flex items-center justify-between rounded-b-xl border-t border-gray-200 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 md:px-5 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            View reports
            <ChevronIcon direction="right" />
          </Link>
        </div>
        <div className="flex flex-col rounded-sm border bg-white shadow-sm">
          <div className="flex justify-between gap-x-3 p-4 md:p-5">
            <div>
              <p className="text-base uppercase tracking-wide text-neutral-700">
                Total Orders
              </p>
              <h3 className="mt-1 text-xl font-medium text-gray-800 sm:text-2xl dark:text-gray-200">
                56.8%
              </h3>
            </div>
            <OrderStatIcon className="size-12 flex-shrink-0" />
          </div>
          <Link
            className="inline-flex items-center justify-between rounded-b-xl border-t border-gray-200 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 md:px-5 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            View reports
            <ChevronIcon direction="right" />
          </Link>
        </div>
        <div className="flex flex-col rounded-sm border bg-white shadow-sm">
          <div className="flex justify-between gap-x-3 p-4 md:p-5">
            <div>
              <p className="text-base uppercase tracking-wide text-neutral-700">
                Total Users
              </p>
              <h3 className="mt-1 text-xl font-medium text-gray-800 sm:text-2xl dark:text-gray-200">
                72,5
              </h3>
            </div>
            <UserStatIcon className="size-12 flex-shrink-0" />
          </div>
          <Link
            className="inline-flex items-center justify-between rounded-b-xl border-t border-gray-200 px-4 py-3 text-sm text-gray-600 hover:bg-gray-50 md:px-5 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-slate-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href="#"
          >
            View reports
            <ChevronIcon direction="right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Stats;

import React from 'react';
import { CircleIcon } from '@ecommerce/ui';
import BrandMutationForm from './BrandMutationForm';

const CreateBrand = () => {
  return (
    <>
      <div className="text-center">
        <button
          data-hs-overlay="#hs-bg-gray-on-hover-cards"
          type="button"
          className="flex w-20 items-center justify-center gap-1 rounded-lg bg-blue-500 py-2 text-white md:w-40"
        >
          <CircleIcon className="w-4" />
          <span className="mt-.5 md:text-md text-sm font-medium">Create</span>
        </button>
      </div>
      <div
        id="hs-bg-gray-on-hover-cards"
        className="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden size-full overflow-y-auto overflow-x-hidden"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 m-3 mt-0 h-[calc(100%-3.5rem)] opacity-0 transition-all ease-out sm:mx-auto sm:w-full sm:max-w-4xl md:px-20">
          <div className="pointer-events-auto flex max-h-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:shadow-slate-700/[.7]">
            <div className="flex items-center justify-between border-b px-4 py-3 dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-gray-200">
                Create Brand
              </h3>
              <button
                type="button"
                className="flex size-7 items-center justify-center rounded-lg border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50 dark:border-transparent dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-bg-gray-on-hover-cards"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="size-4 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto p-4">
              <div className="divide-gray-200 sm:divide-y dark:divide-gray-700">
                <BrandMutationForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBrand;

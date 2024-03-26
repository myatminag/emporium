import React from 'react';

const BrandPagination = () => {
  return (
    <div className="grid justify-center gap-2 sm:flex sm:items-center sm:justify-start">
      {/* Pagination */}
      <nav className="flex items-center justify-end -space-x-px">
        <button
          type="button"
          className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 border border-gray-200 px-2.5 py-2 text-sm text-gray-800 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <svg
            className="size-3.5 flex-shrink-0"
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
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span aria-hidden="true" className="sr-only">
            Previous
          </span>
        </button>
        <button
          type="button"
          className="flex min-h-[38px] min-w-[38px] items-center justify-center border border-gray-200 bg-gray-200 px-3 py-2 text-sm text-gray-800 first:rounded-s-lg last:rounded-e-lg focus:bg-gray-300 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:focus:bg-gray-500"
          aria-current="page"
        >
          1
        </button>
        <button
          type="button"
          className="flex min-h-[38px] min-w-[38px] items-center justify-center border border-gray-200 px-3 py-2 text-sm text-gray-800 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          2
        </button>
        <button
          type="button"
          className="flex min-h-[38px] min-w-[38px] items-center justify-center border border-gray-200 px-3 py-2 text-sm text-gray-800 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          3
        </button>
        <div className="hs-tooltip inline-block border border-gray-200 dark:border-gray-700">
          <button
            type="button"
            className="hs-tooltip-toggle group flex min-h-[36px] min-w-[36px] items-center justify-center p-2 text-sm text-gray-400 hover:text-blue-600 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-gray-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
          >
            <span className="text-xs group-hover:hidden">•••</span>
            <svg
              className="hidden size-5 flex-shrink-0 group-hover:block"
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
              <path d="m6 17 5-5-5-5" />
              <path d="m13 17 5-5-5-5" />
            </svg>
            <span
              className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible invisible absolute z-10 hidden rounded bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity dark:bg-slate-700"
              role="tooltip"
            >
              Next 4 pages
            </span>
          </button>
        </div>
        <button
          type="button"
          className="flex min-h-[38px] min-w-[38px] items-center justify-center border border-gray-200 px-3 py-2 text-sm text-gray-800 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          8
        </button>
        <button
          type="button"
          className="inline-flex min-h-[38px] min-w-[38px] items-center justify-center gap-x-1.5 border border-gray-200 px-2.5 py-2 text-sm text-gray-800 first:rounded-s-lg last:rounded-e-lg hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
        >
          <span aria-hidden="true" className="sr-only">
            Next
          </span>
          <svg
            className="size-3.5 flex-shrink-0"
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </nav>
      {/* End Pagination */}
      <div className="flex items-center justify-center gap-x-5">
        {/* Dropdown */}
        <div className="hs-dropdown relative inline-flex [--placement:top-left]">
          <button
            id="hs-default-bordered-group-pagination-dropdown"
            type="button"
            className="hs-dropdown-toggle inline-flex items-center gap-x-1 rounded-lg border border-gray-200 px-2.5 py-2 text-sm text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            5 page
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
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <div
            className="hs-dropdown-menu hs-dropdown-open:opacity-100 z-50 mb-2 hidden w-48 rounded-lg bg-white p-2 opacity-0 shadow-md transition-[margin,opacity] duration-300 dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800"
            aria-labelledby="hs-default-bordered-group-pagination-dropdown"
          >
            <button
              type="button"
              className="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            >
              5 page
              <svg
                className="ms-auto size-4 flex-shrink-0 text-blue-600 dark:text-blue-500"
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            >
              8 page
            </button>
            <button
              type="button"
              className="flex w-full items-center gap-x-3.5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
            >
              10 page
            </button>
          </div>
        </div>
        {/* End Dropdown */}
        {/* Go To Page */}
        <div className="flex items-center gap-x-2">
          <span className="whitespace-nowrap text-sm text-gray-800 dark:text-white">
            Go to
          </span>
          <input
            type="number"
            className="block min-h-[38px] w-12 rounded-lg border-gray-200 px-2.5 py-2 text-center text-sm focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            style={{ MozAppearance: 'textfield' }}
          />
          <span className="whitespace-nowrap text-sm text-gray-800 dark:text-white">
            page
          </span>
        </div>
        {/* End Go To Page */}
      </div>
    </div>
  );
};

export default BrandPagination;

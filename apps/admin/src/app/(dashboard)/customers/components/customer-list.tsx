'use client';

import Image from 'next/image';
import Link from 'next/link';

import { ThreeDotsIcon, FilterIcon, SearchIcon } from 'packages/ui/src';

const Status = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Publish' },
  { id: 3, name: 'Unpublish' },
];

const CustomerList = () => {
  return (
    <div className="mx-auto max-w-[85rem] overflow-x-auto lg:max-w-full">
      <div className="inline-block min-w-full align-middle">
        <p className="text-heading mb-4 font-medium">Customer Lists (1,105)</p>
        <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
          <div className="space-y-2 border-b border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <label
                htmlFor="hs-as-table-product-review-search"
                className="sr-only"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="hs-as-table-product-review-search"
                  name="hs-as-table-product-review-search"
                  className="focus:border-primary focus:ring-primary block w-72 rounded-sm border-gray-200 px-3 py-2 ps-11 text-base disabled:pointer-events-none disabled:opacity-50"
                  placeholder="Search customers..."
                />
                <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
                  <SearchIcon className="size-4 text-gray-400" />
                </div>
              </div>

              <div className="flex justify-end gap-x-2">
                <div
                  className="hs-dropdown relative inline-block [--placement:bottom-right]"
                  data-hs-dropdown-auto-close="inside"
                >
                  <button
                    id="hs-as-table-table-filter-dropdown"
                    type="button"
                    className="inline-flex items-center gap-x-2 rounded-sm border border-gray-200 bg-white px-3 py-2 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <FilterIcon className="size-3.5 flex-shrink-0" />
                    Status
                  </button>
                  <div
                    className="hs-dropdown-menu duration hs-dropdown-open:opacity-100 z-10 mt-2 hidden min-w-48 divide-y divide-gray-200 rounded-lg bg-white opacity-0 shadow-md transition-[opacity,margin] dark:divide-gray-700 dark:border dark:border-gray-700 dark:bg-gray-800"
                    aria-labelledby="hs-as-table-table-filter-dropdown"
                  >
                    <div className="divide-y divide-gray-200 dark:divide-gray-700">
                      {Status.map((status) => (
                        <label
                          key={status.id}
                          htmlFor="hs-as-filters-dropdown-all"
                          className="flex px-3 py-2.5"
                        >
                          <input
                            type="checkbox"
                            className="mt-0.5 shrink-0 rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-600 dark:bg-slate-900 dark:checked:border-blue-500 dark:checked:bg-blue-500 dark:focus:ring-offset-gray-800"
                            id="hs-as-filters-dropdown-all"
                          />
                          <span className="ms-3 text-base text-gray-800 dark:text-gray-200">
                            {status.name}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th scope="col" className="px-4 py-3 text-start"></th>
                <th scope="col" className="px-4 py-3 text-start">
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Profile
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Name
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Email
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-base uppercase tracking-wide text-neutral-700">
                      Phone No
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-base uppercase tracking-wide text-neutral-700">
                      Spent
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <p className="text-base uppercase tracking-wide text-neutral-700">
                      Join On
                    </p>
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <p className="text-base uppercase tracking-wide text-neutral-700">
                      Action
                    </p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[...Array(10)].map((_, i) => (
                <tr
                  key={i}
                  className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                >
                  <td className="size-px whitespace-nowrap align-middle">
                    <div className="flex items-center gap-x-3 p-4">
                      <input
                        type="checkbox"
                        className="text-primary shrink-0 cursor-pointer rounded border-gray-400 disabled:pointer-events-none disabled:opacity-50"
                        id="hs-default-checkbox"
                      />
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <Link className="block p-4" href="#">
                      <Image
                        width={100}
                        height={100}
                        className="size-[44px] flex-shrink-0 rounded-sm"
                        src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                        alt="Image Description"
                      />
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <Link className="block p-4" href="/customers/1">
                      <p className="text-base text-neutral-700">Adam Taylor</p>
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <Link className="block p-4" href="#">
                      <p className="text-base text-neutral-700">
                        adamtalyor@gmail.com
                      </p>
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <Link className="block p-4" href="#">
                      <p className="text-base text-neutral-700">+95987654321</p>
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <Link className="block p-4" href="#">
                      <p className="text-base text-neutral-700">34,000 Ks</p>
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <Link className="block p-4" href="#">
                      <p className="text-base text-neutral-700">May 15, 2024</p>
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <div className="px-6 py-2">
                      <div className="hs-dropdown relative inline-block [--placement:bottom-right]">
                        <button
                          id="hs-table-dropdown-6"
                          type="button"
                          className="hs-dropdown-toggle transition-alldisabled:pointer-events-none inline-flex items-center justify-center gap-2 rounded-sm border border-gray-200 p-1 align-middle text-sm text-gray-700 disabled:opacity-50"
                        >
                          <ThreeDotsIcon className="size-5" />
                        </button>
                        <div
                          className="hs-dropdown-menu duration hs-dropdown-open:opacity-100 z-20 mt-2 hidden min-w-40 divide-y divide-gray-200 rounded-lg bg-white p-2 opacity-0 shadow-2xl transition-[opacity,margin]"
                          aria-labelledby="hs-table-dropdown-6"
                        >
                          <div className="py-2 first:pt-0 last:pb-0">
                            <a
                              className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base text-gray-800 hover:bg-gray-100"
                              href="#"
                            >
                              Ban
                            </a>
                          </div>
                          <div className="py-2 first:pt-0 last:pb-0">
                            <a
                              className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base text-red-600 hover:bg-gray-100"
                              href="#"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;

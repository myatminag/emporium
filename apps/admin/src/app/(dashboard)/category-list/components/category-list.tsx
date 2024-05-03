'use client';

import Link from 'next/link';
import Image from 'next/image';

import { categories } from '@app/data/dummy';
import { SearchIcon, ThreeDotsIcon } from 'packages/ui/src';

const CategoryList = () => {
  return (
    <div className="mx-auto max-w-[85rem] overflow-x-auto lg:max-w-full">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
          <div className="space-y-2 border-b border-gray-200 p-4 dark:border-gray-700">
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
                className="block w-72 rounded-sm border-gray-200 px-3 py-2 ps-11 text-base focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                placeholder="Search categories..."
              />
              <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
                <SearchIcon className="size-4 text-gray-400" />
              </div>
            </div>
          </div>

          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th scope="col" className="px-4 py-3 text-start"></th>
                <th scope="col" className="px-4 py-3 text-start">
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Category
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Sub Category
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Brands
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-base uppercase tracking-wide text-neutral-700">
                      Products
                    </span>
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
              {categories.map((category) => (
                <tr
                  key={category.id}
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
                    <div className="flex items-center gap-x-4 p-4">
                      <Image
                        width={100}
                        height={100}
                        className="size-[44px] flex-shrink-0 rounded-sm"
                        src={category.url}
                        alt="Image Description"
                      />
                      <p className="block text-base text-neutral-700">
                        {category.name}
                      </p>
                    </div>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <p className="p-4 text-base text-neutral-700">
                      {category.subCategory.length} Sub Categories
                    </p>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <Link className="block p-4" href="#">
                      <p className="text-base text-neutral-700">2 Brands</p>
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <Link className="block p-4" href="#">
                      <p className="text-base text-neutral-700">15 Products</p>
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
                            <Link
                              className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base text-gray-800 hover:bg-gray-100"
                              href="/category-list/1"
                            >
                              Edit
                            </Link>
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

export default CategoryList;

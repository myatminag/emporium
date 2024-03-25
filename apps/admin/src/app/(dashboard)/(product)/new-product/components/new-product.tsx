'use client';

import { Fragment, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';

import { ChevronIcon, CircleIcon, Dialog, ThreeDotsIcon } from '@ecommerce/ui';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
];

const NewProduct = () => {
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <div className="w-full rounded-sm border bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Upload Image
            </p>
            <div className="space-y-4 p-4">
              <label
                htmlFor="af-submit-app-upload-images"
                className="group block cursor-pointer rounded-lg border-2 border-dashed border-gray-200 p-4 text-center lg:p-7"
              >
                <input
                  id="af-submit-app-upload-images"
                  name="af-submit-app-upload-images"
                  type="file"
                  className="sr-only"
                />
                <svg
                  className="mx-auto size-10 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"
                  />
                  <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                </svg>
                <span className="mt-2 block text-base text-neutral-700">
                  Browse your device or{' '}
                  <span className="text-primary">drag&apos;n drop&apos;</span>
                </span>
                <span className="mt-1 block text-sm text-gray-400">
                  Maximum file size is 2 MB
                </span>
              </label>
              <p className="text-base text-neutral-400">
                Add up to 8 images to your product.
              </p>
            </div>
          </div>

          <div className="w-full rounded-sm border bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Product Info
            </p>
            <div className="grid grid-cols-1 gap-4 px-4 pb-4 lg:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="product-name"
                  className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                >
                  Name
                </label>
                <input
                  id="product-name"
                  type="text"
                  className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                  placeholder="Product name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="sku"
                  className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                >
                  SKU
                </label>
                <input
                  id="sku"
                  type="text"
                  className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                  placeholder="SKU"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="af-submit-app-project-name"
                  className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                >
                  Weight
                </label>
                <input
                  id="af-submit-app-project-name"
                  type="text"
                  className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                  placeholder="Weight"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="category"
                  className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                >
                  Category
                </label>
                <Combobox>
                  <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-sm border text-left text-base shadow-sm">
                      <Combobox.Input
                        placeholder="Select category"
                        className="w-full border-none px-3 py-2.5 text-base leading-5 text-neutral-700"
                      />
                      <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                        <ChevronIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </Combobox.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                      afterLeave={() => setQuery('')}
                    >
                      <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                        {filteredPeople.length === 0 && query !== '' ? (
                          <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                            Nothing found.
                          </div>
                        ) : (
                          filteredPeople.map((person) => (
                            <Combobox.Option
                              key={person.id}
                              className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-10 pr-4 text-base ${
                                  active
                                    ? 'bg-primary text-white'
                                    : 'text-gray-900'
                                }`
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? 'font-medium' : 'font-normal'
                                    }`}
                                  >
                                    {person.name}
                                  </span>
                                  {selected ? (
                                    <span
                                      className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                        active ? 'text-white' : 'text-teal-600'
                                      }`}
                                    ></span>
                                  ) : null}
                                </>
                              )}
                            </Combobox.Option>
                          ))
                        )}
                      </Combobox.Options>
                    </Transition>
                  </div>
                </Combobox>
              </div>

              <div className="col-span-2 space-y-2">
                <label
                  htmlFor="af-submit-app-description"
                  className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                >
                  Description
                </label>
                <textarea
                  id="af-submit-app-description"
                  className="text-basedisabled:pointer-events-none block w-full rounded-sm border-gray-200 px-3 py-2 disabled:opacity-50"
                  rows={6}
                  placeholder="Product description..."
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-sm border bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Manage Variants
            </p>
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-50 dark:bg-slate-800">
                <tr>
                  <th scope="col" className="px-4 py-3 text-start">
                    <span className="text-base uppercase tracking-wide text-neutral-700">
                      Variant
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-3 text-start">
                    <span className="text-base uppercase tracking-wide text-neutral-700">
                      SKU
                    </span>
                  </th>
                  <th scope="col" className="px-4 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-base uppercase tracking-wide text-neutral-700">
                        Stock
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-4 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <span className="text-base uppercase tracking-wide text-neutral-700">
                        Qty
                      </span>
                    </div>
                  </th>
                  <th scope="col" className="px-4 py-3 text-start">
                    <div className="flex items-center gap-x-2">
                      <p className="text-base uppercase tracking-wide text-neutral-700">
                        Price
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
                {[...Array(5)].map((_, i) => (
                  <tr
                    key={i}
                    data-hs-overlay="#manage-variants"
                    className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                  >
                    <td className="size-px whitespace-nowrap align-middle">
                      <div className="block p-4">
                        <p className="text-base text-neutral-700">
                          Black, Large
                        </p>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap align-middle">
                      <div className="block p-4">
                        <p className="text-base text-neutral-700">2384741241</p>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap align-middle">
                      <div className="block p-4">
                        <p className="text-base text-neutral-700">23</p>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap align-middle">
                      <div className="block p-4">
                        <p className="text-base text-neutral-700">23</p>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap align-middle">
                      <div className="block p-4">
                        <p className="text-base text-neutral-700">34,000 Ks</p>
                      </div>
                    </td>
                    <td className="size-px whitespace-nowrap align-middle">
                      <div className="block p-4">
                        <p className="text-base text-neutral-700">Publish</p>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="space-y-4 lg:col-span-1">
          <div className="w-full rounded-sm border bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Pricing
            </p>
            <div className="space-y-3 px-4 pb-4">
              <div className="space-y-2">
                <label
                  htmlFor="product-name"
                  className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                >
                  Pricing
                </label>
                <input
                  id="product-name"
                  type="text"
                  className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                  placeholder="Product name"
                />
              </div>
              <div className="flex items-center justify-between space-y-2">
                <p className="mt-2.5 text-base">On Sale</p>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="hs-small-switch"
                    className="focus:ring-primary focus:checked:border-primary checked:border-primary checked:text-primary relative h-6 w-11 cursor-pointer rounded-full border-transparent bg-gray-100 p-px text-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-5 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:ring-0
  before:transition before:duration-200 before:ease-in-out checked:bg-none checked:before:translate-x-full checked:before:bg-red-200 disabled:pointer-events-none disabled:opacity-50"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="product-name"
                    className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                  >
                    Discount
                  </label>
                  <input
                    id="product-name"
                    type="text"
                    className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                    placeholder="0"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="product-name"
                    className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                  >
                    Sale Price
                  </label>
                  <input
                    id="product-name"
                    type="text"
                    className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                    placeholder="Sale Price"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="product-name"
                  className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                >
                  Cost of goods
                </label>
                <input
                  id="product-name"
                  type="text"
                  className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                  placeholder="0"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="product-name"
                  className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                >
                  Profit
                </label>
                <input
                  id="product-name"
                  type="text"
                  className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                  placeholder="0"
                />
              </div>
            </div>
          </div>

          <div className="w-full rounded-sm border bg-white shadow-sm">
            <div className="border-b border-gray-200 p-4">
              <p className="text-heading font-medium">Product Options</p>
              <p className="text-base text-neutral-400">
                Does your product come in different options, like size or color?
                Add them here.
              </p>
            </div>
            <div className="space-x-4 p-4">
              <button
                type="button"
                className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base text-white disabled:pointer-events-none disabled:opacity-50"
                data-hs-overlay="#product-options"
              >
                <CircleIcon className="size-4" />
                Add Options
              </button>
              <Dialog
                dialogTitle="Add product option"
                targetDialog="product-options"
              >
                <div>
                  <p className="text-base text-neutral-400">
                    You&apos;ll be able to manage pricing and inventory for this
                    product option later on.
                  </p>
                  <div className="space-y-2">
                    <label
                      htmlFor="product-name"
                      className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                    >
                      An option name
                    </label>
                    <input
                      id="product-name"
                      type="text"
                      className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm placeholder:text-neutral-400 disabled:pointer-events-none disabled:opacity-50"
                      placeholder="Eg. Size or Weight"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="product-name"
                      className="mt-2.5 inline-block text-base font-medium text-neutral-700"
                    >
                      Choices for this option
                    </label>
                    <input
                      id="product-name"
                      type="text"
                      className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm placeholder:text-neutral-400 disabled:pointer-events-none disabled:opacity-50"
                      placeholder="Eg. Small, Medium, Large"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-end gap-x-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-x-2 rounded-sm border border-gray-200 bg-white px-4 py-2 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
                      data-hs-overlay="#product-options"
                    >
                      Cancel
                    </button>
                    <a
                      className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base font-medium text-white disabled:pointer-events-none disabled:opacity-50"
                      href="#"
                    >
                      Add
                    </a>
                  </div>
                </div>
              </Dialog>
              <button
                type="button"
                className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base text-white disabled:pointer-events-none disabled:opacity-50"
                data-hs-overlay="#manage-variants"
              >
                <CircleIcon className="size-4" />
                Manage Variants
              </button>
              <div
                id="manage-variants"
                className="hs-overlay pointer-events-none fixed start-0 top-0 z-[80] hidden size-full overflow-y-auto overflow-x-hidden"
              >
                <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 m-3 mt-0 flex h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out lg:mx-auto lg:w-full lg:max-w-6xl">
                  <div className="pointer-events-auto flex max-h-full w-full flex-col overflow-hidden rounded-xl border bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b px-4 py-3">
                      <h3 className="text-heading font-medium text-neutral-700">
                        Product Variants
                      </h3>
                      <button
                        type="button"
                        className="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
                        data-hs-overlay="#manage-variants"
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
                    <div className="space-y-2 overflow-y-auto p-4">
                      <p className="text-base text-neutral-700">
                        Based on your product options, these are the different
                        versions of your product that customers can buy.
                      </p>
                      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-slate-800">
                          <tr>
                            <th scope="col" className="px-4 py-3 text-start">
                              <span className="text-base uppercase tracking-wide text-neutral-700">
                                Variant
                              </span>
                            </th>
                            <th scope="col" className="px-4 py-3 text-start">
                              <span className="text-base uppercase tracking-wide text-neutral-700">
                                Sku
                              </span>
                            </th>
                            <th scope="col" className="px-4 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <span className="text-base uppercase tracking-wide text-neutral-700">
                                  Cost of goods
                                </span>
                              </div>
                            </th>
                            <th scope="col" className="px-4 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <span className="text-base uppercase tracking-wide text-neutral-700">
                                  Price
                                </span>
                              </div>
                            </th>
                            <th scope="col" className="px-4 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <span className="text-base uppercase tracking-wide text-neutral-700">
                                  Qty
                                </span>
                              </div>
                            </th>
                            <th scope="col" className="px-4 py-3 text-start">
                              <div className="flex items-center gap-x-2">
                                <p className="text-base uppercase tracking-wide text-neutral-700">
                                  Weight
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
                          {[...Array(3)].map((_, i) => (
                            <tr
                              key={i}
                              className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                            >
                              <td className="size-px whitespace-nowrap align-middle">
                                <div className="block p-4">
                                  <p className="text-base text-neutral-700">
                                    Black
                                  </p>
                                </div>
                              </td>
                              <td className="size-px whitespace-nowrap align-middle">
                                <div className="block p-4">
                                  <input
                                    id="product-name"
                                    type="text"
                                    className="block rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                                    placeholder="SKU"
                                  />
                                </div>
                              </td>
                              <td className="size-px whitespace-nowrap align-middle">
                                <div className="block p-4">
                                  <input
                                    id="product-name"
                                    type="text"
                                    className="block rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                                    placeholder="0"
                                  />
                                </div>
                              </td>
                              <td className="size-px whitespace-nowrap align-middle">
                                <div className="block p-4">
                                  <input
                                    id="product-name"
                                    type="text"
                                    className="block rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                                    placeholder="0"
                                  />
                                </div>
                              </td>
                              <td className="size-px whitespace-nowrap align-middle">
                                <div className="block p-4">
                                  <input
                                    id="product-name"
                                    type="text"
                                    className="block w-20 rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                                    placeholder="0"
                                  />
                                </div>
                              </td>
                              <td className="size-px whitespace-nowrap align-middle">
                                <div className="block p-4">
                                  <input
                                    id="product-name"
                                    type="text"
                                    className="block w-20 rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
                                    placeholder="0"
                                  />
                                </div>
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
                                          Publish
                                        </a>
                                        <a
                                          className="flex items-center gap-x-3 rounded-lg px-3 py-2 text-base text-gray-800 hover:bg-gray-100"
                                          href="#"
                                        >
                                          Unpublish
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
                    <div className="flex items-center justify-end gap-x-2 border-t px-4 py-3 dark:border-gray-700">
                      <button
                        type="button"
                        className="inline-flex items-center gap-x-2 rounded-sm border border-gray-200 bg-white px-3 py-2 text-base font-medium text-neutral-700 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 "
                        data-hs-overlay="#manage-variants"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-3 py-2 text-base font-medium text-white disabled:pointer-events-none disabled:opacity-50"
                      >
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      <div className="mt-5 flex justify-end gap-x-2">
        <button
          type="button"
          className="shadow-base inline-flex items-center gap-x-2 rounded-sm border border-gray-200 bg-white px-4 py-2 text-base font-medium text-gray-800 hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          type="button"
          className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base font-medium text-white disabled:pointer-events-none disabled:opacity-50"
        >
          Save
        </button>
      </div>
    </>
  );
};

export default NewProduct;

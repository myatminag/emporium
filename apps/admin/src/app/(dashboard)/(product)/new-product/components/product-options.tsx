'use client';

import { useState } from 'react';

import { CircleIcon, ThreeDotsIcon, CustomDialog } from 'packages/ui/src';

type DialogState = {
  'add-options': boolean;
  'manage-variants': boolean;
};

const ProductOptions = () => {
  const [openDialog, setOpenDialog] = useState<DialogState>({
    'add-options': false,
    'manage-variants': false,
  });

  const handleOpenDialog = (dialog: keyof DialogState) => {
    setOpenDialog((prev) => ({
      ...prev,
      [dialog]: !prev[dialog],
    }));
  };

  const handleCloseDialog = (dialog: keyof DialogState) => {
    setOpenDialog((prev) => ({
      ...prev,
      [dialog]: false,
    }));
  };

  return (
    <div className="w-full rounded-sm border bg-white shadow-sm">
      <div className="border-b border-gray-200 p-4">
        <p className="text-heading font-medium">Product Options</p>
        <p className="text-base text-neutral-400">
          Does your product come in different options, like size or color? Add
          them here.
        </p>
      </div>

      <div className="space-x-4 p-4">
        <button
          type="button"
          onClick={() => handleOpenDialog('add-options')}
          className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base text-white disabled:pointer-events-none disabled:opacity-50"
        >
          <CircleIcon className="size-4" />
          Add Options
        </button>
        <CustomDialog
          dialogTitle="Add product option"
          open={openDialog['add-options']}
          onClose={() => handleCloseDialog('add-options')}
        >
          <div className="p-4">
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
                onClick={() => handleCloseDialog('add-options')}
                className="inline-flex items-center gap-x-2 rounded-sm border border-gray-200 bg-white px-4 py-2 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
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
        </CustomDialog>

        <button
          type="button"
          onClick={() => handleOpenDialog('manage-variants')}
          className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base text-white disabled:pointer-events-none disabled:opacity-50"
        >
          <CircleIcon className="size-4" />
          Manage Variants
        </button>
        <CustomDialog
          dialogTitle="Product variants"
          open={openDialog['manage-variants']}
          onClose={() => handleCloseDialog('manage-variants')}
        >
          <div className="pointer-events-auto flex max-h-[55vh] w-full flex-col overflow-hidden">
            <div className="space-y-2 overflow-y-auto p-4">
              <p className="text-base text-neutral-700">
                Based on your product options, these are the different versions
                of your product that customers can buy.
              </p>
              <table className="min-w-full divide-y divide-gray-200">
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
                  {[...Array(4)].map((_, i) => (
                    <tr
                      key={i}
                      className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                    >
                      <td className="size-px whitespace-nowrap align-middle">
                        <div className="block p-4">
                          <p className="text-base text-neutral-700">
                            Black / Medium
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
            <div className="flex items-center justify-end gap-x-2 border-t p-4">
              <button
                type="button"
                onClick={() => handleCloseDialog('manage-variants')}
                className="inline-flex items-center gap-x-2 rounded-sm border border-gray-200 bg-white px-4 py-2 text-base font-medium text-gray-800 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50"
              >
                Cancel
              </button>
              <a
                className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base font-medium text-white disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                Apply
              </a>
            </div>
          </div>
        </CustomDialog>
      </div>
    </div>
  );
};

export default ProductOptions;

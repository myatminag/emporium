'use client';

import { useState } from 'react';

import { Modal, CircleIcon } from 'packages/ui/src';

const AddStaff = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setDialog(true)}
        className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base text-white disabled:pointer-events-none disabled:opacity-50"
      >
        <CircleIcon className="size-4" />
        Add Staff
      </button>

      <Modal
        dialogTitle="Add Staff"
        open={dialog}
        onClose={() => setDialog(false)}
      >
        <div className="space-y-4 p-4 lg:w-96">
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
              placeholder="Enter name"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="mt-2.5 inline-block text-base font-medium text-neutral-700"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
              placeholder="Enter email"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="mt-2.5 inline-block text-base font-medium text-neutral-700"
            >
              Permission
            </label>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <div className="space-x-2">
                <input
                  type="checkbox"
                  className="text-primary shrink-0 cursor-pointer rounded border-gray-400 disabled:pointer-events-none disabled:opacity-50"
                  id="product"
                />
                <label htmlFor="product" className="text-base text-neutral-700">
                  Product
                </label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  className="text-primary shrink-0 cursor-pointer rounded border-gray-400 disabled:pointer-events-none disabled:opacity-50"
                  id="category"
                />
                <label
                  htmlFor="category"
                  className="text-base text-neutral-700"
                >
                  Category
                </label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  className="text-primary shrink-0 cursor-pointer rounded border-gray-400 disabled:pointer-events-none disabled:opacity-50"
                  id="brand"
                />
                <label htmlFor="brand" className="text-base text-neutral-700">
                  Brand
                </label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  className="text-primary shrink-0 cursor-pointer rounded border-gray-400 disabled:pointer-events-none disabled:opacity-50"
                  id="marketing"
                />
                <label
                  htmlFor="marketing"
                  className="text-base text-neutral-700"
                >
                  Marketing
                </label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  className="text-primary shrink-0 cursor-pointer rounded border-gray-400 disabled:pointer-events-none disabled:opacity-50"
                  id="order"
                />
                <label htmlFor="order" className="text-base text-neutral-700">
                  Orders
                </label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  className="text-primary shrink-0 cursor-pointer rounded border-gray-400 disabled:pointer-events-none disabled:opacity-50"
                  id="member-point"
                />
                <label
                  htmlFor="member-point"
                  className="text-base text-neutral-700"
                >
                  Member Point
                </label>
              </div>
              <div className="space-x-2">
                <input
                  type="checkbox"
                  className="text-primary shrink-0 cursor-pointer rounded border-gray-400 disabled:pointer-events-none disabled:opacity-50"
                  id="customer"
                />
                <label
                  htmlFor="customer"
                  className="text-base text-neutral-700"
                >
                  Customer
                </label>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => setDialog(false)}
              className="bg-primary-100 text-primary w-full rounded-sm p-2 text-base"
            >
              Cancel
            </button>
            <button className="bg-primary w-full rounded-sm p-2 text-base text-white">
              Confirm
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AddStaff;

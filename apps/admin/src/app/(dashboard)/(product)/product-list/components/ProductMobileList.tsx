import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';

import { PopularIcon, SuccessIcon } from 'packages/ui/src';

const ProductMobileList = () => {
  return (
    <div className="block space-y-3 lg:hidden">
      {[...Array(5)].map((i) => (
        <Disclosure
          key={i}
          as="div"
          className="flex items-start gap-x-4 rounded-sm border bg-white p-4 shadow-sm"
        >
          <button type="button">
            <PopularIcon className="size-5 flex-shrink-0 text-neutral-500" />
          </button>
          <div className="w-full">
            <DisclosureButton className="group flex w-full items-center gap-x-4">
              <div className="inline-flex w-full items-start justify-between gap-x-4">
                <p className="text-base font-semibold uppercase tracking-wide text-neutral-700">
                  Product
                </p>
                <div className="flex items-end gap-x-4">
                  <div>
                    <p className="block text-right text-base text-neutral-700">
                      iPhone 15 Pro Max (eSim + Physical Sim)
                    </p>
                    <p className="text-right text-sm text-neutral-400">
                      2 Variants
                    </p>
                  </div>
                </div>
              </div>
            </DisclosureButton>
            <DisclosurePanel className="mt-4 space-y-4">
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold uppercase tracking-wide text-neutral-700">
                  Category
                </p>
                <p className="block text-base text-neutral-700">fashion</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold uppercase tracking-wide text-neutral-700">
                  SKU
                </p>
                <p className="block text-base text-neutral-700">2384741241</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold uppercase tracking-wide text-neutral-700">
                  Status
                </p>
                <p className="text-success inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1 text-base font-medium">
                  <SuccessIcon className="size-4" />
                  Publish
                </p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold uppercase tracking-wide text-neutral-700">
                  Stock
                </p>
                <p className="block text-base text-neutral-700">23</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold uppercase tracking-wide text-neutral-700">
                  Price
                </p>
                <p className="block text-base text-neutral-700">34,000 Ks</p>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="text-base font-semibold uppercase tracking-wide text-neutral-700">
                  Actions
                </p>
                <div className="flex items-center gap-x-3">
                  <p className="block text-base text-neutral-700 underline">
                    Publish
                  </p>
                  <p className="block text-base text-neutral-700 underline">
                    Edit
                  </p>
                  <p className="text-primary block text-base underline">
                    Delete
                  </p>
                </div>
              </div>
            </DisclosurePanel>
          </div>
        </Disclosure>
      ))}
    </div>
  );
};

export default ProductMobileList;

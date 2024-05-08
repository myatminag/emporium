'use client';

import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react';

import ProductWebList from './ProductWebList';
import ProductMobileList from './ProductMobileList';
import {
  FilterIcon,
  PopularIcon,
  SearchInput,
  Pagination,
} from 'packages/ui/src';
import { cn } from 'packages/lib/src';

const Status = [
  { id: 1, name: 'All' },
  { id: 2, name: 'Publish' },
  { id: 3, name: 'Unpublish' },
];

const ProductTable = () => {
  return (
    <>
      <p className="text-heading mb-4 font-medium">Product Lists (1,105)</p>

      <div className="mb-4 flex flex-col justify-between gap-y-2 lg:flex-row lg:items-center">
        <SearchInput placeholder="Search products..." className="w-full" />
        <div className="flex w-full items-center gap-x-2 lg:w-72">
          <button
            type="button"
            className="inline-flex w-full items-center justify-between gap-x-2 rounded-sm border border-gray-200 bg-white px-3 py-2 text-base text-neutral-700 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          >
            View Popular
            <PopularIcon className="size-3.5 flex-shrink-0" />
          </button>
          <Menu>
            <MenuButton className="inline-flex w-full items-center justify-between gap-x-2 rounded-sm border border-gray-200 bg-white px-3 py-2 text-base text-neutral-700 shadow-sm hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
              Status
              <FilterIcon className="size-4 fill-white/60" />
            </MenuButton>
            <Transition
              enter="transition ease-out duration-75"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <MenuItems
                anchor="bottom end"
                className="mt-2.5 min-w-40 origin-top-right divide-y divide-gray-200 rounded-sm border bg-white shadow-md [--anchor-gap:var(--spacing-1)] focus:outline-none"
              >
                {Status.map((status) => (
                  <MenuItem as="div" key={status.id} className="p-1">
                    {({ focus }) => (
                      <p
                        className={cn(
                          'cursor-pointer rounded-sm px-3 py-2 text-base text-neutral-700 dark:text-gray-200',
                          {
                            'bg-primary text-white': focus,
                          },
                        )}
                      >
                        {status.name}
                      </p>
                    )}
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </Menu>
        </div>
      </div>

      <ProductMobileList />

      <ProductWebList />

      <Pagination />
    </>
  );
};

export default ProductTable;

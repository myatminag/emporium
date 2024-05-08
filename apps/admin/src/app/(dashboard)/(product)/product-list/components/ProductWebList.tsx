import Link from 'next/link';
import Image from 'next/image';
import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from '@headlessui/react';

import {
  SuccessIcon,
  ThreeDotsIcon,
  PopularIcon,
  TrashIcon,
  EditIcon,
} from 'packages/ui/src';

const ProductWebList = () => {
  return (
    <div className="hidden min-w-full overflow-hidden rounded-sm border border-gray-200 bg-white align-middle shadow-sm lg:block">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-slate-800">
          <tr>
            <th scope="col" className="px-4 py-3 text-start"></th>
            <th scope="col" className="px-4 py-3 text-start">
              <span className="text-base uppercase tracking-wide text-neutral-700">
                Product
              </span>
            </th>
            <th scope="col" className="px-4 py-3 text-start">
              <span className="text-base uppercase tracking-wide text-neutral-700">
                Category
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
                  Status
                </span>
              </div>
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
          {[...Array(10)].map((_, i) => (
            <tr
              key={i}
              className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              <td className="size-px whitespace-nowrap align-middle">
                <div className="flex items-center gap-x-3 p-4">
                  <button type="button">
                    <PopularIcon className="size-5 flex-shrink-0 text-neutral-500" />
                  </button>
                </div>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <Link className="block p-4" href="#">
                  <div className="flex items-center gap-x-4">
                    <Image
                      width={100}
                      height={100}
                      className="size-[44px] flex-shrink-0 rounded-sm"
                      src="https://images.unsplash.com/photo-1594032194509-0056023973b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                      alt="Image Description"
                    />
                    <div>
                      <p className="block text-base text-neutral-700">
                        Calvin Klein T-shirts
                      </p>
                      <p className="text-sm text-neutral-400">2 Variants</p>
                    </div>
                  </div>
                </Link>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <Link className="block p-4" href="#">
                  <p className="text-base text-neutral-700">Fashion</p>
                </Link>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <Link className="block p-4" href="#">
                  <p className="text-base text-neutral-700">2384741241</p>
                </Link>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <Link className="block p-4" href="#">
                  <span className="text-success inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1 text-base font-medium">
                    <SuccessIcon className="size-4" />
                    Publish
                  </span>
                </Link>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <Link className="block p-4" href="#">
                  <p className="text-base text-neutral-700">23</p>
                </Link>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <Link className="block p-4" href="#">
                  <p className="text-base text-neutral-700">34,000 Ks</p>
                </Link>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <div className="flex items-center gap-x-3 p-4">
                  <button className="">
                    <EditIcon className="size-4 text-blue-700" />
                  </button>
                  <button className="">
                    <TrashIcon className="text-primary size-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductWebList;

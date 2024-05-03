import Link from 'next/link';

import { SuccessIcon } from 'packages/ui/src';

const CustomerOrders = () => {
  return (
    <div className="rounded-sm border bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Latest Orders
      </p>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-slate-800">
          <tr>
            <th scope="col" className="px-4 py-3 text-start"></th>
            <th scope="col" className="px-4 py-3 text-start">
              <span className="text-base uppercase tracking-wide text-neutral-700">
                Order ID
              </span>
            </th>
            <th scope="col" className="px-4 py-3 text-start">
              <span className="text-base uppercase tracking-wide text-neutral-700">
                Customer Name
              </span>
            </th>
            <th scope="col" className="px-4 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-base uppercase tracking-wide text-neutral-700">
                  Date
                </span>
              </div>
            </th>
            <th scope="col" className="px-4 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-base uppercase tracking-wide text-neutral-700">
                  Order Status
                </span>
              </div>
            </th>
            <th scope="col" className="px-4 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-base uppercase tracking-wide text-neutral-700">
                  Payment Status
                </span>
              </div>
            </th>
            <th scope="col" className="px-4 py-3 text-start">
              <div className="flex items-center gap-x-2">
                <span className="text-base uppercase tracking-wide text-neutral-700">
                  Items
                </span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {[...Array(5)].map((_, i) => (
            <tr
              key={i}
              className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
            >
              <td className="size-px whitespace-nowrap align-middle">
                <div className="flex p-4">
                  <input
                    type="checkbox"
                    className="text-primary shrink-0 cursor-pointer rounded border-gray-400 disabled:pointer-events-none disabled:opacity-50"
                    id="hs-default-checkbox"
                  />
                </div>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <Link className="block p-4" href="/order-list/wefg-12tg">
                  <p className="text-primary text-base font-medium hover:underline">
                    #wefg-12tg
                  </p>
                </Link>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <div className="block p-4">
                  <p className="text-base text-neutral-700">
                    Mathew Gustaffson
                  </p>
                </div>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <div className="block p-4">
                  <p className="text-base text-neutral-700">10th Mar 2024</p>
                </div>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <div className="block p-4">
                  <span className="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1 text-base font-medium text-[#1EB564]">
                    <SuccessIcon className="size-4" />
                    Confirmed
                  </span>
                </div>
              </td>
              <td className="w-36 max-w-36 whitespace-nowrap align-middle">
                <div className="block p-4">
                  <span className="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1 text-base font-medium text-[#1EB564]">
                    <SuccessIcon className="size-4" />
                    Success
                  </span>
                </div>
              </td>
              <td className="size-px whitespace-nowrap align-middle">
                <div className="block p-4">
                  <p className="text-base text-neutral-700">4</p>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex items-center justify-center border-t py-4">
        <Link href="/order-list" className="text-primary text-base font-medium">
          View all orders
        </Link>
      </div>
    </div>
  );
};

export default CustomerOrders;

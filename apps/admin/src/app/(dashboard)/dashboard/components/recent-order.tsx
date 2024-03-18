import Image from 'next/image';
import Link from 'next/link';

import { ChevronIcon } from '@ecommerce/ui';

const RecentOrder = () => {
  return (
    <div className="mx-auto max-w-[85rem] overflow-x-auto lg:max-w-full">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
          <div className="flex items-center justify-between border-b border-gray-200 p-4">
            <p className="text-heading font-medium">Recent Orders</p>
            <Link href="#" className="flex items-center gap-x-1.5">
              <p className="text-base">View All</p>
              <ChevronIcon direction="right" />
            </Link>
          </div>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th scope="col" className="px-4 py-3 text-start">
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Product
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Customer
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
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {[...Array(5)].map((_, i) => (
                <tr
                  key={i}
                  className="bg-white hover:bg-gray-50 dark:bg-slate-900 dark:hover:bg-slate-800"
                >
                  <td className="size-px whitespace-nowrap align-top">
                    <Link className="block space-y-3 p-4" href="#">
                      <div className="flex items-center gap-x-4">
                        <Image
                          className="size-[38px] flex-shrink-0 rounded-lg"
                          src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                          alt="Image Description"
                          width={150}
                          height={150}
                        />
                        <div>
                          <span className="block text-base text-neutral-700">
                            Lorem ipsum dolor,
                          </span>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-top">
                    <Link className="block p-4" href="#">
                      <div className="flex items-center gap-x-3">
                        <Image
                          className="inline-block size-[38px] rounded-full"
                          src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                          alt="Image Description"
                          width={150}
                          height={150}
                        />
                        <div className="grow">
                          <span className="block text-base font-semibold text-neutral-700">
                            Christina Bersh
                          </span>
                          <span className="block text-base text-gray-500">
                            christina@site.com
                          </span>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="h-px w-28 min-w-28 whitespace-nowrap align-top">
                    <Link className="block p-4" href="#">
                      <p className="text-base text-neutral-700">
                        10th Mar 2024
                      </p>
                    </Link>
                  </td>
                  <td className="h-px w-28 min-w-28 whitespace-nowrap align-top">
                    <Link className="block p-4" href="#">
                      <span className="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1 text-base font-medium text-[#1EB564]">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        Confirmed
                      </span>
                    </Link>
                  </td>
                  <td className="h-px w-40 min-w-40 whitespace-nowrap align-top">
                    <Link className="block p-4" href="#">
                      <span className="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1 text-base font-medium text-[#1EB564]">
                        <svg
                          className="size-4"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                        </svg>
                        Success
                      </span>
                    </Link>
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

export default RecentOrder;

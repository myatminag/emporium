import Link from 'next/link';

import { ThreeDotsIcon } from '@ecommerce/ui';

const RoleList = () => {
  return (
    <div className="mx-auto max-w-[85rem] overflow-x-auto lg:max-w-full">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th scope="col" className="px-4 py-3 text-start"></th>
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
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Role
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-base uppercase tracking-wide text-neutral-700">
                      Joined On
                    </span>
                  </div>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <p className="text-base uppercase tracking-wide text-neutral-700">
                      Active
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
                      <p className="text-base text-neutral-700">Super Admin</p>
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <Link className="block p-4" href="#">
                      <p className="text-base text-neutral-700">May 15, 2024</p>
                    </Link>
                  </td>
                  <td className="size-px whitespace-nowrap align-middle">
                    <div className="ml-4 flex items-center">
                      <input
                        type="checkbox"
                        id="hs-small-switch"
                        className="focus:ring-primary focus:checked:border-primary checked:border-primary checked:text-primary relative h-6  w-11 cursor-pointer rounded-full border-transparent bg-gray-100 p-px text-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-5 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:ring-0
before:transition before:duration-200 before:ease-in-out checked:bg-none checked:before:translate-x-full checked:before:bg-red-200 disabled:pointer-events-none disabled:opacity-50"
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

export default RoleList;

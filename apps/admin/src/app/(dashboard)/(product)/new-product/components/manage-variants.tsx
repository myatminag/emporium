'use client';

const ManageVariants = () => {
  return (
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
                  <p className="text-base text-neutral-700">Black, Large</p>
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
  );
};

export default ManageVariants;

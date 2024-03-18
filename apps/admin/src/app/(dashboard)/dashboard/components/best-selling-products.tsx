import Image from 'next/image';

const BestSellingProducts = () => {
  return (
    <div className="mx-auto w-full overflow-x-auto lg:col-span-2">
      <div className="inline-block min-w-full align-middle">
        <div className="overflow-hidden rounded-sm border border-gray-200 bg-white shadow-sm">
          <p className="text-heading border-b border-gray-200 p-4 font-medium">
            Best Selling Products
          </p>
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th scope="col" className="px-4 py-3 text-start">
                  <span className="text-base uppercase tracking-wide text-neutral-700">
                    Product
                  </span>
                </th>
                <th scope="col" className="px-4 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-base uppercase tracking-wide text-neutral-700">
                      Total Orders
                    </span>
                  </div>
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
                      Price
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
                    <a className="block space-y-3 p-4" href="#">
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
                    </a>
                  </td>
                  <td className="h-px w-28 min-w-28 whitespace-nowrap align-top">
                    <a className="block p-4" href="#">
                      <p className="text-base text-neutral-700">563 orders</p>
                    </a>
                  </td>
                  <td className="h-px w-28 min-w-28 whitespace-nowrap align-top">
                    <a className="block p-4" href="#">
                      <div className="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1">
                        <div className="inline-flex items-center">
                          <span className="me-2 inline-block size-2 rounded-full bg-[#1EB564]"></span>
                          <p className="text-base font-medium text-[#1EB564]">
                            Stock
                          </p>
                        </div>
                      </div>
                    </a>
                  </td>
                  <td className="size-px whitespace-nowrap align-top">
                    <a
                      className="block p-4 text-base text-neutral-700"
                      href="#"
                    >
                      123,000 MMK
                    </a>
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

export default BestSellingProducts;

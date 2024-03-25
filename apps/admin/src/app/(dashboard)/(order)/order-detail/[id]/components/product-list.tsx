import Image from 'next/image';

const ProductList = () => {
  return (
    <div className="w-full rounded-sm border bg-white shadow-sm">
      <div className="space-y-1 border-b border-gray-200 p-4">
        <p className="text-heading font-medium">#wefg-12tg</p>
        <p className="text-base text-neutral-500">
          Order placed on 17 Aug, 2023, 5:48 am
        </p>
      </div>
      <ol className="flex items-center justify-center py-6">
        <li className="relative flex flex-col items-start">
          <div className="flex items-center">
            <div className="bg-primary z-10 flex size-10 shrink-0 items-center justify-center rounded-full">
              <svg
                className="size-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden h-0.5 w-24 bg-gray-200 sm:flex dark:bg-gray-700" />
          </div>
          <h3 className="-ml-1.5 mt-3 text-center text-base font-medium text-neutral-700">
            Ordered
          </h3>
        </li>
        <li className="relative flex flex-col items-start">
          <div className="flex items-center">
            <div className="bg-primary z-10 flex size-10 shrink-0 items-center justify-center rounded-full">
              <svg
                className="size-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden h-0.5 w-24 bg-gray-200 sm:flex dark:bg-gray-700" />
          </div>
          <h3 className="-ml-1 mt-3 text-center text-base font-medium text-neutral-700">
            Packed
          </h3>
        </li>
        <li className="relative flex flex-col items-start">
          <div className="flex items-center">
            <div className="bg-primary z-10 flex size-10 shrink-0 items-center justify-center rounded-full">
              <svg
                className="size-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
            <div className="hidden h-0.5 w-24 bg-gray-200 sm:flex" />
          </div>
          <h3 className="-ml-2 mt-3 text-center text-base font-medium text-neutral-700">
            Delivering
          </h3>
        </li>
        <li className="relative flex flex-col items-start">
          <div className="flex items-center">
            <div className="bg-primary z-10 flex size-10 shrink-0 items-center justify-center rounded-full">
              <svg
                className="size-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </div>
          </div>
          <h3 className="-ml-2 mt-3 text-center text-base font-medium text-neutral-700">
            Delivered
          </h3>
        </li>
      </ol>
      <div className="space-y-4 p-4">
        <p className="text-base text-neutral-500">Items - 4</p>
        {[...Array(4)].map((_, idx) => (
          <>
            <div key={idx} className="flex items-center gap-x-4">
              <Image
                className="size-20 flex-shrink-0 rounded-sm"
                src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                alt="Image Description"
                width={150}
                height={150}
              />
              <div className="flex-1 space-y-1">
                <p className="block text-base text-neutral-700">
                  Nike Air Max INTRLK for women. International size an..
                </p>
                <p className="block text-base text-neutral-700">
                  Variants: Black, M
                </p>
                <div className="flex items-center justify-between">
                  <p className="block text-base text-neutral-700">
                    Quantity: 1x
                  </p>
                  <p className="text-primary block text-base font-medium">
                    123,000 Ks
                  </p>
                </div>
              </div>
            </div>
            {idx !== 3 && <hr />}
          </>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

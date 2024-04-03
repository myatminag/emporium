'use client';

const Pricing = () => {
  return (
    <div className="w-full rounded-sm border bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Pricing
      </p>
      <div className="space-y-3 px-4 pb-4">
        <div className="space-y-2">
          <label
            htmlFor="product-name"
            className="mt-2.5 inline-block text-base font-medium text-neutral-700"
          >
            Pricing
          </label>
          <input
            id="product-name"
            type="text"
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
            placeholder="Product name"
          />
        </div>
        <div className="flex items-center justify-between space-y-2">
          <p className="mt-2.5 text-base">On Sale</p>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="hs-small-switch"
              className="focus:ring-primary focus:checked:border-primary checked:border-primary checked:text-primary relative h-6 w-11 cursor-pointer rounded-full border-transparent bg-gray-100 p-px text-transparent transition-colors duration-200 ease-in-out before:inline-block before:size-5 before:translate-x-0 before:transform before:rounded-full before:bg-white before:shadow before:ring-0
before:transition before:duration-200 before:ease-in-out checked:bg-none checked:before:translate-x-full checked:before:bg-red-200 disabled:pointer-events-none disabled:opacity-50"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="space-y-2">
            <label
              htmlFor="product-name"
              className="mt-2.5 inline-block text-base font-medium text-neutral-700"
            >
              Discount
            </label>
            <input
              id="product-name"
              type="text"
              className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
              placeholder="0"
            />
          </div>
          <div className="space-y-2">
            <label
              htmlFor="product-name"
              className="mt-2.5 inline-block text-base font-medium text-neutral-700"
            >
              Sale Price
            </label>
            <input
              id="product-name"
              type="text"
              className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
              placeholder="Sale Price"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="product-name"
            className="mt-2.5 inline-block text-base font-medium text-neutral-700"
          >
            Cost of goods
          </label>
          <input
            id="product-name"
            type="text"
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
            placeholder="0"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="product-name"
            className="mt-2.5 inline-block text-base font-medium text-neutral-700"
          >
            Profit
          </label>
          <input
            id="product-name"
            type="text"
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
            placeholder="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;

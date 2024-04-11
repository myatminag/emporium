import { ChevronIcon } from '@ecommerce/ui';
import CustomerInfo from './components/customer-info';
import CustomerOrders from './components/customer-orders';
import CustomerStats from './components/customer-stats';

const CustomerDetailPage = () => {
  return (
    <main className="space-y-5 p-4 lg:p-6">
      <ol className="flex items-center whitespace-nowrap">
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-base text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500"
            href="#"
          >
            Dashboard
          </a>
          <ChevronIcon
            direction="right"
            className="mx-2 size-5 flex-shrink-0 overflow-visible text-gray-500 dark:text-neutral-600"
          />
        </li>
        <li className="inline-flex items-center">
          <a
            className="flex items-center text-base text-gray-500 hover:text-blue-600 focus:text-blue-600 focus:outline-none dark:focus:text-blue-500"
            href="#"
          >
            Customers
            <ChevronIcon
              direction="right"
              className="mx-2 size-5 flex-shrink-0 overflow-visible text-gray-500 dark:text-neutral-600"
            />
          </a>
        </li>
        <li
          className="inline-flex items-center truncate text-base font-medium text-neutral-700 dark:text-gray-200"
          aria-current="page"
        >
          Adam Taylor
        </li>
      </ol>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
        <div className="col-span-1 space-y-4 lg:col-span-1">
          <CustomerInfo />
        </div>
        <div className="col-span-3 space-y-4">
          <CustomerStats />
          <CustomerOrders />
        </div>
      </div>
    </main>
  );
};

export default CustomerDetailPage;

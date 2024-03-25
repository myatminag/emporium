import Image from 'next/image';

import ProductList from './components/product-list';
import { MailIcon, MobileIcon, LocationIcon, SuccessIcon } from '@ecommerce/ui';

const OrderDetailPage = () => {
  return (
    <main className="space-y-4 px-4 py-8 lg:px-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="col-span-1 space-y-4 lg:col-span-2">
          <ProductList />
          <div className="w-full rounded-sm border bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Payment Record
            </p>
            <div className="space-y-2 p-4">
              <div className="flex items-center justify-between">
                <p className="text-base text-neutral-700">Date:</p>
                <p className="text-base font-medium text-neutral-700">
                  1st Mar 2023 at 06:00 PM
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base text-neutral-700">Status:</p>
                <span className="inline-flex items-center gap-x-1 rounded-full bg-teal-100 px-2 py-1 text-base font-medium text-[#1EB564]">
                  <SuccessIcon className="size-4" />
                  Success
                </span>
              </div>
            </div>
          </div>
          <div className="w-full rounded-sm border bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Payment Summary
            </p>
            <div className="space-y-2 p-4">
              <div className="flex items-center justify-between">
                <p className="text-base text-neutral-700">Est Delivery Time:</p>
                <p className="text-base font-medium text-neutral-700">
                  (1 - 2) Days
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base text-neutral-700">Subtotal:</p>
                <p className="text-base font-medium text-neutral-700">
                  345,000 Ks
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base text-neutral-700">Delivery Fee:</p>
                <p className="text-base font-medium text-neutral-700">
                  3,000 Ks
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-base text-neutral-700">Est Tax:</p>
                <p className="text-base font-medium text-neutral-700">500 Ks</p>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <p className="text-base text-neutral-700">Total:</p>
                <p className="text-primary text-md font-medium">380,000 Ks</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 space-y-4 lg:sticky lg:top-10">
          <div className="w-full rounded-sm border bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Customer Info
            </p>
            <div className="space-y-4 p-4">
              <div className="flex items-center gap-x-4">
                <Image
                  className="size-[48px] flex-shrink-0 rounded-sm"
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
              <hr />
              <div className="space-y-2">
                <p className="text-md font-medium">Contact Info</p>
                <div className="flex items-center gap-x-2">
                  <MailIcon className="size-5 text-neutral-700" />
                  <p className="text-base text-neutral-700">
                    example@gmail.com
                  </p>
                </div>
                <div className="flex items-center gap-x-2">
                  <MobileIcon className="size-5 text-neutral-700" />
                  <p className="text-base text-neutral-700">
                    +1 (609) 972-22-22
                  </p>
                </div>
              </div>
              <hr />
              <div className="space-y-2">
                <p className="text-md font-medium">Delivery Address</p>
                <div className="flex items-start gap-x-2">
                  <LocationIcon className="text-primary mt-0.5 size-4" />
                  <p className="text-base text-neutral-700">
                    45 Roker Terrace Latheronwheel KW5 8NW, London, UK
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full rounded-sm border bg-white shadow-sm">
            <p className="text-heading border-b border-gray-200 p-4 font-medium">
              Delivery Service
            </p>
            <div className="flex items-start gap-x-2 p-4">
              <Image
                className="size-[48px] flex-shrink-0 rounded-sm"
                src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
                alt="Image Description"
                width={150}
                height={150}
              />
              <div>
                <p className="text-base font-medium text-neutral-700">
                  Lorem ipsum dolor,
                </p>
                <p className="text-base text-neutral-700">09123456789</p>
                <p className="text-base text-neutral-700">
                  Est Delivery Day (2 - 4 Days)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default OrderDetailPage;

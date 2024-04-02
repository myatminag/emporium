'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@ecommerce/lib';
import {
  DashboardIcon,
  ChevronIcon,
  ProductsIcon,
  LogoutIcon,
  CustomerIcon,
  BannerIcon,
  BrandIcon,
  LoyaltyIcon,
  PermissionIcon,
  DashboardOrderIcon,
  DashboardSettingIcon,
} from '@ecommerce/ui';

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside
      id="application-sidebar"
      className="hs-overlay hs-overlay-open:translate-x-0 fixed bottom-0 start-0 top-0 z-[30] hidden w-64 -translate-x-full transform overflow-y-auto border-e border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 lg:bottom-0 lg:end-auto lg:block lg:translate-x-0 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:bg-gray-100 dark:[&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar]:w-2"
    >
      <p className="flex-none px-9 text-xl font-semibold">Emporium</p>
      <nav className="hs-accordion-group flex w-full flex-col flex-wrap p-6">
        <ul className="space-y-3">
          <li>
            <Link
              className={cn(
                'flex items-center gap-x-3.5 rounded-sm bg-gray-100 px-2.5 py-2 text-base text-neutral-700',
                {
                  'text-primary': pathname.startsWith('/dashboard'),
                },
              )}
              href="/dashboard"
            >
              <DashboardIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary': pathname.startsWith('/dashboard'),
                })}
              />
              Dashboard
            </Link>
          </li>

          <li className="hs-accordion" id="account-accordion">
            <button
              type="button"
              className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white flex w-full items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-start text-base text-neutral-700 hover:bg-gray-100"
            >
              <ProductsIcon className="hs-accordion-active:text-primary size-5 flex-shrink-0" />
              Products
              <ChevronIcon
                className="hs-accordion-active:rotate-180 ms-auto size-5"
                direction="down"
              />
            </button>
            <div
              id="account-accordion-sub"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            >
              <ul className="ps-2 pt-2">
                <li>
                  <Link
                    className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/new-product"
                  >
                    New Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/product-list"
                  >
                    Product Lists
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="hs-accordion" id="account-accordion">
            <button
              type="button"
              className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white flex w-full items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-start text-base text-neutral-700 hover:bg-gray-100"
            >
              <DashboardOrderIcon className="hs-accordion-active:text-primary size-5 flex-shrink-0" />
              Categories
              <ChevronIcon
                className="hs-accordion-active:rotate-180 ms-auto size-5"
                direction="down"
              />
            </button>
            <div
              id="account-accordion-sub"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            >
              <ul className="ps-2 pt-2">
                <li>
                  <a
                    className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 1
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 2
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="#"
                  >
                    Link 3
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <Link
              className={cn(
                'flex items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100',
              )}
              href="/brand"
            >
              <BrandIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700')}
              />
              Brands
            </Link>
          </li>

          <li>
            <div
              className={cn(
                'flex items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100',
              )}
            >
              <BannerIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700')}
              />
              Banner & Ads
            </div>
          </li>

          <li className="hs-accordion" id="account-accordion">
            <button
              type="button"
              className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:hover:bg-transparent dark:hs-accordion-active:text-white flex w-full items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-start text-base text-neutral-700 hover:bg-gray-100"
            >
              <DashboardOrderIcon className="hs-accordion-active:text-primary size-5 flex-shrink-0" />
              Orders
              <ChevronIcon
                className="hs-accordion-active:rotate-180 ms-auto size-5"
                direction="down"
              />
            </button>
            <div
              id="account-accordion-sub"
              className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
            >
              <ul className="ps-2 pt-2">
                <li>
                  <Link
                    className="flex items-center gap-x-3.5 rounded-lg px-2.5 py-2 text-sm text-slate-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-slate-400 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    href="/order-list"
                  >
                    Order List
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <div
              className={cn(
                'flex items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100',
              )}
            >
              <LoyaltyIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700')}
              />
              Member Point
            </div>
          </li>

          <li>
            <div
              className={cn(
                'flex items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100',
              )}
            >
              <CustomerIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700')}
              />
              Customers
            </div>
          </li>

          <hr />

          <li>
            <div
              className={cn(
                'flex items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100',
              )}
            >
              <PermissionIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700')}
              />
              Role & Permission
            </div>
          </li>

          <li>
            <Link
              className={cn(
                'flex items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100',
                {
                  'text-primary': pathname.startsWith('/setting'),
                },
              )}
              href="/setting"
            >
              <DashboardSettingIcon
                className={cn('size-5 flex-shrink-0 text-neutral-700', {
                  'text-primary': pathname.startsWith('/setting'),
                })}
              />
              Settings
            </Link>
          </li>

          <li>
            <div className="flex items-center gap-x-3.5 rounded-sm px-2.5 py-2 text-base text-neutral-700 hover:bg-gray-100">
              <LogoutIcon className="size-5 flex-shrink-0 text-neutral-700" />
              Logout
            </div>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

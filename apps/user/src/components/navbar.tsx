'use client';

import Link from 'next/link';

import {
  CartIcon,
  OrderIcon,
  MainLogo,
  WishListIcon,
  UserIcon,
  HamburgerMenuIcon,
} from 'packages/ui/src';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-x-3">
          <HamburgerMenuIcon className="block lg:hidden" />
          <div className="flex items-center gap-x-1.5">
            <MainLogo className="hidden lg:block" />
            <h3 className="text-primary text-xl font-medium">Emporium</h3>
          </div>
        </div>

        <ul className="hidden lg:flex lg:items-center lg:gap-x-6">
          <li>
            <Link href="/cart">
              <CartIcon className="text-[#111827]" />
            </Link>
          </li>
          <li>
            <OrderIcon color="#111827" />
          </li>
          <li>
            <WishListIcon className="text-secondary-900 h-6 w-6" />
          </li>
          <li>
            <UserIcon className="text-secondary-900 h-6 w-6" />
          </li>
        </ul>

        <div className="block lg:hidden">
          <CartIcon />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

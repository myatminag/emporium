'use client';

import { CartIcon } from 'packages/ui/src';
import { UserIcon } from 'packages/ui/src';
import { WishListIcon } from 'packages/ui/src';
import { OrderIcon } from 'packages/ui/src';
import { MainLogo } from 'packages/ui/src';

const Navbar = () => {
  return (
    <nav className="container justify-between items-center flex h-20">
      <div className="flex items-center gap-x-3">
        <div className="block lg:hidden">Burger</div>
        <div className="flex items-center gap-x-1.5">
          <MainLogo />
          <h3 className="text-[#EB001B] text-xl font-semibold">Emporium</h3>
        </div>
      </div>

      <ul className="hidden lg:flex lg:items-center lg:gap-x-5">
        <li>
          <CartIcon color="#111827" />
        </li>
        <li>
          <OrderIcon color="#111827" />
        </li>
        <li>
          <WishListIcon color="#111827" />
        </li>
        <li>
          <UserIcon color="#111827" />
        </li>
      </ul>

      <div className="block lg:hidden">
        <CartIcon />
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { SearchIcon } from '@ecommerce/ui';

const BrandSearch = () => {
  return (
    <div className="relative h-10 w-full overflow-hidden rounded-lg border-b md:w-64 md:border">
      <input
        placeholder="Search by brand name"
        className="h-full w-full border-none pl-2 pr-4 focus:outline-none md:w-full"
      />
      <SearchIcon className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer" />
    </div>
  );
};

export default BrandSearch;

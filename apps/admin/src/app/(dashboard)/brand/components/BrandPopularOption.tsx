import React from 'react';
import { StarIcon } from '@ecommerce/ui';

const BrandPopularOption = () => {
  return (
    <button className="bg-secondary-500/10 text-secondary-500 flex items-center justify-center gap-1 rounded-lg px-2 py-2 md:px-6">
      <StarIcon className="h-5 w-5" />
      <span className="mt-.5 md:text-md text-sm font-medium">
        View Popular Brands
      </span>
    </button>
  );
};

export default BrandPopularOption;

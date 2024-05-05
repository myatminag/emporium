import React from 'react';

import { SortIcon } from 'packages/ui/src';

const sortLists = [
  { id: 1, title: 'Sorting A to Z' },
  { id: 2, title: 'Sorting Z to A' },
  { id: 3, title: 'Most Recent' },
  { id: 4, title: 'Most Oldest' },
  { id: 5, title: 'Product Count High to Low' },
  { id: 6, title: 'Product Count Low to High' },
];
const BrandSortOptions = () => {
  return (
    <h3 className="hover:bg-secondary-400 inline-flex cursor-pointer items-center gap-2 rounded-lg p-2 transition-colors duration-300">
      Newest First
      <SortIcon className="h-4 w-4 text-gray-400" />
    </h3>
  );
};

export default BrandSortOptions;

import Image from 'next/image';

import { ChevronIcon } from '@ecommerce/ui';
import Category from '../../../assets/dummy/category.png';

const Categories = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center justify-between gap-x-3">
        <p className="text-lg font-medium">Categories</p>
        <div className="flex items-center gap-x-1.5">
          <p className="text-base">View All</p>
          <ChevronIcon className="text-primary" direction="right" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex items-center justify-evenly rounded border bg-white p-3"
          >
            <p className="text-md">
              Smart <br /> Waches
            </p>
            <Image
              src={Category}
              alt="category"
              width={500}
              height={500}
              className="h-full w-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

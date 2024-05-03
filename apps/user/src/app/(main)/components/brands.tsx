'use client';

import Image from 'next/image';

import { ChevronIcon } from 'packages/ui/src';
import Brand from '../../../assets/dummy/brand.png';

const Brands = () => {
  return (
    <section className="flex flex-col gap-y-3">
      <div className="flex items-center justify-between gap-x-3">
        <p className="text-lg font-medium">Promotion</p>
        <div className="flex items-center gap-x-1.5">
          <p className="text-base">View All</p>
          <ChevronIcon className="text-primary" direction="right" />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex flex-col items-center gap-y-3">
            <Image
              src={Brand}
              alt="brand"
              width={300}
              height={300}
              className="w-20 rounded-full"
            />
            <p>Brand Name</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Brands;

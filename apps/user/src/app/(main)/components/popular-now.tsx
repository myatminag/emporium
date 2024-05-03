import Image from 'next/image';

import { ChevronIcon } from 'packages/ui/src';
import ProductImg from '../../../assets/image 34.png';

const PopularNow = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center justify-between gap-x-3">
        <p className="text-lg font-medium">PopularNow</p>
        <div className="flex items-center gap-x-1.5">
          <p className="text-base">View All</p>
          <ChevronIcon className="text-primary" direction="right" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded border bg-white outline-none">
            <div className="bg-neutral px-3 py-5">
              <Image
                src={ProductImg}
                alt="product-image"
                width={500}
                height={500}
                className="h-full w-full"
              />
            </div>
            <div className="space-y-2 p-3">
              <p className="line-clamp-2 text-base text-neutral-700">
                GoPro HERO6 4K Action Camera - Black
              </p>
              <p className="text-base font-medium tracking-wide">780,000 MMK</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularNow;

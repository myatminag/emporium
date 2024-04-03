'use client';
import React, { useState } from 'react';
import { Button, PopularIcon, ReorderIcon, Dialog } from '@ecommerce/ui';
import { HSOverlay } from 'preline/preline';

import { brands } from '../../../../data/dummy';
import Image from 'next/image';
import { Reorder } from 'framer-motion';

const BrandPopularOptions = () => {
  const [listItem, setListItem] = useState(brands);
  const popularDialogId = 'popular-dialog-id';
  const dialogElementById = document.getElementById(
    popularDialogId,
  ) as HTMLElement;
  const handleColeDialog = () => {
    HSOverlay.close(dialogElementById);
  };

  return (
    <>
      <button
        data-hs-overlay={`#${popularDialogId}`}
        type="button"
        className="bg-secondary-500/10 text-secondary-500 flex items-center justify-center gap-1 rounded-lg px-2 py-2 md:px-6"
      >
        <PopularIcon className="h-5 w-5" />
        <span className="mt-.5 md:text-md text-sm font-medium">
          View Popular Brands
        </span>
      </button>
      <Dialog targetDialog={popularDialogId} dialogTitle={'Popular Brand'}>
        <Reorder.Group
          axis="y"
          className="my-2 flex flex-col space-y-4"
          onReorder={setListItem}
          values={listItem}
        >
          {listItem.map((brand, index) => (
            <Reorder.Item value={brand} key={index}>
              <div className="flex items-center justify-between border-b bg-white pb-4">
                <div className="inline-flex items-center gap-3">
                  <ReorderIcon className="h-5 w-5 fill-gray-400" />
                  <Image
                    src={brand.url}
                    alt="brand-icon"
                    width={40}
                    height={40}
                  />
                  <h3 className="text-md ml-4 font-medium">{brand.title}</h3>
                </div>
                <PopularIcon className="h-5 w-5 text-yellow-500" />
              </div>
            </Reorder.Item>
          ))}
        </Reorder.Group>

        <div className="absolute bottom-0 flex w-full items-center justify-end gap-2 bg-white py-2 pr-8 ">
          <Button size="sm" className="bg-secondary-400 px-6 text-black">
            Cancel
          </Button>
          <Button size="sm" className=" bg-blue-500 px-6 text-white">
            Save
          </Button>
        </div>
      </Dialog>
    </>
  );
};

export default BrandPopularOptions;

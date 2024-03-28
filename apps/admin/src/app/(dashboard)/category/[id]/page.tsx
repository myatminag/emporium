'use client';
import React, { ChangeEvent, useState } from 'react';
import PageWrapper from '../../../../components/page-wrapper';
import BackButton from '../../../../components/back-button';
import Image from 'next/image';
import {
  Button,
  CameraPlus,
  CircleIcon,
  Dialog,
  EditRoundIcon,
} from '@ecommerce/ui';

import { useForm } from 'react-hook-form';
import OverlayCamera from '../../../../components/overlay-camer';
import { motion } from 'framer-motion';
import { brands } from '../../../../data/dummy';

const CategoryDetail = ({ params }: { params: { id: string } }) => {
  let dummy = '/dummy/dummy-cover.png';
  let dummyCateLogo = '/dummy/apple.png';
  const form = useForm();
  const dialogId = 'select-brand-lists-id';

  const [selectedBrandLists, setSelectedBrandLists] = useState<string[]>([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string[]>([]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedBrandLists((prev) => [...prev, e.target.value]);
  };
  return (
    <>
      <PageWrapper>
        <div className="mx-auto h-full max-w-[800px]">
          <BackButton />
          <h1 className="py-2 pl-2 text-2xl font-semibold leading-9">View</h1>
          <div className="mt-4 h-full rounded-tl-lg rounded-tr-lg bg-white p-4">
            <div className="bg-primary-100 relative h-[200px] w-full rounded-md">
              {dummy ? (
                <>
                  <Image
                    src={dummy}
                    alt={'dummy'}
                    className="inline-block"
                    fill
                  />
                  <div className="absolute right-4 top-4 z-50 h-12 w-12">
                    <OverlayCamera />
                  </div>
                </>
              ) : (
                <div className="absolute left-1/2 top-1/3 flex -translate-x-1/2 -translate-y-2/3 flex-col gap-0.5 text-center">
                  <p className="text-md font-normal">+ Add Category Cover</p>
                  <span className="text-[12px] font-normal italic">
                    *1080x450 px
                  </span>
                </div>
              )}
            </div>
            <div className="relative">
              <div className="bg-primary-100 relative z-30 m-1 mx-auto -mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-solid border-white">
                {dummyCateLogo ? (
                  <Image
                    src={dummyCateLogo}
                    alt="brand-logo"
                    className="inline-block"
                    fill
                  />
                ) : (
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    <CameraPlus className="h-12 w-12 fill-blue-600" />
                  </div>
                )}
              </div>
              <div className="absolute right-[41%]  top-2/3 z-50 h-10 w-10">
                <OverlayCamera />
              </div>
            </div>
            <div className="mt-2 flex flex-col text-center">
              <p className="text-md font-normal">Add Image</p>
              <span className="text-[12px] font-normal italic">
                *320x320 px
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="category-name"
                className="text-md font-normal text-gray-300"
              >
                Category Name
              </label>
              <div className="relative">
                <input
                  className="w-full px-16 py-3 pl-4 text-2xl font-semibold leading-8 focus:outline-none"
                  placeholder="Enter your category name"
                  defaultValue="Apple"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  <EditRoundIcon className="h-6 w-6 cursor-pointer fill-gray-500" />
                </div>
              </div>
            </div>
            <div className="my-2 border-b-2" />
            <div className="my-4 flex flex-col gap-2">
              <label
                htmlFor="category-name"
                className="text-md font-normal text-gray-300"
              >
                {`Associate Brand(${selectedBrandLists.length})`}
              </label>
              <div className="relative flex items-center justify-start gap-2">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  data-hs-overlay={`#${dialogId}`}
                  className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-400"
                >
                  <div className="bg-primary-100 flex h-10 w-10 items-center justify-center rounded-full">
                    <CircleIcon className="h-5 w-5 text-blue-500" />
                  </div>
                </motion.div>
                {selectedBrandLists.map((data) => {
                  const currImg = brands.find(
                    (brand) => brand.id == Number(data),
                  );
                  return (
                    <Image
                      key={currImg?.id}
                      src={currImg?.url || ''}
                      alt={currImg?.title || 'brand'}
                      width={60}
                      height={60}
                    />
                  );
                })}
              </div>
            </div>
            <div className="my-2 border-b-2" />
            <div className="flex flex-col">
              <label
                htmlFor="category-name"
                className="text-md font-normal text-gray-300"
              >
                {`Sub Category(${selectedBrandLists.length})`}
              </label>
              <Button className="bg-primary-100 my-3 max-w-[230px] gap-2 px-3 text-blue-500 ">
                <CircleIcon className="h-5 w-5" />
                Add New Sub Category
              </Button>
            </div>
          </div>
        </div>
      </PageWrapper>

      <Dialog dialogTitle={'Select Associate Brand(s)'} targetDialog={dialogId}>
        <div className="relative h-[500px] overflow-y-scroll">
          <ul className="space-y-4">
            {brands.map((brand) => (
              <li
                key={brand.title}
                className="flex items-center justify-start gap-4"
              >
                <input
                  value={brand.id}
                  onChange={handleChangeInput}
                  type="checkbox"
                  className="h-4 w-4"
                />
                <Image
                  src={brand.url}
                  alt={brand.title}
                  width={40}
                  height={40}
                />
                <h3 className="text-md">{brand.title}</h3>
              </li>
            ))}
          </ul>
          <div className="center sticky bottom-0 w-full gap-2 bg-white py-2">
            <Button
              className="w-40 bg-blue-500 px-3 py-1 text-white"
              data-hs-overlay={`#${dialogId}`}
            >
              Save
            </Button>
            <Button className="w-40 px-3 py-1">Cancel</Button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default CategoryDetail;

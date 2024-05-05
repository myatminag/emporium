'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import { brands } from '@app/data/dummy';
import BackButton from '@app/components/back-button';
import PageWrapper from '@app/components/page-wrapper';
import OverlayCamera from '@app/components/overlay-camera';
import SubCategoryForm from './components/sub-category-form';
import { useAppDispatch } from '@app/store/hook';
import {
  DialogEvent,
  setDialogEvent,
} from '@app/store/features/general/dialog-state.slice';
import AssociateBrandForm from './components/associate-brand-from';
import { Button, CameraPlus, CircleIcon, EditRoundIcon } from 'packages/ui/src';
import { useCategoryState } from '@app/store/features/category/category-state.slice';

const CategoryDetail = ({ params }: { params: { id: string } }) => {
  const dummy = '/dummy/dummy-cover.png';
  const dummyCateLogo = '/dummy/apple.png';
  const dispatch = useAppDispatch();
  const { associateBrands } = useCategoryState();

  return (
    <>
      <PageWrapper>
        <div className="mx-auto h-full max-w-[800px]">
          <BackButton />
          <h1 className="py-2 pl-2 text-2xl font-semibold leading-9">View</h1>
          <div className="mt-4 h-full rounded-tl-lg rounded-tr-lg bg-white p-4">
            <div className="relative h-[200px] w-full rounded-md bg-blue-200">
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
              <div className="relative z-30 m-1 mx-auto -mt-16 h-32 w-32 overflow-hidden rounded-full border-4 border-solid border-white bg-blue-200">
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
                {`Associate Brand(${associateBrands.length})`}
              </label>
              <div className="relative flex items-center justify-start gap-2">
                <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="flex h-16 w-16 cursor-pointer items-center justify-center rounded-full border-2 border-dashed border-gray-400"
                  onClick={() =>
                    dispatch(setDialogEvent(DialogEvent.associateDialog))
                  }
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-200">
                    <CircleIcon className="h-5 w-5 text-blue-500" />
                  </div>
                </motion.div>
                {associateBrands.map((data) => {
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
                {`Sub Category(${associateBrands.length})`}
              </label>
              <Button
                onClick={() =>
                  dispatch(setDialogEvent(DialogEvent.subCategoryDialog))
                }
                className="my-3 max-w-[230px] gap-2 bg-blue-200 px-3 text-blue-500 "
              >
                <CircleIcon className="h-5 w-5" />
                Add New Sub Category
              </Button>
            </div>
          </div>
        </div>
      </PageWrapper>

      {/*associate brands*/}
      <AssociateBrandForm />

      {/* sub category dialog */}
      <SubCategoryForm />
    </>
  );
};

export default CategoryDetail;

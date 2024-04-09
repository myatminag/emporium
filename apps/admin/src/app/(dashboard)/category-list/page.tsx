'use client';
import React, { ChangeEvent } from 'react';
import {
  Button,
  CircleIcon,
  InputSearch,
  EditRoundIcon,
  TrashIcon,
} from '@ecommerce/ui';
import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';
import { categoryLists } from '../../../data/dummy';
import Image from 'next/image';
import PageWrapper from '../../../components/page-wrapper';

const Category = () => {
  const params = useSearchParams();
  const router = useRouter();
  const handleSearchCategory = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const currentQuery = params ? qs.parse(params.toString()) : {};
    const updateQuery = {
      ...currentQuery,
      title: event.target.value,
    };
    const url = qs.stringifyUrl(
      { url: '/category', query: updateQuery },
      { skipEmptyString: true },
    );
    router.replace(url);
  };
  return (
    <PageWrapper>
      <div className="h-full w-full rounded-tl-lg rounded-tr-lg bg-white p-4">
        <h1 className="text-xl font-semibold">Category</h1>
        <div className="my-4 flex items-center justify-between">
          <div className="flex items-center justify-center gap-3">
            <Button className="text-md gap-1.5 bg-blue-500 font-[400] text-white">
              <CircleIcon className="h-4 w-4" />
              Add New Main Category
            </Button>
            {/*<Button className="text-md gap-1.5 bg-blue-100 font-[400] text-blue-500">*/}
            {/*  <CircleIcon className="h-4 w-4 " />*/}
            {/*  Add New Main Category*/}
            {/*</Button>*/}
          </div>
          <InputSearch
            searchKey={'title'}
            handleSearchKeyword={handleSearchCategory}
            placeholder="Search By category name"
          />
        </div>
        <div className="flex items-center gap-4">
          <h1>7 Categories</h1>
        </div>
        <div className="mx-4 my-2 grid grid-cols-3">
          {categoryLists.map((category) => (
            <div
              key={category.id}
              className="flex h-40 items-center justify-between rounded-md px-8 py-3 transition-all duration-150 ease-out hover:bg-gray-300"
              onClick={() => router.push(`/category/${category.id}`)}
            >
              <div className="flex items-center justify-start gap-2">
                <Image
                  src={category.url}
                  alt={category.name}
                  width={100}
                  height={100}
                />
                <div className="flex flex-col gap-1">
                  <p className="text-md font-semibold">{category.name}</p>
                  <span className="text-sm font-normal">
                    {category?.subCategory.length} Sub Categories
                  </span>
                </div>
              </div>
              <div className="flex cursor-pointer gap-2">
                <EditRoundIcon className="mt-0.5 h-5 w-5 fill-gray-500" />
                <TrashIcon className="h-5 w-5 text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Category;

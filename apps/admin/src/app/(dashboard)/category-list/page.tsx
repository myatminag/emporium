'use client';

import React, { ChangeEvent } from 'react';
import qs from 'query-string';
import { useRouter, useSearchParams } from 'next/navigation';

import { CircleIcon, ChevronIcon } from 'packages/ui/src';
import CategoryList from './components/category-list';

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
    <section className="space-y-5 px-4 py-8 lg:px-6">
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <ol className="flex items-center whitespace-nowrap">
            <li className="inline-flex items-center">
              <p className="flex items-center text-base text-gray-500 focus:outline-none dark:focus:text-blue-500">
                Dashboard
              </p>
              <ChevronIcon
                direction="right"
                className="mx-2 size-5 flex-shrink-0 overflow-visible text-gray-500 dark:text-neutral-600"
              />
            </li>
            <li
              className="inline-flex items-center truncate text-base font-medium text-neutral-700 dark:text-gray-200"
              aria-current="page"
            >
              Category List
            </li>
          </ol>
          <p className="text-heading font-medium">Categories (6)</p>
        </div>
        <button
          type="button"
          className="bg-primary inline-flex items-center gap-x-2 rounded-sm border border-transparent px-4 py-2 text-base text-white disabled:pointer-events-none disabled:opacity-50"
        >
          <CircleIcon className="size-4" />
          New Category
        </button>
      </div>
      <CategoryList />
    </section>
  );
};

export default Category;

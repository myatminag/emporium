'use client';

import React, { ChangeEvent } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import qs from 'query-string';

import { SearchIcon } from 'packages/ui/src';

const BrandSearch = () => {
  const router = useRouter();
  const params = useSearchParams();

  const search = params.get('search') || '';
  const handleSearchKeywordChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const currentQuery = params ? qs.parse(params.toString()) : {};
    const updateQuery = {
      ...currentQuery,
      search: event.target.value,
    };
    const url = qs.stringifyUrl(
      { url: '/brand', query: updateQuery },
      { skipEmptyString: true },
    );
    router.replace(url);
  };
  return (
    <div className="relative h-10 w-full overflow-hidden rounded-lg border-b md:w-64 md:border">
      <input
        value={search}
        onChange={handleSearchKeywordChange}
        placeholder="Search by brand name"
        className="h-full w-full border-none pl-2 pr-4 focus:outline-none md:w-full"
      />
      <SearchIcon className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer" />
    </div>
  );
};

export default BrandSearch;

'use client';
import { ChangeEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { SearchIcon } from '../index';

export const InputSearch = ({
  searchKey,
  handleSearchKeyword,
  placeholder,
}: {
  searchKey: string;
  handleSearchKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) => {
  const params = useSearchParams();
  const search = params.get(searchKey) || '';

  return (
    <div className="relative h-10 w-full overflow-hidden rounded-lg border-b md:w-64 md:border">
      <input
        value={search}
        onChange={handleSearchKeyword}
        placeholder={placeholder}
        className="h-full w-full border-none pl-2 pr-4 focus:outline-none md:w-full"
      />
      <SearchIcon className="absolute right-2 top-1/2 z-10 -translate-y-1/2 cursor-pointer" />
    </div>
  );
};

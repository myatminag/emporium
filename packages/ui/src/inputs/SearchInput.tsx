import { ChangeEvent } from 'react';

import { SearchIcon } from '../index';
import { cn } from 'packages/lib/src';

type SearchInputProps = {
  placeholder: string;
  className?: string;
  handleSearchKeyword?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const SearchInput = ({ placeholder, className }: SearchInputProps) => {
  return (
    <>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <input
          id="search"
          type="search"
          className={cn(
            'block w-72 rounded-sm border-gray-200 px-3 py-2 ps-11 text-base focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50',
            className,
          )}
          placeholder={placeholder}
        />
        <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-4">
          <SearchIcon className="text-primary size-4" />
        </div>
      </div>
    </>
  );
};

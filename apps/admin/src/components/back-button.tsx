'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import { ChevronIcon } from 'packages/ui/src';

const MyComponent = () => {
  const router = useRouter();
  return (
    <div
      className="flex cursor-pointer items-center gap-1"
      onClick={() => router.back()}
    >
      <ChevronIcon className="h-5 w-5 fill-gray-400" direction="left" />
      Back
    </div>
  );
};

export default MyComponent;

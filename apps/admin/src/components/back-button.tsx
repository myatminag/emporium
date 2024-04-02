'use client';
import React from 'react';
import { LeftArrowIcon } from '@ecommerce/ui';
import { useRouter } from 'next/navigation';

const MyComponent = () => {
  const router = useRouter();
  return (
    <div
      className="flex cursor-pointer items-center gap-1"
      onClick={() => router.back()}
    >
      <LeftArrowIcon className="h-5 w-5 fill-gray-400" />
      Back
    </div>
  );
};

export default MyComponent;

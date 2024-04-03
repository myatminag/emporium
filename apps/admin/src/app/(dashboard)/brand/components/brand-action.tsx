import React from 'react';
import { EditIcon, TrashIcon } from '@ecommerce/ui';

const BrandAction = () => {
  return (
    <>
      <EditIcon className="h-5 w-5 cursor-pointer text-gray-400" />
      <TrashIcon className="h-5 w-5 cursor-pointer text-gray-400" />
    </>
  );
};

export default BrandAction;

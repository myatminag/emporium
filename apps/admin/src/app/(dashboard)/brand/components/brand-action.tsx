import React from 'react';

import { EditIcon, TrashIcon } from 'packages/ui/src';

const BrandAction = () => {
  return (
    <>
      <EditIcon className="h-5 w-5 cursor-pointer text-gray-400" />
      <TrashIcon className="h-5 w-5 cursor-pointer text-gray-400" />
    </>
  );
};

export default BrandAction;

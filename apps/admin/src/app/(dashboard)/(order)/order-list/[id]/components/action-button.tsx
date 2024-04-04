'use client';

import { useState } from 'react';

import { CustomDialog, TrashIcon } from '@ecommerce/ui';

const ActionButton = () => {
  const [dialog, setDialog] = useState(false);

  return (
    <>
      <div className="flex items-center gap-x-4">
        <button
          onClick={() => setDialog(true)}
          className="bg-primary-100 rounded-sm p-2"
        >
          <TrashIcon className="text-primary size-5" />
        </button>
        <button className="bg-primary flex-1 rounded-sm p-2 text-base text-white">
          Confirm
        </button>
      </div>

      <CustomDialog
        dialogTitle="Delete Order"
        open={dialog}
        onClose={() => setDialog(false)}
      >
        <div className="space-y-4 p-4 lg:w-full lg:max-w-sm">
          <p className="text-center text-base text-neutral-700">
            Are you sure you want to delete this order? This action can not be
            undone.
          </p>
          <div className="flex items-center gap-x-4">
            <button
              onClick={() => setDialog(false)}
              className="bg-primary-100 text-primary w-full rounded-sm p-2 text-base"
            >
              Cancel
            </button>
            <button className="bg-primary w-full rounded-sm p-2 text-base text-white">
              Confirm
            </button>
          </div>
        </div>
      </CustomDialog>
    </>
  );
};

export default ActionButton;

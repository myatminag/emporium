'use client';
import React from 'react';
import { CircleIcon } from '@ecommerce/ui';
import BrandMutationForm from './BrandMutationForm';
import Dialog from 'packages/ui/src/common/dialog';
import { HSOverlay } from 'preline/preline';

const CreateBrand = () => {
  const dialogId = 'create-brand-dialog';
  const dialogElementById = document.getElementById(dialogId) as HTMLElement;
  const handleColeDialog = () => {
    HSOverlay.close(dialogElementById);
  };
  return (
    <>
      <button id="#button">close</button>
      <div className="text-center">
        <button
          data-hs-overlay={`#${dialogId}`}
          type="button"
          className="flex w-20 items-center justify-center gap-1 rounded-lg bg-blue-500 py-2 text-white md:w-40"
        >
          <CircleIcon className="w-4" />
          <span className="mt-.5 md:text-md text-sm font-medium">Create</span>
        </button>
      </div>
      <Dialog
        dialogTitle="Create Brand"
        targetDialog={dialogId}
        onClose={handleColeDialog}
      >
        <BrandMutationForm />
      </Dialog>
    </>
  );
};

export default CreateBrand;

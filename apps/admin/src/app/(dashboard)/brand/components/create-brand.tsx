'use client';

import React from 'react';

import BrandMutationForm from './brand-mutation-form';
import {
  DialogEvent,
  setDialogEvent,
} from '@app/store/features/general/dialog-state.slice';
import { useAppDispatch } from '@app/store/hook';
import { CircleIcon } from 'packages/ui/src';

const CreateBrand = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="text-center">
        <button
          onClick={() =>
            dispatch(setDialogEvent(DialogEvent.createBrandDialog))
          }
          type="button"
          className="flex w-20 items-center justify-center gap-1 rounded-lg bg-blue-500 py-2 text-white md:w-40"
        >
          <CircleIcon className="w-4" />
          <span className="mt-.5 md:text-md text-sm font-medium">Create</span>
        </button>
      </div>

      <BrandMutationForm />
    </>
  );
};

export default CreateBrand;

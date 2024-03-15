'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { UploadImageIcon, CameraIcon } from '@ecommerce/ui';

import TextInput from 'packages/ui/src/common/input';
import { useForm } from 'react-hook-form';

const BrandMutationForm = () => {
  let coverUrl;
  let brandLogo = '/dummy/apple.png';
  const {
    control,
    formState: { errors },
    register,
  } = useForm<any>({
    defaultValues: {
      title: '',
    },
  });
  return (
    <>
      <form>
        <div className="bg-primary-100 relative  h-64 w-full cursor-pointer rounded-lg">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={'cover_url'}
              className="inline-block"
              fill
            />
          ) : (
            <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 text-black/50 ">
              <UploadImageIcon className="h-12 w-12 " />
              <p className="font-semibold">Upload Brand Cover Image</p>
            </div>
          )}
          <span className="absolute bottom-2 right-2 text-black/80">
            1080 x 1080
          </span>
        </div>
        <div className="bg-primary-100 relative z-30 mx-auto -mt-16 h-32 w-32 overflow-hidden rounded-full border-2 border-solid border-white outline-offset-4">
          {brandLogo ? (
            <Image
              src={brandLogo}
              alt="brand-logo"
              className="inline-block"
              fill
            />
          ) : (
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
              <CameraIcon className="h-12 w-12  text-white" />
            </div>
          )}
        </div>
        <div className="px-16">
          <TextInput
            control={control}
            errors={errors}
            type={'text'}
            fieldName={'title'}
            label={'Title'}
          />
        </div>
      </form>
    </>
  );
};

export default BrandMutationForm;

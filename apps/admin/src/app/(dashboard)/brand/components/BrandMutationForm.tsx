'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { UploadImageIcon, CameraIcon, Button, Dialog } from '@ecommerce/ui';

import TextInput from 'packages/ui/src/common/input';
import { useForm } from 'react-hook-form';
import TextAreaInput from 'packages/ui/src/common/textarea';
import 'react-advanced-cropper/dist/style.css';
import { HSOverlay } from 'preline/preline';
import CropperBox from './CropperBox';

const BrandMutationForm = () => {
  const brandCoverUrlRef = useRef<HTMLInputElement | null>(null);
  const [currentFileUrl, setCurrentFileUrl] = useState<string>('');
  let coverUrl;
  const brandLogo = '/dummy/apple.png';
  const cropperDialogId = 'cropper-dialog-Id';
  const cropperElementById = document.getElementById(
    cropperDialogId,
  ) as HTMLElement;

  const {
    control,
    formState: { errors },
  } = useForm<any>({
    defaultValues: {
      title: '',
    },
  });

  const handleSelectFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { files } = e.target;
    if (files?.[0]) {
      const url = URL.createObjectURL(files[0]);
      setCurrentFileUrl(url);
      HSOverlay.open(cropperElementById);
    }
  };

  const handleClickUploadBrandCover = () => {
    if (brandCoverUrlRef) {
      brandCoverUrlRef.current?.click();
    }
  };

  return (
    <>
      <form>
        <div className="bg-primary-100 relative h-64  w-full cursor-pointer overflow-hidden rounded-lg">
          {coverUrl ? (
            <Image
              src={coverUrl}
              alt={'cover_url'}
              className="inline-block"
              fill
            />
          ) : (
            <div
              className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-2 text-black/50 "
              onClick={handleClickUploadBrandCover}
            >
              <UploadImageIcon className="h-12 w-12" />
              <p className="font-semibold">Upload Brand Cover Image</p>
            </div>
          )}

          <span className="absolute bottom-2 right-2 text-black/80">
            1080 x 1080
          </span>
          <input
            type="file"
            ref={brandCoverUrlRef}
            accept="image/*"
            className="hidden"
            onChange={handleSelectFileUpload}
          />
        </div>
        <div className="bg-primary-100 border-6 relative z-30 mx-auto -mt-16 h-32 w-32 overflow-hidden rounded-full border-solid border-white outline-offset-4">
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
        <div className="mt-4 space-y-6 px-16">
          <TextInput
            control={control}
            errors={errors}
            type={'text'}
            fieldName={'title'}
            label={'Title'}
          />
          <TextAreaInput />

          <div className="relative flex items-center">
            <div className="flex-1">
              <TextInput
                label={'facebook link'}
                control={control}
                errors={errors}
                type={'link'}
                fieldName={'fbLink'}
              />
            </div>
          </div>
          <div className="relative flex items-center">
            <div className="flex-1">
              <TextInput
                label={'facebook link'}
                control={control}
                errors={errors}
                type={'link'}
                fieldName={'fbLink'}
              />
            </div>
          </div>
        </div>
      </form>
      <Button
        className="text-md sticky bottom-0 z-10 w-full bg-blue-500 py-2 text-white"
        size="sm"
        onClick={() => console.log()}
      >
        Create Brand
      </Button>
      <Dialog targetDialog={cropperDialogId} dialogTitle={'Crop Image'}>
        <CropperBox currentFileUrl={currentFileUrl} />
      </Dialog>
    </>
  );
};

export default BrandMutationForm;

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  Button,
  CameraIcon,
  TextAreaInput,
  TextInput,
  ImageUploadIcon,
} from 'packages/ui/src';
import OverlayCamera from '@app/components/overlay-camera';

const WebBrandForm = () => {
  let brandLogo;
  let coverUrl; //= '/dummy/dummy-cover.png';
  const brandCoverUrlRef = useRef<HTMLInputElement | null>(null);
  const [currentFileUrl, setCurrentFileUrl] = useState<string>('');

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
    }
  };

  const handleClickUploadBrandCover = () => {
    if (brandCoverUrlRef) {
      brandCoverUrlRef.current?.click();
    }
  };

  console.log(currentFileUrl, 'current');
  return (
    <div className="relative flex h-full w-full flex-1 flex-col py-2">
      <div className="relative h-64 w-full cursor-pointer overflow-hidden rounded-lg bg-blue-200">
        {coverUrl ? (
          <Image
            src={coverUrl}
            alt="cover_url"
            className="inline-block object-cover"
            fill
          />
        ) : (
          <div
            onClick={handleClickUploadBrandCover}
            className="center-x center-y absolute flex flex-col items-center justify-center gap-2 text-black/50"
          >
            <ImageUploadIcon className="h-12 w-12" />
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
      <div className="z-20 -mt-16 flex items-center justify-center">
        <div className="relative h-32 w-32">
          {brandLogo ? (
            <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-white">
              <Image
                src={brandLogo}
                alt="brand-logo"
                className="inline-block object-cover"
                fill
              />
            </div>
          ) : (
            <div className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-blue-200">
              <CameraIcon className="h-12 w-12  text-white" />
            </div>
          )}
          {brandLogo && (
            <div className="absolute bottom-0 right-2 z-50 h-10 w-10">
              <OverlayCamera />
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 space-y-6">
        <TextInput
          control={control}
          errors={errors}
          type={'text'}
          fieldName={'title'}
          label={'Title'}
        />
        <TextAreaInput />
        <div className="flex items-center justify-between gap-2">
          <div className="flex"></div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-4 border-0 py-2">
        <Button className="text-md h-[40px] w-[230px] rounded-md bg-blue-500 text-white">
          Save
        </Button>
        <Button className="text-md h-[40px] w-[230px] rounded-md bg-[#F4F4F4] text-[#4c4c4c]">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default WebBrandForm;

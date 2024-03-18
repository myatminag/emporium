import React, { useRef } from 'react';
import { Cropper, CropperRef } from 'react-advanced-cropper';

type BrandUrlCropperProps = {
  currentFileUrl: string;
};
const BrandUrlCropper = ({ currentFileUrl }: BrandUrlCropperProps) => {
  const cropperRef = useRef<CropperRef>(null);

  return (
    <>
      <div className="z-50 h-40 w-40 bg-blue-500">
        <Cropper
          ref={cropperRef}
          src={currentFileUrl}
          className={'cropper h-full w-full '}
        />
      </div>
    </>
  );
};

export default BrandUrlCropper;

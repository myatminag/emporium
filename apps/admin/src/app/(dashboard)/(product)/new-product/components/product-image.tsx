'use client';

import { ImageUploadIcon } from '@ecommerce/ui';

const ProductImage = () => {
  return (
    <div className="w-full rounded-sm border bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Upload Image
      </p>
      <div className="space-y-4 p-4">
        <label
          htmlFor="af-submit-app-upload-images"
          className="group block cursor-pointer rounded-lg border-2 border-dashed border-gray-200 p-4 text-center lg:p-7"
        >
          <input
            id="af-submit-app-upload-images"
            name="af-submit-app-upload-images"
            type="file"
            className="sr-only"
          />
          <ImageUploadIcon className="mx-auto size-10 text-gray-400" />
          <span className="mt-2 block text-base text-neutral-700">
            Browse your device or{' '}
            <span className="text-primary">drag&apos;n drop&apos;</span>
          </span>
          <span className="mt-1 block text-sm text-gray-400">
            Maximum file size is 2 MB
          </span>
        </label>
        <p className="text-base text-neutral-400">
          Add up to 8 images to your product.
        </p>
      </div>
    </div>
  );
};

export default ProductImage;

import React from 'react';

import { CameraIcon } from 'packages/ui/src';

const OverlayCamera = () => {
  return (
    <div className="flex h-full w-full cursor-pointer items-center justify-center rounded-full  bg-black/75">
      <CameraIcon className="h-[40%] w-[40%] text-white" />
    </div>
  );
};

export default OverlayCamera;

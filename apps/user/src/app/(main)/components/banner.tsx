import Image from 'next/image';

import BannerOne from '../../../assets/dummy/banner-1.png';
import BannerImgTwo from '../../../assets/dummy/banner.png';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
      <Image
        src={BannerImgTwo}
        alt="banner"
        width={500}
        height={500}
        className="h-full w-full rounded"
      />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-12">
          <Image
            src={BannerOne}
            alt="banner"
            width={500}
            height={500}
            className="w-full rounded"
          />
        </div>

        <div className="col-span-6">
          <Image
            src={BannerOne}
            alt="banner"
            width={500}
            height={500}
            className="w-full rounded"
          />
        </div>

        <div className="col-span-6">
          <Image
            src={BannerOne}
            alt="banner"
            width={500}
            height={500}
            className="w-full rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;

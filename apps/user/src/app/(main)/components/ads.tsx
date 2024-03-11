import Image from 'next/image';
import BannerTwo from '../../../assets/dummy/banner-2.png';

const Ads = () => {
  return (
    <div className="grid-col-1 grid gap-4 lg:grid-cols-2">
      <Image
        src={BannerTwo}
        width={500}
        height={500}
        alt="banner"
        className="h-48 w-full rounded-sm lg:h-72"
      />
      <Image
        src={BannerTwo}
        width={500}
        height={500}
        alt="banner"
        className="h-48 w-full rounded-sm lg:h-72"
      />
    </div>
  );
};

export default Ads;

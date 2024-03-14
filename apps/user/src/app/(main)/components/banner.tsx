import Image from 'next/image';

import Widget from '../../../assets/dummy/Widget (2).png';
import WidgetOne from '../../../assets/dummy/Widget (1).png';
import WidgetTwo from '../../../assets/dummy/Widget.png';

const Banner = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <Image
        src={Widget}
        alt="banner"
        width={500}
        height={500}
        className="h-full w-full rounded lg:col-span-2"
      />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-1">
        <div className="col-span-1">
          <Image
            src={WidgetTwo}
            alt="banner"
            width={500}
            height={500}
            className="w-full rounded"
          />
        </div>

        <div className="col-span-1">
          <Image
            src={WidgetOne}
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

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { RightChevronIcon } from '@ecommerce/ui';
import ProductImg from '../../../assets/image 34.png';

const Promotion = () => {
  return (
    <div className="flex flex-col gap-y-3">
      <div className="flex items-center justify-between gap-x-3">
        <p className="text-lg font-medium">Promotion</p>
        <div className="flex items-center gap-x-1.5">
          <p className="text-base">View All</p>
          <RightChevronIcon color="#EB001B" />
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 15,
          },
        }}
      >
        {[...Array(8)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="rounded border bg-white outline-none">
              <div className="bg-neutral px-3 py-5">
                <Image
                  src={ProductImg}
                  alt="product-image"
                  width={500}
                  height={500}
                  className="h-full w-full"
                />
              </div>
              <div className="space-y-2 p-3">
                <p className="line-clamp-2 text-base text-neutral-600">
                  GoPro HERO6 4K Action Camera - Black
                </p>
                <p className="text-base font-medium tracking-wide">
                  780,000 MMK
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Promotion;

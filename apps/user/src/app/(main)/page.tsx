'use client';

import Ads from './components/ads';
import Banner from './components/banner';
import Service from './components/service';
import Subscribe from './components/subscribe';
import Promotion from './components/promotion';
import PopularNow from './components/popular-now';
import Categories from './components/categories';
import NewArrival from './components/new-arrival';
import Brands from './components/brands';
import Feature from './components/feature';

export default function Index() {
  return (
    <>
      <div className="container my-8 flex flex-col space-y-6">
        <Banner />

        <Service />

        <Categories />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <NewArrival />

          <PopularNow />
        </div>

        <Promotion />

        <Ads />

        <Brands />

        <Feature />
      </div>

      <Subscribe />
    </>
  );
}

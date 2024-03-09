'use client';

import Banner from './components/banner';
import Service from './components/service';
import Categories from './components/categories';
import Promotion from './components/promotion';
import NewArrival from './components/new-arrival';
import Ads from './components/ads';

export default function Index() {
  return (
    <section className="container my-8 flex flex-col space-y-6">
      <Banner />

      <Service />

      <Categories />

      <Promotion />

      <NewArrival />

      <Ads />
    </section>
  );
}

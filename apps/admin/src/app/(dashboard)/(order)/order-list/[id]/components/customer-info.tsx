'use client';

import Image from 'next/image';
import { ReactNode } from 'react';
import { GoogleMap, useJsApiLoader, Libraries } from '@react-google-maps/api';

import { LocationIcon } from 'packages/ui/src';

const libraries = ['places', 'drawing', 'geometry'];

const center = {
  lat: 16.8409, // default latitude
  lng: 96.1735, // default longitude
};

const defaultMapContainerStyle = {
  width: '100%',
  height: '150px',
  borderRadius: '10px',
};

const MapProvider = ({ children }: { children: ReactNode }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY!,
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!isLoaded) return <p>Map Script is loading ...</p>;

  return children;
};

const CustomerInfo = () => {
  return (
    <div className="w-full rounded-sm border bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-200 p-4 ">
        <p className="text-heading font-medium">Customer Info</p>
        <div className="bg-primary flex items-center gap-x-1 rounded-full px-2 py-1">
          <LocationIcon className="size-3 text-white" />
          <p className="text-sm text-white">Home</p>
        </div>
      </div>
      <div className="space-y-4 p-4">
        <div className="flex items-center gap-x-4">
          <Image
            className="size-[44px] flex-shrink-0 rounded-full"
            src="https://images.unsplash.com/photo-1572307480813-ceb0e59d8325?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80"
            alt="Image Description"
            width={150}
            height={150}
          />
          <div>
            <p className="text-base text-neutral-700">Customer Name</p>
            <p className="text-base text-neutral-700">+95 987654321</p>
          </div>
        </div>
        <MapProvider>
          <GoogleMap
            mapContainerStyle={defaultMapContainerStyle}
            zoom={10}
            center={center}
          />
        </MapProvider>
        <div className="flex flex-col items-start gap-x-2">
          <p className="font-medium text-neutral-700">Ahlone, Yangon</p>
          <p className="text-base text-neutral-700">
            45 Roker Terrace Latheronwheel KW5 8NW, London, UK
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerInfo;

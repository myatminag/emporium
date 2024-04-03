'use client';

import { useState, Fragment } from 'react';
import { Combobox, Transition } from '@headlessui/react';

import { ChevronIcon } from '@ecommerce/ui';

const people = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
];

const ProductInfo = () => {
  const [query, setQuery] = useState('');

  const filteredPeople =
    query === ''
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, '')),
        );

  return (
    <div className="w-full rounded-sm border bg-white shadow-sm">
      <p className="text-heading border-b border-gray-200 p-4 font-medium">
        Product Info
      </p>
      <div className="grid grid-cols-1 gap-4 px-4 pb-4 lg:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="product-name"
            className="mt-2.5 inline-block text-base font-medium text-neutral-700"
          >
            Name
          </label>
          <input
            id="product-name"
            type="text"
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
            placeholder="Product name"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="sku"
            className="mt-2.5 inline-block text-base font-medium text-neutral-700"
          >
            SKU
          </label>
          <input
            id="sku"
            type="text"
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
            placeholder="SKU"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="af-submit-app-project-name"
            className="mt-2.5 inline-block text-base font-medium text-neutral-700"
          >
            Weight
          </label>
          <input
            id="af-submit-app-project-name"
            type="text"
            className="block w-full rounded-sm border-gray-200 px-3 py-2 text-base shadow-sm disabled:pointer-events-none disabled:opacity-50"
            placeholder="Weight"
          />
        </div>
        <div className="space-y-2">
          <label
            htmlFor="category"
            className="mt-2.5 inline-block text-base font-medium text-neutral-700"
          >
            Category
          </label>
          <Combobox>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-sm border text-left text-base shadow-sm">
                <Combobox.Input
                  placeholder="Select category"
                  className="w-full border-none px-3 py-2.5 text-base leading-5 text-neutral-700"
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-sm bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((person) => (
                      <Combobox.Option
                        key={person.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 text-base ${
                            active ? 'bg-primary text-white' : 'text-gray-900'
                          }`
                        }
                        value={person}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {person.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-teal-600'
                                }`}
                              ></span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>

        <div className="col-span-2 space-y-2">
          <label
            htmlFor="af-submit-app-description"
            className="mt-2.5 inline-block text-base font-medium text-neutral-700"
          >
            Description
          </label>
          <textarea
            id="af-submit-app-description"
            className="text-basedisabled:pointer-events-none block w-full rounded-sm border-gray-200 px-3 py-2 disabled:opacity-50"
            rows={6}
            placeholder="Product description..."
          />
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;

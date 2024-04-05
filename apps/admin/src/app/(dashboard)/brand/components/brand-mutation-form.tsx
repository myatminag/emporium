'use client';
import React from 'react';
import { Button, CustomDialog } from '@ecommerce/ui';
import 'react-advanced-cropper/dist/style.css';
import { useAppDispatch } from '../../../../store/hook';
import {
  DialogEvent,
  setDialogEvent,
  useDialogState,
} from '../../../../store/features/general/dialog-state.slice';
import { Tab } from '@headlessui/react';
import { cn } from '@ecommerce/lib';
import WebBrandForm from './web-brand-form';
import MobileBrandForm from './brand-mobile-form';

const BrandMutationForm = () => {
  const dispatch = useAppDispatch();
  const { dialog } = useDialogState();
  const tabLists = [{ title: 'Website' }, { title: 'Mobile' }];

  return (
    <>
      <CustomDialog
        open={dialog === DialogEvent.createBrandDialog}
        dialogTitle="Create Brand"
        onClose={() => dispatch(setDialogEvent(DialogEvent.initial))}
      >
        <div className="min-w-md relative overflow-hidden px-4 pb-4 md:h-[650px] md:w-[800px] md:pt-14">
          <Tab.Group>
            <div className="absolute inset-0 top-0 h-10 max-w-sm p-2">
              <Tab.List className="flex space-x-1 rounded-full bg-neutral-100 p-1">
                {tabLists.map((tab) => (
                  <Tab
                    key={tab.title}
                    className={({ selected }) =>
                      cn(
                        'w-full rounded-full py-2 text-sm font-medium leading-5',
                        'ring-white/60  focus:outline-none focus:ring-2',
                        selected
                          ? 'bg-blue-500 text-white'
                          : 'text-[#4C4C4C] hover:bg-white/[0.12] hover:text-white',
                      )
                    }
                  >
                    {tab.title}
                  </Tab>
                ))}
              </Tab.List>
            </div>
            <Tab.Panels className="h-full w-full overflow-y-auto">
              <Tab.Panel className="h-full w-full">
                <WebBrandForm />
              </Tab.Panel>
              <Tab.Panel className="h-full w-full">
                <MobileBrandForm />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </CustomDialog>
      <Button
        className="text-md sticky bottom-0 z-10 w-full bg-blue-500 py-2 text-white"
        size="sm"
        onClick={() => console.log()}
      >
        Create Brand
      </Button>
    </>
  );
};

export default BrandMutationForm;

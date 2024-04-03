'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import { cn } from '@ecommerce/lib';
import { CloseIcon } from '../icons/action-icon';

type FullDialogProps = {
  children: ReactNode;
  open: boolean;
  dialogTitle: string;
  onClose: () => void;
};

export const CustomDialog = ({
  open,
  children,
  dialogTitle,
  onClose,
}: FullDialogProps) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {open &&
        createPortal(
          <div
            className={cn(
              'fixed inset-0 z-50 flex h-screen w-screen items-center justify-center transition-colors duration-75',
              open ? 'visible bg-black/40' : 'invisible',
            )}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, bounce: 100 }}
              className="min-w-md relative rounded-xl bg-white"
            >
              <div className="flex items-center justify-between border-b p-4">
                <h3 className="text-heading font-medium text-neutral-700">
                  {dialogTitle}
                </h3>
                <button
                  type="button"
                  className="flex size-7 items-center justify-center rounded-full border border-transparent text-sm font-semibold text-gray-800 hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-50"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <CloseIcon className="size-4 flex-shrink-0" />
                </button>
              </div>
              {children}
            </motion.div>
          </div>,
          document.body,
        )}
    </>
  );
};

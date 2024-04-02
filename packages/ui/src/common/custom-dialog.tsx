'use client';

import { ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@ecommerce/lib';
import { CloseIcon } from '../icons/close-icon';
import { motion } from 'framer-motion';

type FullDialogProps = {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  dialogTitle: string;
};

export const CustomDialog = ({
  open,
  onClose,
  children,
  dialogTitle,
}: FullDialogProps) => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {open &&
        createPortal(
          <div
            className={cn(
              'fixed inset-0 z-50 flex h-screen w-screen items-center justify-center transition-colors duration-75',
              open ? 'visible bg-black/20' : 'invisible',
            )}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, bounce: 100 }}
              className="min-w-md relative rounded-xl bg-white px-4 pt-4"
            >
              <div className="flex items-center justify-between px-2 pb-2">
                <h1 className="text-xl font-semibold text-black">
                  {dialogTitle}
                </h1>
                <CloseIcon
                  onClick={onClose}
                  className="h-5 w-5 cursor-pointer stroke-[40px] text-gray-400"
                />
              </div>
              {children}
            </motion.div>
          </div>,
          document.body,
        )}
    </>
  );
};

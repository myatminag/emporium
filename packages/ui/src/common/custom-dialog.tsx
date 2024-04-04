'use client';

import { ReactNode, useCallback, useEffect, useRef } from 'react';
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
  const dialogRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        dialogRef.current &&
        !dialogRef.current.contains(event.target as Element)
      ) {
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('mouseup', handleClickOutside);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [open, handleClickOutside]);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {open &&
        createPortal(
          <dialog
            open={open}
            aria-modal="true"
            aria-labelledby={dialogTitle}
            className={cn(
              'fixed inset-0 z-50 flex h-screen w-screen items-center justify-center transition-colors duration-75',
              open ? 'visible bg-black/40' : 'invisible',
            )}
          >
            <motion.div
              ref={dialogRef}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, bounce: 100 }}
              className="min-w-md relative rounded-xl bg-white"
            >
              <div className="flex items-center justify-between border-b p-4">
                <h3
                  id={dialogTitle}
                  className="text-heading font-medium text-neutral-700"
                >
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
          </dialog>,
          document.body,
        )}
    </>
  );
};

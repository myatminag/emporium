'use client';

import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-secondary-400 flex w-full px-4 pt-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="min-h-screen w-full rounded-tl-lg rounded-tr-lg p-4"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageWrapper;

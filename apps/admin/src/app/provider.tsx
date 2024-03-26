'use client';

import { ReactNode, useRef } from 'react';
import { Provider } from 'react-redux';
import { appStore, AppStore } from '../store/store';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = appStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default AppProvider;

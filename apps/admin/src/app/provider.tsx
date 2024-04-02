'use client';

import { ReactNode, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { appStore, AppStore } from '../store/store';

const AppProvider = ({ children }: { children: ReactNode }) => {
  const storeRef = useRef<AppStore>();

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = appStore();
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} position="right" />
      <Provider store={storeRef.current}>{children}</Provider>
    </QueryClientProvider>
  );
};

export default AppProvider;

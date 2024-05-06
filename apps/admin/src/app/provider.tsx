'use client';

import { ReactNode, useRef, useState } from 'react';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SessionProvider } from 'next-auth/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { appStore, AppStore } from '../store/store';

const AppProvider = ({
  children,
  session,
}: {
  children: ReactNode;
  session: any;
}) => {
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
    <SessionProvider refetchOnWindowFocus={false} session={session}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} position="right" />
        <Provider store={storeRef.current}>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {children}
        </Provider>
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default AppProvider;

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import { Toaster } from 'react-hot-toast';

import { ThemeProvider } from '@/components/ThemeProvider';
import type { FCC } from '@/types';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const Providers: FCC = ({ children }) => {
  const [_queryClient] = React.useState(() => queryClient);
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <QueryClientProvider client={_queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen />
        </QueryClientProvider>
      </ThemeProvider>
      <Toaster
        toastOptions={{
          position: 'bottom-right',
          success: {
            className: 'border border-green-300 !bg-background text-sm !items-baseline rounded-md',
          },
          error: {
            className: 'border border-red-300 !bg-background text-sm !items-baseline rounded-md',
          },
          style: {
            color: 'var(--light)',
          },
        }}
        containerStyle={{
          zIndex: 99999999,
        }}
      />
    </>
  );
};

export default Providers;

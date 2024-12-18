import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const TanstackProvider = ({ children }: { children: React.ReactNode }) => {
  // Create a client
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: 0,
        refetchOnMount: false,
        retryOnMount: false,
        // set Global cache time access to env file
        staleTime: +import.meta.env.VITE_APIS_CACHE_APIS!,
        gcTime: +import.meta.env.VITE_APIS_CACHE_APIS!,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default TanstackProvider;

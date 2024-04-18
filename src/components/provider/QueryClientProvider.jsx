import {
  QueryClient,
  QueryClientProvider as TanstackProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 0,
    },
  },
});

const QueryClientProvider = ({ children }) => {
  return (
    <TanstackProvider client={queryClient}>
      <ReactQueryDevtools />
      {children}
    </TanstackProvider>
  );
};
export default QueryClientProvider;

import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import store from './store';
import { Provider } from 'react-redux';
import QueryClientProvider from './components/provider/QueryClientProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </Provider>
);

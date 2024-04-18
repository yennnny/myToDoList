import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/Layout';
import MainPage from '../pages/MainPage';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
    ],
  },
]);

export default router;

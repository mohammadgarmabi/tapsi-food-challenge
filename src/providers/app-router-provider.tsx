import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import createLazyRoute from '@/utils/createLazyRoute';

const AppRouterProvider = () => {
  const appRoutes = createBrowserRouter([
    {
      path: '/',
      lazy: createLazyRoute(import('@/pages/products')),
      errorElement: <div>Error</div>,
      hydrateFallbackElement: <div>Hydrate</div>,
    },
  ]);

  return <RouterProvider router={appRoutes} />;
};

export default AppRouterProvider;

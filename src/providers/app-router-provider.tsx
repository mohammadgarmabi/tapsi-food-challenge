import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import createLazyRoute from '@/utils/createLazyRoute';
import SplashScreen from '@/components/molecules/splash-screen';

const AppRouterProvider = () => {
  const appRoutes = createBrowserRouter([
    {
      path: '/',
      lazy: createLazyRoute(import('@/pages/products')),
      errorElement: <div>Error</div>,
      hydrateFallbackElement: <SplashScreen open={true} />,
    },
  ]);

  return <RouterProvider router={appRoutes} />;
};

export default AppRouterProvider;

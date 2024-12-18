import SplashScreen from '@/components/molecules/splash-screen';

const createLazyRoute = (importStatement: Promise<{ default: React.ComponentType }>) => {
  return async () => ({
    Component: (await importStatement).default,
    loader: () => <SplashScreen open={true} />,
  });
};

export default createLazyRoute;

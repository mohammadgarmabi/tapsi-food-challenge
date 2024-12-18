import AppRouterProvider from './providers/app-router-provider';
// import AppRouterProvider from './providers/app-router-provider';
import AppThemeProvider from './providers/app-theme-provider';
import buildProvidersTree from './providers/build-providers-tree';
import TanstackProvider from './providers/tanstack-provider';

const ProvidersTree = buildProvidersTree([
  [TanstackProvider, {}],
  [AppThemeProvider, {}],
]);

const App = () => {
  return (
    <ProvidersTree>
      <AppRouterProvider />
    </ProvidersTree>
  );
};

export default App;

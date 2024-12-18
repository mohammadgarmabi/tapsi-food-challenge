import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import themeOptions from '@/theme';
// import { prefixer } from "stylis";
// import rtlPlugin from "stylis-plugin-rtl";
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import React from 'react';

export default function AppThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = React.useMemo(() => createTheme(themeOptions), []);
  //
  // useEffect(() => {
  //   document.dir = "rtl";
  // }, []);

  const emotionCache = createCache({
    key: 'mui-ltr',
    stylisPlugins: [], // [rtlPlugin, prefixer],
  });

  return (
    <ThemeProvider theme={theme}>
      <CacheProvider value={emotionCache}>
        <CssBaseline />
        {children}
      </CacheProvider>
    </ThemeProvider>
  );
}

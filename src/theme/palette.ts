import { grey, brown, orange } from '@mui/material/colors';
import { alpha, PaletteOptions } from '@mui/material/styles';

interface CustomPaletteOption {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A100: string;
  A200: string;
  A400: string;
  A700: string;
}

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface SimplePaletteColorOptions extends Partial<CustomPaletteOption> {}
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface PaletteColor extends Partial<CustomPaletteOption> {}
}

const GREY = {
  ...grey,
};

const PRIMARY = {
  light: orange['300'],
  main: orange['500'],
  dark: orange['700'],
  contrastText: '#FFFFFF',
  50: orange['50'],
  100: orange['100'],
  200: orange['200'],
  300: orange['300'],
  400: orange['400'],
  500: orange['500'],
  600: orange['600'],
  700: orange['700'],
  800: orange['800'],
  900: orange['900'],
  A100: orange['A100'],
  A200: orange['A200'],
  A400: orange['A400'],
  A700: orange['A700'],
};

const SECONDARY = {
  light: brown['300'],
  main: brown['700'],
  dark: brown['900'],
  contrastText: '#FFFFFF',
  ...brown,
};

const INFO = {
  light: '#61F3F3',
  main: '#00B8D9',
  dark: '#006C9C',
  contrastText: '#FFFFFF',
  50: '#e0f7fa',
  100: '#b2ebf2',
  200: '#80deea',
  300: '#4dd0e1',
  400: '#26c6da',
  500: '#00bcd4',
  600: '#00acc1',
  700: '#0097a7',
  800: '#00838f',
  900: '#006064',
  A100: '#84ffff',
  A200: '#18ffff',
  A400: '#00e5ff',
  A700: '#00b8d4',
};

const SUCCESS = {
  light: '#4EBFA5',
  main: '#22C55E',
  dark: '#118D57',
  contrastText: '#ffffff',
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853',
};

const WARNING = {
  light: '#FFD666',
  main: '#FFAB00',
  dark: '#B76E00',
  contrastText: GREY[800],
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00',
};

const ERROR = {
  light: '#FFAC82',
  main: '#FF5630',
  dark: '#B71D18',
  contrastText: '#FFFFFF',
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000',
};

const COMMON = {
  common: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.2),
  action: {
    hover: alpha(GREY[500], 0.08),
    selected: alpha(GREY[500], 0.16),
    disabled: alpha(GREY[500], 0.8),
    disabledBackground: alpha(GREY[500], 0.24),
    focus: alpha(GREY[500], 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
};

export function palette(): PaletteOptions {
  return {
    ...COMMON,
    mode: 'light',
    text: {
      primary: GREY['900'],
      secondary: GREY['800'],
      disabled: GREY['600'],
    },
    background: {
      paper: GREY[50],
      default: GREY[200],
      neutral: GREY[200],
    },
    action: {
      ...COMMON.action,
      active: GREY[600],
    },
  };
}

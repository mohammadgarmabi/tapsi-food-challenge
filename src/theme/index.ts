import { createTheme, Theme } from '@mui/material';
import { componentsOverrides } from './overrides';
import { palette } from './palette';
import { typography } from './typography';

const themeOptions: Theme = createTheme({
  //
  palette: palette(),
  //
  typography,
  //
  components: componentsOverrides(),
  //
});

export default themeOptions;

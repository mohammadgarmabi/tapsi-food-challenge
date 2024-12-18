import { Components, Theme } from '@mui/material';

type MuiButtonComponentStyle = Components<Omit<Theme, 'components'>>['MuiButton'];

export type { MuiButtonComponentStyle };

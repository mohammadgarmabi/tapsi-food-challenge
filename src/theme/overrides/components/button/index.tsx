import { alpha } from '@mui/material/styles';
import { MuiButtonComponentStyle } from './button.types';

export default function MuiButton(): MuiButtonComponentStyle {
  return {
    defaultProps: {
      color: 'inherit',
      disableElevation: false,
      disableFocusRipple: false,
      disableRipple: false,
      disableTouchRipple: false,
    },
    styleOverrides: {
      root: ({ ownerState, theme }) => {
        const inheritColor = ownerState.color === 'inherit';

        const containedVariant = ownerState.variant === 'contained';

        const outlinedVariant = ownerState.variant === 'outlined';

        const textVariant = ownerState.variant === 'text';

        const smallSize = ownerState.size === 'small';

        const mediumSize = ownerState.size === 'medium';

        const largeSize = ownerState.size === 'large';

        const defaultStyle = {
          ...(inheritColor && {
            // CONTAINED
            ...(containedVariant && {
              color: theme.palette.common.white,
              backgroundColor: theme.palette.grey[800],
              '&:hover': {
                backgroundColor: theme.palette.grey[700],
              },
              // APPLY DARK MODE
              ...theme.applyStyles('dark', {
                color: theme.palette.grey[800],
                backgroundColor: theme.palette.common.white,
                '&:hover': {
                  backgroundColor: theme.palette.grey[400],
                },
              }),
            }),
            // OUTLINED
            ...(outlinedVariant && {
              borderColor: alpha(theme.palette.grey[500], 0.32),
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }),
            // TEXT
            ...(textVariant && {
              '&:hover': {
                backgroundColor: theme.palette.action.hover,
              },
            }),
          }),
          ...(outlinedVariant && {
            '&:hover': {
              borderColor: 'currentColor',
              boxShadow: '0 0 0 0.5px currentColor',
            },
          }),
          borderRadius: theme.shape.borderRadius * 2,
          boxShadow: 'none',
        };

        const size = {
          ...(smallSize && {
            height: 30,
            fontSize: 13,
            paddingLeft: 8,
            paddingRight: 8,
            ...(textVariant && {
              paddingLeft: 4,
              paddingRight: 4,
            }),
          }),
          ...(mediumSize && {
            paddingLeft: 12,
            paddingRight: 12,
            ...(textVariant && {
              paddingLeft: 8,
              paddingRight: 8,
            }),
          }),
          ...(largeSize && {
            height: 48,
            fontSize: 15,
            paddingLeft: 16,
            paddingRight: 16,
            ...(textVariant && {
              paddingLeft: 10,
              paddingRight: 10,
            }),
          }),
        };

        return [defaultStyle, size];
      },
    },
    variants: [],
  };
}

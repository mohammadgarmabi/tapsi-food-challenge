import React, { PropsWithChildren } from 'react';
import { MaterialDesignContent, SnackbarProvider } from 'notistack';
import { styled } from '@mui/material';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(({ theme }) => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: theme.palette.success.main,
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: theme.palette.error.main,
  },
  '&.notistack-MuiContent-warning': {
    backgroundColor: theme.palette.warning.main,
  },
  '&.notistack-MuiContent-info': {
    backgroundColor: theme.palette.info.main,
  },
  '&.notistack-MuiContent-default': {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    padding: '.6rem',
  },
  '&.notistack-MuiContent': {
    display: 'flex',
    justifyContent: 'space-between',
    '.go703367398': {
      margin: 'unset !important',
      padding: 'unset !important',
    },
  },
}));

const SnackbarAppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <SnackbarProvider
      autoHideDuration={3000}
      maxSnack={1}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      Components={{
        success: StyledMaterialDesignContent,
        error: StyledMaterialDesignContent,
        info: StyledMaterialDesignContent,
        default: StyledMaterialDesignContent,
        warning: StyledMaterialDesignContent,
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default SnackbarAppProvider;

import { BottomNavigation, BottomNavigationAction, Paper, Typography } from '@mui/material';
import { IBottomNavigationKitProps } from './bottom-navigation.types';
import React from 'react';

const BottomNavigationKit = (props: IBottomNavigationKitProps) => {
  const { value, onChange, options } = props;

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={1}>
      <BottomNavigation value={value} onChange={onChange}>
        {React.Children.toArray(
          options.map((option) => (
            <BottomNavigationAction
              label={<Typography variant="caption">{option.label}</Typography>}
              icon={option.icon}
            />
          ))
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNavigationKit;

import { BottomNavigationProps } from '@mui/material';

interface IBottomNavigationKitProps extends BottomNavigationProps {
  options: {
    label: string;
    icon: React.ReactNode;
  }[];
}

export type { IBottomNavigationKitProps };

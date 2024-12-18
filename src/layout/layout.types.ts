import { SxProps, Theme } from '@mui/material';

interface IMobileLayoutProps {
  children: React.ReactNode;
  actionBar?: React.ReactNode;
  bottomBar?: React.ReactNode;
  sxChildren?: SxProps<Theme>;
  sxActionBar?: SxProps<Theme>;
  sxBottomBar?: SxProps<Theme>;
}

interface IDesktopLayoutProps {
  children: React.ReactNode;
  sxChildren?: SxProps<Theme>;
  header?: React.ReactNode;
  sxHeader?: SxProps<Theme>;
}

type ILayoutProps = {
  mobile?: Omit<IMobileLayoutProps, 'children'>;
  desktop?: Omit<IDesktopLayoutProps, 'children'>;
} & { children: React.ReactNode };

export type { IMobileLayoutProps, IDesktopLayoutProps, ILayoutProps };

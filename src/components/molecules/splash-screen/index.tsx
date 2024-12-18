import { Backdrop } from '@mui/material';
import { ISplashScreenProps } from './splash-screen.types';
import CircularProgressKit from '../../atoms/circular-progress';

export default function SplashScreen(props: ISplashScreenProps) {
  const { open } = props;

  return (
    <Backdrop
      open={open}
      sx={{
        background: '#fff',
        zIndex: (theme) => theme.zIndex.drawer + 1,
        color: '#000',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <CircularProgressKit color="inherit" />
    </Backdrop>
  );
}

import { CircularProgress } from '@mui/material';
import { ICircularProgressKitProps } from './circular-progress.types';

const CircularProgressKit = (props: ICircularProgressKitProps) => {
  const { ...rest } = props;

  return <CircularProgress {...rest} />;
};

export default CircularProgressKit;

import { Typography } from '@mui/material';
import { ISubtitle2KitProps } from './subtitle2.types';

const Subtitle2 = (props: ISubtitle2KitProps) => {
  const { children, ...rest } = props;

  return (
    <Typography {...rest} variant="subtitle2">
      {children}
    </Typography>
  );
};

export default Subtitle2;

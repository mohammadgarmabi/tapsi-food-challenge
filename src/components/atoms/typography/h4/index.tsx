import { Typography } from '@mui/material';
import { IH4KitProps } from './h4.types';

const H4 = (props: IH4KitProps) => {
  const { children, ...rest } = props;

  return (
    <Typography {...rest} variant="h4">
      {children}
    </Typography>
  );
};

export default H4;

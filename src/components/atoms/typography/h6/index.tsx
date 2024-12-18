import { Typography } from '@mui/material';
import { IH6KitProps } from './h6.types';

const H6 = (props: IH6KitProps) => {
  const { children, ...rest } = props;

  return (
    <Typography {...rest} variant="h6">
      {children}
    </Typography>
  );
};

export default H6;

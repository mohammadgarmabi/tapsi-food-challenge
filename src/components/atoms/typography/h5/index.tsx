import { Typography } from '@mui/material';
import { IH5KitProps } from './h5.types';

const H5 = (props: IH5KitProps) => {
  const { children, ...rest } = props;

  return (
    <Typography {...rest} variant="h5">
      {children}
    </Typography>
  );
};

export default H5;

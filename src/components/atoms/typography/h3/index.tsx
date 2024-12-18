import { Typography } from '@mui/material';
import { IH3KitProps } from './h3.types';

const H3 = (props: IH3KitProps) => {
  const { children, ...rest } = props;

  return (
    <Typography {...rest} variant="h3">
      {children}
    </Typography>
  );
};

export default H3;

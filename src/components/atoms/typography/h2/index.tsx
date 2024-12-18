import { Typography } from '@mui/material';
import { IH2KitProps } from './h2.types';

const H2 = (props: IH2KitProps) => {
  const { children, ...rest } = props;

  return (
    <Typography {...rest} variant="h2">
      {children}
    </Typography>
  );
};

export default H2;

import { Typography } from '@mui/material';
import { IH1KitProps } from './h1.types';

const H1 = (props: IH1KitProps) => {
  const { children, ...rest } = props;

  return (
    <Typography {...rest} variant="h1">
      {children}
    </Typography>
  );
};

export default H1;

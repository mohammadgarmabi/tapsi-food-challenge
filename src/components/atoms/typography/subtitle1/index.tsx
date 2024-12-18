import { Typography } from '@mui/material';
import { ISubtitle1KitProps } from './subtitle1.types';

const Subtitle1 = (props: ISubtitle1KitProps) => {
  const { children, ...rest } = props;

  return (
    <Typography variant="subtitle1" {...rest}>
      {children}
    </Typography>
  );
};

export default Subtitle1;

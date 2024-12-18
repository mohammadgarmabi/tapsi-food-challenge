import { Button } from '@mui/material';
import { IButtonKitProps } from './button.types';
import CircularProgressKit from '../circular-progress';

const ButtonKit = (props: IButtonKitProps) => {
  const { children, isLoading, ...rest } = props;

  return (
    <Button
      {...rest}
      disabled={isLoading ?? rest.disabled}
      endIcon={isLoading ? <CircularProgressKit color="inherit" size={14} /> : rest.endIcon}
    >
      {children}
    </Button>
  );
};

export default ButtonKit;

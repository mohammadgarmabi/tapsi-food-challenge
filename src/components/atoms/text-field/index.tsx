import { TextField } from '@mui/material';
import { TextFieldKitProps } from './text-field.types';

const TextFieldKit = ({ ref, error, helperText, ...props }: TextFieldKitProps) => {
  return (
    <TextField
      inputRef={ref}
      error={error}
      helperText={helperText}
      fullWidth
      margin="normal"
      {...props}
    />
  );
};

export default TextFieldKit;

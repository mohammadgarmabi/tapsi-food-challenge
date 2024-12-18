import ButtonKit from '@/components/atoms/button';
import TextFieldKit from '@/components/atoms/text-field';
import useControllerView from './useControllerView';
import { Controller } from 'react-hook-form';
import { InputAdornment, inputBaseClasses, Stack } from '@mui/material';
import { Add } from 'iconsax-react';

const ProductForm = () => {
  const { onSubmit, control, handleSubmit, formFields, formFieldsNames, disabledButton, palette } =
    useControllerView();

  return (
    <Stack sx={{ width: '100%' }} component="form" onSubmit={handleSubmit(onSubmit)}>
      {formFieldsNames.map((fieldName) => (
        <Controller
          key={fieldName}
          name={fieldName}
          control={control}
          render={({ field, formState }) => {
            return (
              <>
                <TextFieldKit
                  {...formFields[fieldName]}
                  {...field}
                  // label="Filled"
                  size="small"
                  variant="outlined"
                  error={!!formState.errors[fieldName]?.message}
                  helperText={formState.errors[fieldName]?.message}
                  slotProps={{
                    input: {
                      sx: {
                        borderRadius: 3,
                      },
                      endAdornment: (
                        <InputAdornment
                          position="end"
                          sx={{
                            opacity: 0,
                            pointerEvents: 'none',
                            [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                              opacity: 1,
                            },
                            transition: 'opacity 0.3s ease-in-out',
                          }}
                        >
                          <ButtonKit
                            sx={{ margin: '5px -10px 5px 5px' }}
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={disabledButton}
                          >
                            <Add size="22" color={palette.common.white} />
                          </ButtonKit>
                        </InputAdornment>
                      ),
                    },
                  }}
                />
              </>
            );
          }}
        />
      ))}
    </Stack>
  );
};

export default ProductForm;

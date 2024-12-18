import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z as zod } from 'zod';
import { toZod } from 'tozod';
import { useTheme } from '@mui/material';
import { useProductStoreShallow } from '@/stores/useProduct';

interface IForm {
  title: string;
}

const productSchema: toZod<IForm> = zod.object({
  title: zod.string({ required_error: 'required' }),
});

const useControllerView = () => {
  const { palette } = useTheme();
  const { control, handleSubmit, watch, reset } = useForm<IForm>({
    resolver: zodResolver(productSchema),
  });
  const { addNewProduct } = useProductStoreShallow();

  const disabledButton = watch('title') === '';

  const onSubmit: SubmitHandler<IForm> = (data) => {
    const newProduct = {
      id: new Date().getTime().toString(),
      title: data.title,
      base64Image: '',
      description: '',
      price: 0,
      strikePrice: 0,
    };

    addNewProduct(newProduct);
    reset({ title: '' });

    // Handle form submission, e.g., send data to an API
  };

  const formFields = {
    title: {
      label: 'Title',
      placeholder: 'Enter product title',
    },
  };

  const formFieldsNames = Object.keys(formFields) as (keyof IForm)[];

  return {
    formFields,
    formFieldsNames,
    control,
    onSubmit,
    handleSubmit,
    disabledButton,
    palette,
  };
};

export default useControllerView;

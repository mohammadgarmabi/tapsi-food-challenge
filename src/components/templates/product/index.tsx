import H4 from '@/components/atoms/typography/h4';
import ProductForm from '@/components/molecules/product-form';
import ProductList from '@/components/organisms/product-list';
import { Stack } from '@mui/material';

const ProductPageTemplate = () => {
  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <H4>Product List</H4>
        <Stack sx={{ display: { xs: 'none', md: 'block' } }}>
          <ProductForm />
        </Stack>
      </Stack>
      <ProductList />
    </>
  );
};

export default ProductPageTemplate;

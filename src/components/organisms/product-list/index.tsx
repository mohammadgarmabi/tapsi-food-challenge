import ProductCard from '@/components/molecules/product-card';
import Grid2 from '@mui/material/Grid2';
import { useProductStoreShallow } from '@/stores/useProduct';
import React from 'react';

const ProductList = () => {
  const { productList } = useProductStoreShallow();

  return (
    <Grid2
      sx={{
        marginTop: 2,
      }}
      container
      spacing={{
        xs: 2,
        sm: 2,
        md: 3,
      }}
    >
      {React.Children.toArray(
        productList.map((product) => (
          <Grid2 key={product.title + product.id} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCard product={product} />
          </Grid2>
        ))
      )}
    </Grid2>
  );
};

export default ProductList;

import ProductCardSkeleton from '@/components/molecules/product-card/product-card.skeleton';
import Grid2 from '@mui/material/Grid2';
import React from 'react';

const ProductListSkeleton = () => {
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
        Array.from({ length: 12 }).map((_, index) => (
          <Grid2 key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <ProductCardSkeleton />
          </Grid2>
        ))
      )}
    </Grid2>
  );
};

export default ProductListSkeleton;

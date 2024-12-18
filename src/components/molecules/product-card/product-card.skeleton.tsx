import { Skeleton } from '@mui/material';

const ProductCardSkeleton = () => {
  return (
    <Skeleton
      animation="wave"
      height={100}
      sx={{ borderRadius: 3 }}
      width="100%"
      variant="rectangular"
    />
  );
};

export default ProductCardSkeleton;

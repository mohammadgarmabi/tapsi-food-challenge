import ProductListSkeleton from '@/components/organisms/product-list/product-list.skeleton';
import { Skeleton } from '@mui/material';

const ProductPageTemplateSkeleton = () => {
  return (
    <>
      <Skeleton variant="text" height={40} width={150} />
      <ProductListSkeleton />
    </>
  );
};

export default ProductPageTemplateSkeleton;

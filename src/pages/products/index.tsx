import ProductActionBar from '@/components/molecules/product-action-bar';
import ProductForm from '@/components/molecules/product-form';
import ProductPageTemplate from '@/components/templates/product';
import ProductPageTemplateSkeleton from '@/components/templates/product/product-page-template.skeleton';
import { useGetProduct } from '@/hooks/queries/useProductQueries';
import MainLayout from '@/layout';
import { useProductStoreShallow } from '@/stores/useProduct';
import React from 'react';

const ProductPage = () => {
  const { data, isLoading } = useGetProduct();
  const { setProductList } = useProductStoreShallow();

  // I usually don't set data like this, but since I don't have access to the delete API,
  // I have two options: either create a BFF for myself or go the simpler route and set it.

  React.useEffect(() => {
    if (!isLoading && data?.products && data?.products?.length > 0) {
      setProductList(data?.products || []);
    }
  }, [isLoading]);

  return (
    <MainLayout
      mobile={{
        actionBar: <ProductActionBar />,
        bottomBar: <ProductForm />,
      }}
      desktop={{
        header: <ProductActionBar />,
      }}
    >
      {/* Waiting for Product List */}
      {isLoading && <ProductPageTemplateSkeleton />}

      {/* Product List */}
      {!isLoading && <ProductPageTemplate />}
    </MainLayout>
  );
};

export default ProductPage;

import { useQuery } from '@tanstack/react-query';
import { GET_PRODUCT_KEY } from '@/constants/react-query.keys';
import productController from '@/apis/controller/product';

const useGetProduct = () => {
  return useQuery({
    queryKey: GET_PRODUCT_KEY(),
    queryFn: () => productController.getProductList(),
  });
};

export { useGetProduct };

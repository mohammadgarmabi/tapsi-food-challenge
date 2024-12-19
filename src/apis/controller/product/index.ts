import apis from '@/apis';
import endpoints from '@/apis/config/endpoints';
import { IProductResponseAction } from '@/apis/dto/product';

const productController = {
  // get product list
  getProductList: async () => {
    const response = await apis.get<ApiResponse<IProductResponseAction[]>>(endpoints.product);

    return response.data;
  },
  // get product by id

  // create product

  // update product

  // delete product
};
export default productController;

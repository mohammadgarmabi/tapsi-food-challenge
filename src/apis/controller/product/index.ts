import apis from '@/apis';
import endpoints from '@/apis/config/endpoints';
import { IProductResponseAction } from '@/apis/dto/product';

const productController = {
  getProductList: async () => {
    const response = await apis.get<ApiResponse<IProductResponseAction[]>>(endpoints.product);

    return response.data;
  },
};
export default productController;

import { IProductResponseAction } from '@/apis/dto/product';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { useShallow } from 'zustand/react/shallow';

interface ProductStore {
  productList: IProductResponseAction[];
  selectedProducts: string[];
  setSelectedProducts: (id: string) => void;
  setDeselectedProducts: (id: string) => void;
  removeSelectedProducts: () => void;
  setProductList: (productList: IProductResponseAction[]) => void;
  addNewProduct: (product: IProductResponseAction) => void;
}

const useProductStore = create<ProductStore>()(
  persist(
    (set) => ({
      productList: [],
      selectedProducts: [],
      setSelectedProducts: (id) =>
        set((state) => ({ selectedProducts: [...state.selectedProducts, id] })),
      //
      setDeselectedProducts: (id) =>
        set((state) => ({ selectedProducts: state.selectedProducts.filter((_id) => _id !== id) })),
      //
      removeSelectedProducts: () =>
        set((state) => ({
          ...state,
          productList: state.productList.filter(
            (product) => !state.selectedProducts.includes(product.id)
          ),
          selectedProducts: [],
        })),
      //
      setProductList: (productList) => set({ productList }),
      //
      addNewProduct: (product) =>
        set((state) => ({ ...state, productList: [...state.productList, product] })),
    }),
    {
      name: 'product-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

// selector
const useProductStoreShallow = () => useProductStore(useShallow((state) => state));

export { useProductStore, useProductStoreShallow };

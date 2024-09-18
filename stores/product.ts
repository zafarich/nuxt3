import { useProduct } from '@/composables/api/product';
import type { Product } from '@/types/product.type';
import type { IResponse } from '@/types/response.types';
export const useProductStore = defineStore('product', () => {
  const productsApi = useProduct();
  const products = ref([]);

  const getProducts = async () => {
    const { data } = await productsApi.getProducts();
    products.value = data || [];
    return data;
  };

  const getById = async (id: number): Promise<Product> => {
    const res: IResponse = await productsApi.getById(id);
    return res.data?.data as Product;
  };

  return { products, getProducts, getById };
});

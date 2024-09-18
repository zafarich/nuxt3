import { useProduct } from '@/composables/api/product';
import type { Product } from '@/types/product.type';
export const useProductStore = defineStore('product', () => {
  const productsApi = useProduct();
  const products = ref([]);
  const product = ref<Product>({});

  const getProducts = async () => {
    const { data } = await productsApi.getProducts();
    products.value = data || [];
    return data;
  };

  const getById = async (id: number): Promise<Product> => {
    const res = await productsApi.getById(id);
    return res;
  };

  return { products, getProducts, getById };
});

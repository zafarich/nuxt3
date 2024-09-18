import type { Product } from '@/types/product.type';

const baseUrl = '/web/v1/header';

export const useProduct = () => {
  const { $api } = useNuxtApp();

  const getProducts = async () => {
    const { data } = await $api(`${baseUrl}/top-categories`);
    return data;
  };

  const getById = async (id: number): Promise<Product> => {
    const { data } = await $api(`/web/v1/product/detail`, {
      params: {
        id,
      },
    });
    return data?.data;
  };

  return {
    getById,
    getProducts,
  };
};

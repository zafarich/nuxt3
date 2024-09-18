import type { Product } from '@/types/product.type';
import type { IResponse } from '@/types/response.types';
const baseUrl = '/web/v1/header';

export const useProduct = () => {
  const nuxtApp = useNuxtApp();
  const $api = nuxtApp.$api;

  const getProducts = async () => {
    const { data } = await $api(`${baseUrl}/top-categories`);
    return data;
  };

  const getById = async (id: number): Promise<IResponse> => {
    const res = (await $api(`/web/v1/product/detail`, {
      params: {
        id,
      },
    })) as Promise<IResponse>;
    return res;
  };

  return {
    getById,
    getProducts,
  };
};

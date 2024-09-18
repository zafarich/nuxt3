<script setup lang="ts">
import type { Product } from '@/types/product.type';
const productStore = useProductStore();

const product = ref<Product | null>(null);

async function getProduct() {
  const res = (await productStore.getById(87920)) as Product;
  product.value = res;
}
</script>

<template>
  <div>
    <div style="max-width: 500px">
      <client-only>
        <base-input
          v-model="text"
          type="tel"
          mask="## ### ## ##"
          class="input-with-prepend"
          prepend
          label="Email"
        >
          <template #prepend> +998 </template>
        </base-input>
      </client-only>

      <div>
        <button @click="getProduct">Get Product</button>
      </div>

      <pre>{{ product }}</pre>
    </div>
  </div>
</template>

<style lang="scss">
.test-class {
  background-color: $grey-1;
}
</style>

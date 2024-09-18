<script setup lang="ts">
import type { Product } from '@/types/product.type';
const { getById } = useProductStore();

const product = ref(null);

async function getProduct() {
  const res = await getById(87920);
  product.value = res as Product;
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

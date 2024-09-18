<script setup lang="ts">
const countStore = useCountStore();
const productStore = useProductStore();
const text = ref('');
function increment() {
  countStore.increment();
}

const { data: products } = useAsyncData('products', () =>
  productStore.getProducts()
);
</script>

<template>
  <div>
    <div style="max-width: 300px">
      <price-card />
    </div>
    <div>
      {{ countStore.count }}
      <q-btn label="Increment" @click="increment" />
      <q-btn color="secondary" label="Increment" @click="increment" />
      <pre>{{ products }}</pre>
      <div class="test-class">Hello</div>

      <div class="q-pa-md">
        <div class="row">
          <div class="col-12">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.test-class {
  background-color: $grey-1;
}
</style>

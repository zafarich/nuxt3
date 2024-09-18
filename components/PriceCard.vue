<template>
  <div class="narx-karta">
    <div class="narx-malumot">
      <span class="eski-narx">{{ oldPrice }} so'm</span>
      <span class="chegirma">-{{ discount }}%</span>
      <h2 class="yangi-narx">{{ newPrice }} so'm</h2>
    </div>
    <div class="tugma-guruh">
      <button class="savatga-qoshish">Savatga qo'shish</button>
      <button class="hozir-sotib-olish">Bir bosishda sotib olish</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const oldPrice = ref(1329000);
const discount = ref(28);

const newPrice = computed(() => {
  return oldPrice.value - (oldPrice.value * discount.value) / 100;
});
</script>

<style scoped>
.price-card {
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  border: 1px solid #e0e0e0;
}

.price-info {
  margin-bottom: 20px;
}

.old-price {
  position: relative;
  color: #999;
  font-size: 18px;
}

.old-price::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  height: 1px;
  background-color: #999;
  transform: translateY(-50%);
}

.discount {
  background-color: #e91e63;
  color: white;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 14px;
  margin-left: 10px;
  display: inline-block;
  transform: skewX(-10deg);
}

.new-price {
  font-size: 28px;
  font-weight: bold;
  margin-top: 10px;
}

.button-group {
  display: flex;
  gap: 10px;
}

button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.add-to-cart {
  background-color: #fdd835;
  color: #333;
}

.buy-now {
  background-color: #f5f5f5;
  color: #333;
}
</style>

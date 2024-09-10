<template>
  <div>
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
const message = ref("sdf");

const aa = "e3";

console.log(message.value);
</script>

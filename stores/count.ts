export const useCountStore = defineStore(
  'count',
  () => {
    const count = ref(1);

    function increment() {
      count.value++;
    }
    return { count, increment };
  },
  {
    persist: true,
  }
);

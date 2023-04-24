interface UserCounter {
  count: number;
  increment: number;
}

export const useCounter = defineStore('count', (): UserCounter => {
    const count = ref<number>(0);
    function increment(): number {
      return count.value++;
    }
  
    return {
      count,
      increment
    };
})
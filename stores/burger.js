export const useBurger = defineStore('burger', () => {
    let menuActive = ref(false);
    function toggleMenu() {
      menuActive.value = !menuActive.value;
    }

    function getActive() {
      return menuActive.value;
    }

    function closeMenu() {
      return menuActive.value = false;
    }
  
    return {
      menuActive,
      toggleMenu,
      getActive,
      closeMenu
    };
});
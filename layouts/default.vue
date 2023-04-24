<template>
  <div class="default">
    <Header />
    <!-- Some default layout shared across all pages -->
    <!-- <slot /> -->
    <NuxtPage class="nuxt-page" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
</script>


<style lang="scss">
@import '@/assets/styles/main.scss';
@import '@/assets/styles/media.scss';

html {
    font-family: 'Montserrat', sans-serif;
}

.nuxt-page {
  min-height: 550px;
}

.container {
    margin-right: auto;
    margin-left: auto;
    padding: 0 14px;

    @include desktop {
      max-width: 1110px;
    }
}
</style>
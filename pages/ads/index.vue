<template>
  <div class="docs">
    <div class="container">
      <PageTitle title="Объявления"/>
      <MainBlocks
        inner
        more
        :items="allAds"
        class="docs__items"
      />
    </div>
  </div>
</template>

<script lang="js">
import PageTitle from '~/components/page-title/PageTitle';
import { useAds } from "~/stores/ads";

export default {
  components: { PageTitle },
  setup() {
    const storeAds = useAds();
    const allAds = storeAds.ads.reverse();
    return {
      storeAds,
      allAds,
      PageTitle
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/styles/media.scss';

  .docs {

    &__items {
      margin-top: 32px;
    }
  }
</style>